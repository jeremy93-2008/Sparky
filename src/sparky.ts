import { SparkyFunction } from "./sparky.function";
import { generateDOM } from "./sparky.dom";

export interface IRenderReturn {
    dom: HTMLElement,
    func: Function[]
}

type ISelfFunction = (self: SparkyFunction) => IRenderReturn;

interface ISparkyComponent {
    self: SparkyFunction;
    func: ISelfFunction;
}

export class Sparky {
    private static currentDom: HTMLElement;

    /**
     * Generate a Sparky Component that can be mount.
     * @param renderFunc - The function that going to be execute to render html template
     */
    static component(renderFunc: ISelfFunction) {
        const thisFunction = new SparkyFunction(renderFunc);
        return {self: thisFunction, func: renderFunc} as ISparkyComponent;
    }

    /**
     * Mount a Sparky Component in the DOM Tree and keep it hydrate.
     * @param component - Sparky Component
     * @param dom - The dom element where you want to mount this component
     */
    static mount(component: ISparkyComponent, dom?: HTMLElement) { 
        const { self, func } = component;
        const finalDOM = generateDOM(this.currentDom, func.call(window, self), self);
        if(!finalDOM.isConnected && dom)
            dom.appendChild(finalDOM);
        this.currentDom = finalDOM as HTMLElement;
    }
}

/**
 * Render the html string template to HTML elements
 * @param html - Array of HTML String 
 * @param computedProps - Computed Props used to pass Javascript into template
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function render(html: TemplateStringsArray, ...computedProps: any[]): IRenderReturn {
    const domNode = document.createElement("div");
    const func: Function[] = [];
    const newHTML = html.map((stringHTML, i) => {
        let htmlLine = ""
        htmlLine += stringHTML
        if(typeof computedProps[i] == "function") { 
            func.push(computedProps[i])
            htmlLine += "'functionScoped'";
        } else {
            if(computedProps[i] && (computedProps[i] as string).startsWith("<"))
                htmlLine += computedProps[i]
            else if(typeof computedProps[i] == "string")
                htmlLine += `<span class='computed'>${computedProps[i]}</span>`
        }
        return htmlLine;
    })
    domNode.innerHTML = newHTML.join("");
    return {dom: domNode.firstElementChild as HTMLElement, func};
}
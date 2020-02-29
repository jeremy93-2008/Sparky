import { SparkyFunction } from "./sparky.function";
import { diff } from "./sparky.dom";
import { setAllEvents } from "./sparky.event";
import { EventManager } from "./sparky.eventmanager";

export interface IRenderReturn {
    dom: HTMLElement,
    func: Function[]
}

export type ISelfFunction = (self: SparkyFunction) => IRenderReturn;

export interface ISparkyComponent {
    self: SparkyFunction;
    selfFn: ISelfFunction;
}

export class Sparky {
    private static currentDom: HTMLElement;

    /**
     * Generate a Sparky Component that can be mount.
     * @param renderFunc The function that going to be execute to render html template
     */
    static component(renderFunc: ISelfFunction) {
        const thisFunction = new SparkyFunction(renderFunc);
        return { self: thisFunction, selfFn: renderFunc } as ISparkyComponent;
    }

    /**
     * Mount a Sparky Component in the DOM Tree and keep it hydrate.
     * @param component Sparky Component
     * @param dom The dom element where you want to mount this component
     */
    static mount(component: ISparkyComponent, dom?: HTMLElement) {
        const { self, selfFn } = component;
        const render = selfFn.call(window, self) as IRenderReturn;

        let finalDOM = diff(this.currentDom, render.dom);
        finalDOM = setAllEvents({dom: finalDOM, func: render.func}, self);
        if (!finalDOM) return;
        EventManager.listen();
        if (!finalDOM.isConnected && dom)
            dom.appendChild(finalDOM);
        this.currentDom = finalDOM as HTMLElement;
    }

    static diff(oldNode: HTMLElement, newNode: HTMLElement) {
        return diff(oldNode, newNode)
    }
}

/**
 * Render the html string template to HTML elements
 * @param html Array of HTML String 
 * @param computedProps Computed Props used to pass Javascript into template
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function render(html: TemplateStringsArray | string, ...computedProps: any[]): IRenderReturn {
    const domNode = document.createElement("div");
    const func: Function[] = [];

    const newHTML = (typeof html == "string") ? html
        : html.map((stringHTML, i) => {
            let htmlLine = ""
            htmlLine += stringHTML
            if(!computedProps[i]) return htmlLine;
            if (typeof computedProps[i] == "function") {
                func.push(computedProps[i])
                htmlLine += "'functionScoped'";
            } else if(computedProps[i].type && computedProps[i].type == "SparkyComponent") {
                const comp = computedProps[i] as ISparkyComponent;
                const render =  comp.selfFn.call(window, comp.self) as IRenderReturn;
                
                const div = document.createElement("div");
                div.appendChild(render.dom)

                func.push(...render.func);
                htmlLine += div.innerHTML;
            } else {
                computedProps[i] = new String(computedProps[i]);
                if ((computedProps[i] as string).startsWith("<"))
                    htmlLine += computedProps[i]
                else
                    htmlLine += `<span class='computed'>${computedProps[i]}</span>`
            }
            return htmlLine;
        })
        
    domNode.innerHTML = Array.isArray(newHTML) ? newHTML.join("") : newHTML;
    return { dom: domNode.firstElementChild as HTMLElement, func };
}
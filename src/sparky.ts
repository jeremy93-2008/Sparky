import { SparkyFunction } from "./sparky.function";
import { generateDOM } from "./sparky.dom";

export interface renderReturn {
    dom: HTMLElement,
    func: Function[]
}

export class Sparky {
    private static currentDom: HTMLElement;
    static component(renderFunc: (self: SparkyFunction) => renderReturn) {
        const thisFunction = new SparkyFunction(renderFunc);
        return {self: thisFunction, func: renderFunc};
    }

    static mount(component: {self: SparkyFunction, func: (self: SparkyFunction) => renderReturn}, dom?: HTMLElement) { 
        const { self, func } = component;
        const finalDOM = generateDOM(this.currentDom, func.call(window, self), self);
        if(!finalDOM.isConnected && dom)
            dom.appendChild(finalDOM);
        this.currentDom = finalDOM as HTMLElement;
    }
}

export function render(html: TemplateStringsArray, ...computed: any[]): renderReturn {
    const domNode = document.createElement("div");
    const func: Function[] = [];
    const newHTML = html.map((stringHTML, i) => {
        let htmlLine = ""
        htmlLine += stringHTML
        if(typeof computed[i] == "function") { 
            func.push(computed[i])
            htmlLine += "'functionScoped'";
        } else {
            htmlLine += computed[i]
        }
        return htmlLine;
    })
    domNode.innerHTML = newHTML.join("");
    return {dom: domNode.firstElementChild as HTMLElement, func};
}
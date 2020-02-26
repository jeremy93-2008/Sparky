import { SparkyFunction } from "./sparky.function";
import { generateDOM } from "./sparky.dom";

export class Sparky {
    private static currentDom: HTMLElement;
    static component(renderFunc: (S: SparkyFunction) => HTMLElement) {
        const thisFunction = new SparkyFunction(renderFunc);
        return {self: thisFunction, func: renderFunc};
    }

    static mount(component: {self: SparkyFunction, func: (S: SparkyFunction) => HTMLElement}, dom?: HTMLElement) { 
        const { self, func } = component;
        const finalDOM = generateDOM(this.currentDom, func.call(window, self), self);
        if(!finalDOM.isConnected && dom)
            dom.appendChild(finalDOM);
        this.currentDom = finalDOM as HTMLElement;
    }
}

export function render(html: string) {
    const domNode = document.createElement("div");
    domNode.innerHTML = html;
    return domNode.firstElementChild as HTMLElement;
}
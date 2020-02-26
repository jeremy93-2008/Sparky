import { SparkyFunction } from "./sparky.function";

export class Sparky {
    static component(renderFunc: () => HTMLElement) {
        return renderFunc.call(new SparkyFunction(renderFunc));
    }

    static mount(component: Document, dom: HTMLElement) {
        dom.appendChild(component);
    }
}

export function render(html: string) {
    // We need to create a DOM tree each time that a new string is giving and after we call a diff one to modify only the one that had changed based in nodeName and attributes, and if children exist going down recursively
    // One DOM is the current one shown in the browser
    // The Second is the new one, we just need to do a diff between them and apply those in the first one.
    const domNode = document.createElement("div");
    domNode.innerHTML = html;
    return domNode;
}
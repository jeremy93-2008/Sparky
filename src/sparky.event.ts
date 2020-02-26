import { SparkyFunction } from "./sparky.function";

export function setEvents(dom: HTMLElement, self: SparkyFunction) : HTMLElement {
    Array.from(dom.attributes).forEach((attr: Attr) => {
        if(attr.name.startsWith("on")) {
            dom.addEventListener(attr.name.replace("on", ""), (event) => {
                const fn = eval(`(${attr.value})`);
                fn.bind(self)(event);
            })
            dom.attributes.removeNamedItem(attr.name)
        }
    })
    return dom;
}
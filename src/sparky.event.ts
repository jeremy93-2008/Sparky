import { SparkyFunction } from "./sparky.function";
import { renderReturn } from "./sparky";

export function setEvents(render: renderReturn, self: SparkyFunction) : HTMLElement {
    const { dom, func } = render;
    Array.from(dom.attributes).forEach((attr: Attr) => {
        if(attr.name.startsWith("on")) {
            const execFun = func.shift();
            dom.addEventListener(attr.name.replace("on", ""), (event) => {    
                execFun.call(self)
            })
            dom.attributes.removeNamedItem(attr.name)
        }
    })
    return dom;
}
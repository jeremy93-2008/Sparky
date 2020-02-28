import { SparkyFunction } from "./sparky.function";
import { IRenderReturn } from "./sparky";

export function setEvents(render: IRenderReturn, self: SparkyFunction) : HTMLElement {
    const { dom, func } = render;
    Array.from(dom.attributes).forEach((attr: Attr) => {
        if(attr.name.startsWith("on")) {
            const execFun = func.shift();
            dom.addEventListener(attr.name.replace("on", ""), (event) => {    
                execFun.call(self, event)
            })
            dom.attributes.removeNamedItem(attr.name)
        }
    })
    return dom;
}

export function setAllEvents(render: IRenderReturn, self: SparkyFunction) : HTMLElement {
    const { dom, func } = render;
    const currentStack = [dom];
    while(currentStack.length > 0) {
        const ele = currentStack.pop();
        setEvents({dom: ele, func: render.func}, self);
        if(ele.children.length > 0) {
            Array.from(ele.children).map((child: HTMLElement) => currentStack.push(child))
        }
    }
    return dom;
}
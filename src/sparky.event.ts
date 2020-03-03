import { SparkyFunction } from "./sparky.function";
import { IReconciliateProps } from "./sparky";
import { EventManager } from "./sparky.eventmanager";

export function setEvents(reconciliate: IReconciliateProps, self: SparkyFunction) : HTMLElement {
    const { dom, func } = reconciliate;
    Array.from(dom.attributes).forEach((attr: Attr) => {
        if(attr.name.startsWith("on")) {
            const execFun = func.shift();
            EventManager.addEvent(dom, attr.name.replace("on", ""), execFun.bind(window, event))
            dom.attributes.removeNamedItem(attr.name)
        }
    })
    return dom;
}

export function setAllEvents(reconciliate: IReconciliateProps, self: SparkyFunction) : HTMLElement {
    EventManager.removeUnusedEvents();
    
    const { dom, func } = reconciliate;
    const currentStack = [dom];
    while(currentStack.length > 0) {
        const ele = currentStack.shift();
        setEvents({dom: ele, func}, self);
        if(ele.children.length > 0) {
            Array.from(ele.children).map((child: HTMLElement) => currentStack.push(child))
        }
    }
    return dom;
}
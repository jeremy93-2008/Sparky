import { HTMLElementSparkyEnhanced } from './sparky.component';

/**
 * @internal
 */
interface IEventReturn {
    dom: HTMLElementSparkyEnhanced;
    attr: Attr;
}

/**
 * @internal
 */
export function findEvent(element: HTMLElement, renderId: string, index: number) : IEventReturn {
    const domQueue = [element];
    while(domQueue.length > 0) {
        const elem = domQueue.shift();
        const eventAttr = Array.from(elem.attributes).find((attr) => {
            if(attr.name.startsWith("on")) {
                return attr.value == `SparkyFunction#${renderId}#${index}`;
            }
        })

        if(eventAttr) return {dom: elem, attr: eventAttr};

        for(let index = 0; index < elem.children.length; index++) {
            domQueue.push(elem.children[index] as HTMLElement)
        }
    }
}
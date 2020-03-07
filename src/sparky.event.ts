interface IEventReturn {
    dom: HTMLElement;
    attr: Attr;
}

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
        
        Array.from(elem.children as HTMLCollectionOf<HTMLElement>).forEach((child) => {
            domQueue.push(child)
        })
    }
}
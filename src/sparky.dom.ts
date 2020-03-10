let currentDom: HTMLElement = null;

export function getCurrentDom() {
    return currentDom;
}

export function setCurrentDom(dom: HTMLElement) {
    currentDom = dom;
}

export function reconciliate(currentDom: HTMLElement, nextDom: HTMLElement) {
    if (!nextDom) return null;
    if (!currentDom && nextDom) return nextDom;
    if (currentDom.isEqualNode(nextDom)) return currentDom;
    if (currentDom.nodeName !== nextDom.nodeName) return nextDom;

    const domQueue: [Node, Node][] = [[currentDom, nextDom]];

    while(domQueue.length > 0) {
        const [currentElem, nextElem] = domQueue.shift();
        const removedList: Node[] = [];
        reconciliateAttribute(currentElem as HTMLElement, nextElem as HTMLElement);

        const nextElemChildren = nextElem.childNodes;
        currentElem.childNodes.forEach((node, i) => {
            const nextNode = nextElemChildren.item(i);

            if(!nextNode) {
                removedList.push(node)
                return;
            }

            if(node.isEqualNode(nextNode)) return;

            if(node.nodeName !== nextNode.nodeName) {
                currentElem.replaceChild(nextNode, node);
                return;
            }

            domQueue.push([node, nextNode])
        });

        for(let i = currentElem.childNodes.length; i < nextElem.childNodes.length; i++) {
            const nextDom = nextElemChildren.item(i);
            currentElem.appendChild(nextDom)
        }

        removedList.forEach((rmElem) => {
            currentElem.removeChild(rmElem)
        })

    }

    return currentDom;
}

function reconciliateAttribute(currentElem: HTMLElement, nextElem: HTMLElement) {
    if(!currentElem.attributes || !nextElem.attributes) return;

    Array.from(currentElem.attributes).forEach(att => {
        
    })
}
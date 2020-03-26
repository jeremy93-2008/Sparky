import { HTMLElementSparkyEnhanced } from "./sparky.component";
import cloneDeep from "clone-deep";

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
            const nextNode = nextElemChildren.item(i) as HTMLElementSparkyEnhanced;

            if(!nextNode) {
                removedList.push(node)
                return;
            }

            if(node.isEqualNode(nextNode)) return;

            if(node.nodeName !== nextNode.nodeName) {
                currentElem.replaceChild(cloneDeep(nextNode), node);
                return;
            }

            if(node.nodeName == "#text" && node.textContent !== nextNode.textContent) {
                node.textContent = nextNode.textContent;
                return;
            }

            if(nextNode.__sparkyEvent) {
                (node as HTMLElementSparkyEnhanced).__sparkyEvent = nextNode.__sparkyEvent;
            }

            domQueue.push([node, nextNode])
        });

        for(let i = currentElem.childNodes.length; i < nextElem.childNodes.length; i++) {
            const childNode = nextElem.childNodes.item(i);
            currentElem.appendChild(cloneDeep(childNode))
        }

        removedList.forEach((rmElem) => {
            currentElem.removeChild(rmElem)
        })

    }

    return currentDom;
}

function reconciliateAttribute(currentElem: HTMLElement, nextElem: HTMLElement) {
    if(!currentElem.attributes || !nextElem.attributes) return;

    const sortedCurrentAttributes = Array.from(currentElem.attributes).sort((attr, attr2) => attributeSort(attr, attr2))
    const sortedNextAttributes = Array.from(nextElem.attributes).sort((attr, attr2) => attributeSort(attr, attr2))

    const removedAttr: Attr[] = [];

    sortedCurrentAttributes.forEach((attr, i) => {
        const nextAttr = sortedNextAttributes[i];

        if(!nextAttr) {
            removedAttr.push(attr);
            return;
        }
        
        if(attr.name !== nextAttr.name) {
            removedAttr.push(attr);
            currentElem.setAttribute(nextAttr.name, nextAttr.value);
            return;
        }

        if(attr.value !== nextAttr.value) {
            attr.value = nextAttr.value;
        }
    })

    for(let i = sortedCurrentAttributes.length; i < sortedNextAttributes.length; i++) {
        const nextAttr = sortedNextAttributes[i];
        currentElem.setAttribute(nextAttr.name, nextAttr.value);
    }

    removedAttr.forEach(attr => currentElem.removeAttribute(attr.name))
}

function attributeSort(a: Attr, b: Attr) {
    return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));
}

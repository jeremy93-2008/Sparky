import { setEvents } from "./sparky.event";
import { SparkyFunction } from "./sparky.function";
import { renderReturn } from "./sparky";

export function generateDOM(currentDom: HTMLElement, render: renderReturn, self: SparkyFunction) {
    if(!currentDom) {
        render.dom = setEvents(render, self);
        return render.dom;
    } 

    const currentNodesStack = [{node: currentDom, parent: null}];
    const nextDomStack = [{node: render.dom, parent: null}];

    while(currentNodesStack.length > 0 || nextDomStack.length > 0) {
        let currentStack = currentNodesStack.pop();
        let nextStack = nextDomStack.pop();

        let node = currentStack.node;
        let nextNode = nextStack.node;

        if(node && !nextNode) {
            node = null;
            node.remove();
            return;
        }

        if(nextNode && !node) {
            node = nextNode;
            (currentStack.parent as HTMLElement).appendChild(nextNode);
            return;
        }
        node = diffDOM(node, nextNode, currentNodesStack, nextDomStack);
        node = setEvents({dom: node, func: render.func}, self)
    }
    return currentDom;
}

function diffDOM(node: HTMLElement, nextNode: HTMLElement, currentNodesStack: { node: HTMLElement; parent: any; }[], nextDomStack: { node: HTMLElement; parent: any; }[]) {
    if (node.nodeName != nextNode.nodeName) {
        node = diffName(nextNode, node);
    }
    if (node.nodeName !== "#text") {
        diffAttribute(node, nextNode);
    }
    if (nextNode.children.length == 0 && node.textContent !== nextNode.textContent) {
        node.textContent = nextNode.textContent;
    }
    if (node.children.length > 0) {
        Array.from(node.children).map((child: HTMLElement) => currentNodesStack.push({ node: child, parent: node }));
    }
    if (nextNode.children.length > 0) {
        Array.from(nextNode.children).map((child: HTMLElement) => nextDomStack.push({ node: child, parent: nextNode }));
    }
    return node;
}

function diffName(nextNode: HTMLElement, node: HTMLElement) {
    const newNode = document.createElement(nextNode.nodeName);
    Array.from(node.attributes).map((attr: Attr) => {
        newNode.attributes.setNamedItem(attr.cloneNode(true) as Attr);
    });
    newNode.innerHTML = node.innerHTML;
    node = newNode;
    return node;
}

function diffAttribute(node: HTMLElement, nextNode: HTMLElement) {
    Array.from(node.attributes).forEach((attr: Attr, i: number) => {
        const nextAttr = nextNode.attributes[i];
        if (attr.name != nextAttr.name) {
            node.attributes.removeNamedItem(attr.name);
            node.attributes.setNamedItem(nextAttr.cloneNode(true) as Attr);
        }
        if (attr.value != nextAttr.value) {
            attr.value = nextAttr.value;
        }
    });
}

import { setEvents, setAllEvents } from "./sparky.event";
import { SparkyFunction } from "./sparky.function";
import { IRenderReturn } from "./sparky";

export function generateDOM(currentDom: HTMLElement, render: IRenderReturn, self: SparkyFunction) {
    if(!currentDom) {
        render.dom = setAllEvents(render, self);
        return render.dom;
    } 

    const currentNodesStack = [{node: currentDom, parent: null}];
    const nextNodeStack = [{node: render.dom, parent: null}];

    let lastParentCurrentNode = null;

    while(currentNodesStack.length > 0 || nextNodeStack.length > 0) {
        let currentStack = currentNodesStack.pop();
        let nextStack = nextNodeStack.pop();
        
        let node = currentStack ? currentStack.node : null;
        let nextNode = nextStack ? nextStack.node : null;

        if(currentStack) lastParentCurrentNode = currentStack.parent;

        if(node && !nextNode) {
            node = null;
            node.remove();
            break;
        }

        if(nextNode && !node) {
            node = nextNode;
            (lastParentCurrentNode as HTMLElement).innerHTML = nextStack.parent.innerHTML;
            setAllEvents({dom: lastParentCurrentNode, func: render.func}, self)
            break;
        }
        diffDOM(node, nextNode, currentNodesStack, nextNodeStack);
        setEvents({dom: node, func: render.func}, self)
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
        if(node.children.length == 0)
            currentNodesStack.push({node: null, parent: node});
    }
}

function diffName(nextNode: HTMLElement, node: HTMLElement) {
    const newNode = document.createElement(nextNode.nodeName);
    Array.from(node.attributes).map((attr: Attr) => {
        newNode.attributes.setNamedItem(attr.cloneNode(true) as Attr);
    });
    newNode.innerHTML = node.innerHTML;
    node.parentElement.replaceChild(newNode, node)
    node = newNode;
    return node;
}

function diffAttribute(node: HTMLElement, nextNode: HTMLElement) {
    Array.from(node.attributes).forEach((attr: Attr, i: number) => {
        if(!nextNode.attributes[i]) return;
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

export function populateDOMwithDiff(currentDom: HTMLElement, dom: HTMLElement) {
    if(!currentDom) return dom;

    const currentNodesStack = [{node: currentDom, parent: null}];
    const nextDomStack = [{node: dom, parent: null}];

    while(currentNodesStack.length > 0 || nextDomStack.length > 0) {
        let currentStack = currentNodesStack.pop();
        let nextStack = nextDomStack.pop();

        let node = currentStack.node;
        let nextNode = nextStack.node;

        if(node && !nextNode) {
            node.remove();
            return;
        }

        if(nextNode && !node) {
            (currentStack.parent as HTMLElement).appendChild(nextNode);
            return;
        }

        if(node.nodeName != nextNode.nodeName) {
            node = diffName(nextNode, node);
        }

        if(node.nodeName !== "#text") {
            diffAttribute(node, nextNode);            
        }

        if(node.children.length > 0) {
            Array.from(node.children).map((child: HTMLElement) => currentNodesStack.push({node: child, parent: node}))
        }

        if(nextNode.children.length > 0) {
            Array.from(nextNode.children).map((child: HTMLElement) => nextDomStack.push({node: child, parent: nextNode}))
        }
    }
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

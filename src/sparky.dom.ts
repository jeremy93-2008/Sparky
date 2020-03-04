export function reconciliate(currentDom: HTMLElement, newDom: HTMLElement) {
    if (!currentDom && !newDom) return null;
    if (currentDom && !newDom) return null;
    if (!currentDom && newDom) return newDom;

    const currentDomStack = [currentDom];
    let newDomStack = [newDom];

    let currentDomToAttach = currentDom;

    while (currentDomStack.length > 0 || newDomStack.length > 0) {
        let dom = currentDomStack.shift();
        let nextDom = newDomStack.shift();

        if (dom && !nextDom) {
            dom.parentElement.removeChild(dom);
            continue;
        }

        if (!dom && nextDom) {
            currentDomToAttach.appendChild(nextDom);
            continue;
        }

        if(dom.isEqualNode(nextDom)) continue;

        if (dom.nodeName !== nextDom.nodeName) {
            dom.parentElement.replaceChild(nextDom, dom);
        }

        if(dom.nodeName == "#text" && nextDom.nodeName != "#text") {
            currentDomToAttach.removeChild(dom);
            currentDomToAttach.appendChild(nextDom);
            continue;
        }

        if ((dom.nodeName == "#text" && nextDom.nodeName == "#text") 
        || (nextDom.childNodes.length == 1 && nextDom.childNodes[0].nodeName == "#text")) {
            if (dom.textContent !== nextDom.textContent)
                dom.textContent = nextDom.textContent
        }   

        setAttributes(dom, nextDom);

        currentDomToAttach = pushChildNodes(dom, currentDomToAttach, currentDomStack, nextDom, newDomStack);
    }

    return currentDom;
}

function pushChildNodes(dom: HTMLElement, currentDomToAttach: HTMLElement, currentDomStack: HTMLElement[], nextDom: HTMLElement, newDomStack: HTMLElement[]) {
    if (dom.childNodes.length > 0) {
        currentDomToAttach = populateChildren(dom, currentDomToAttach, dom, currentDomStack);
    }
    if (nextDom.childNodes.length > 0) {
        currentDomToAttach = populateChildren(dom, currentDomToAttach, nextDom, newDomStack);
    }
    return currentDomToAttach;
}

function populateChildren(connectedDom: HTMLElement, currentDomToAttach: HTMLElement, 
    walkDom: HTMLElement, domStack: HTMLElement[]) {
    if (connectedDom)
        currentDomToAttach = connectedDom;
    Array.from(walkDom.childNodes).forEach((child: HTMLElement) => {
        if (connectedDom.childNodes.length == 1 && connectedDom.childNodes[0].nodeName == "#text")
            return;
        domStack.push(child);
    });
    return currentDomToAttach;
}

function setAttributes(currentDom: HTMLElement, nextDom: HTMLElement) {
    const currentAttributesList = currentDom && currentDom.attributes
        ? transformAttributesToSortedArray(currentDom.attributes) : [];

    const nextAttributesList = nextDom && nextDom.attributes
        ? transformAttributesToSortedArray(nextDom.attributes) : [];

    while(nextAttributesList.length > 0) {
        const currentAttr = currentAttributesList.shift();
        const nextAttr = nextAttributesList.shift();

        reconciliateAttributes(currentAttr, nextAttr, currentDom);

        if(!currentDom || !nextAttr) continue;

        editAttributes(currentAttr, nextAttr, currentDom);
    }
    
    if(currentAttributesList.length > 0) {
        removeUnusedAttribute(currentAttributesList, currentDom);
    }
}

function editAttributes(currentAttr: Attr, nextAttr: Attr, currentDom: HTMLElement) {
    if (currentAttr.name != nextAttr.name) {
        currentDom.removeAttribute(currentAttr.name);
        currentDom.setAttribute(nextAttr.name, nextAttr.value);
    }
    if (currentAttr.value != nextAttr.value) {
        currentDom.getAttributeNode(nextAttr.name).value = nextAttr.value;
    }
}

function reconciliateAttributes(currentAttr: Attr, nextAttr: Attr, currentDom: HTMLElement) {
    if (currentAttr && !nextAttr) {
        currentDom.removeAttribute(currentAttr.name);
    }
    if (!currentAttr && nextAttr) {
        currentDom.setAttribute(nextAttr.name, nextAttr.value);
    }
}

function removeUnusedAttribute(currentAttributesList: Attr[], currentDom: HTMLElement) {
    currentAttributesList.forEach(attr => currentDom.attributes.removeNamedItem(attr.name));
}

function transformAttributesToSortedArray(arrayLike: ArrayLike<Attr>) {
    return Array.from(arrayLike).sort((a: Attr, b: Attr) => {
        return a.name.localeCompare(b.name);
    })
}
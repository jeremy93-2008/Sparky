export function reconciliate(currentDom: HTMLElement, newDom: HTMLElement) {
    if (!currentDom && !newDom) return null;
    if (currentDom && !newDom) return null;
    if (!currentDom && newDom) return newDom;

    const currentDomQueue = [currentDom];
    let newDomQueue = [newDom];

    let currentDomToAttach = currentDom;

    while (currentDomQueue.length > 0 || newDomQueue.length > 0) {
        let dom = currentDomQueue.shift();
        let nextDom = newDomQueue.shift();

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

        currentDomToAttach = pushChildNodes(dom, currentDomToAttach, currentDomQueue, nextDom, newDomQueue);
    }

    return currentDom;
}

function pushChildNodes(dom: HTMLElement, domAttached: HTMLElement, 
    domStack: HTMLElement[], nextDom: HTMLElement, newDomStack: HTMLElement[]) {

    if (dom.childNodes.length > 0) {
        domAttached = populateChildren(dom, domAttached, dom, domStack);
    }
    if (nextDom.childNodes.length > 0) {
        domAttached = populateChildren(dom, domAttached, nextDom, newDomStack);
    }
    return domAttached;
}

function populateChildren(connectDom: HTMLElement, domAttached: HTMLElement, walkDom: HTMLElement, domStack: HTMLElement[]) {
    if (connectDom)
        domAttached = connectDom;
    Array.from(walkDom.childNodes).forEach((child: HTMLElement) => {
        if (connectDom.childNodes.length == 1 && connectDom.childNodes[0].nodeName == "#text")
            return;
        domStack.push(child);
    });
    return domAttached;
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
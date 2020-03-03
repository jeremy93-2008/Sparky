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

        if(dom.nodeName == "#text" && nextDom.nodeName != "#text") {
            currentDomToAttach.removeChild(dom);
            currentDomToAttach.appendChild(nextDom);
            continue;
        }
        
        setAttributes(dom, nextDom);

        if (dom.nodeName !== nextDom.nodeName) {
            dom.parentElement.replaceChild(nextDom, dom);
        }

        if ((dom.nodeName == "#text" && nextDom.nodeName == "#text") 
        || (nextDom.childNodes.length == 1 && nextDom.childNodes[0].nodeName == "#text")) {
            if (dom.textContent !== nextDom.textContent)
                dom.textContent = nextDom.textContent
        }

        if (dom.childNodes.length > 0) {
            currentDomToAttach = dom;
            Array.from(dom.childNodes).forEach((child: HTMLElement) => {
                if(dom.childNodes.length == 1 && dom.childNodes[0].nodeName == "#text") return;
                currentDomStack.push(child)
            })
        }

        if (nextDom.childNodes.length > 0) {
            if (dom)
                currentDomToAttach = dom;
            Array.from(nextDom.childNodes).forEach((child: HTMLElement) => {
                if(dom.childNodes.length == 1 && dom.childNodes[0].nodeName == "#text") return;
                newDomStack.push(child)
            })
        }
    }

    return currentDom;
}

function setAttributes(currentDom: HTMLElement, nextDom: HTMLElement) {
    const currentAttributesList = currentDom && currentDom.attributes
        ? transformAttributesToSortedArray(currentDom.attributes) : [];

    const nextAttributesList = nextDom && nextDom.attributes
        ? transformAttributesToSortedArray(nextDom.attributes) : [];

    while(nextAttributesList.length > 0) {
        const currentAttr = currentAttributesList.shift();
        const nextAttr = nextAttributesList.shift();

        if(currentAttr && !nextAttr) {
            currentDom.removeAttribute(currentAttr.name);
            continue;
        }

        if(!currentAttr && nextAttr) {
            currentDom.setAttribute(nextAttr.name, nextAttr.value);
            continue;
        }

        if(currentAttr.name != nextAttr.name) {
            currentDom.removeAttribute(currentAttr.name);
            currentDom.setAttribute(nextAttr.name, nextAttr.value);
            continue;
        }

        if(currentAttr.value != nextAttr.value) {
            currentDom.getAttributeNode(nextAttr.name).value = nextAttr.value;
        }
    }
    
    if(currentAttributesList.length > 0) {
        currentAttributesList.forEach(attr => currentDom.attributes.removeNamedItem(attr.name))
    }
}

function transformAttributesToSortedArray(arrayLike: ArrayLike<Attr>) {
    return Array.from(arrayLike).sort((a: Attr, b: Attr) => {
        return a.name.localeCompare(b.name);
    })
}
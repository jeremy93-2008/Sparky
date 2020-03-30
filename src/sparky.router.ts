import { IStateRoute, Sparky } from "./sparky"
import { HTMLElementSparkyEnhanced, ISparkyRoot } from "./sparky.component";

declare var thisTest;
export type IRoutingTypes = "browser" | "hash" | "abstract";

export interface documentSparkyEnhanced extends Document {
    __sparkyRoutingId: string;
}

export function listeningHashChange(stateRoute: IStateRoute[], callbackFn: Function, dom: HTMLElementSparkyEnhanced) {
    window.requestIdleCallback(() => {
        window.addEventListener("hashchange", (evt) => {
            changeStateByEvent(evt, stateRoute, callbackFn, dom)
        })
    })
    if(typeof thisTest != "undefined" && thisTest.testing) {
        const evt = new Event("hashchange") as HashChangeEvent;
        Object.defineProperty(evt, 'oldUrl', {writable: false, value: ""});
        Object.defineProperty(evt, 'newURL', {writable: true, value: "#"});
        changeStateByEvent(evt, stateRoute, callbackFn, dom);
        dom.__sparkyRoot.stateChanging = true;
        dom.__sparkyRoot.forceURLUpdate = true;
        changeStateByEvent(evt, stateRoute, callbackFn, dom)
    }
}

function changeStateByEvent(evt: HashChangeEvent, stateRoute: IStateRoute[], callbackFn: Function, dom: HTMLElementSparkyEnhanced) {
    const documentSparky = document as documentSparkyEnhanced;

    if(dom.__sparkyRoot.forceURLUpdate) 
        documentSparky.__sparkyRoutingId = dom.__sparkyRoot.id;

    if(documentSparky.__sparkyRoutingId 
        && documentSparky.__sparkyRoutingId != dom.__sparkyRoot.id) {
            console.warn("Only one route object can have the control of URL")
            return;
        }
    if(evt.oldURL == evt.newURL || dom.__sparkyRoot.stateChanging) {
        dom.__sparkyRoot.stateChanging = false;
        return;
    };
    const newState = getStateByHash(stateRoute, location.hash);
    newState.hash = location.hash;
    pushToAbstractHistory(dom.__sparkyRoot, newState);
    if(newState) {
        callbackFn(newState.component);
    }
    documentSparky.__sparkyRoutingId = dom.__sparkyRoot.id;
}

export function getStateByHash(stateRoute: IStateRoute[], newPath: string) {
    return stateRoute.find((state, i) => {
        if (state.path instanceof RegExp) {
            return newPath.search(state.path) != -1;
        }
        else if (typeof state.path == "string") {
            return newPath.includes(state.path);
        }
        else {
            return false;
        }
    }) || stateRoute[0];
}


export function pushToAbstractHistory(sparkyRoot: ISparkyRoot, stateRoute: IStateRoute) {
    if(sparkyRoot.historyIndex < (history.length - 1)) {
        sparkyRoot.history = sparkyRoot.history.slice(0, sparkyRoot.historyIndex + 1)
    }
    sparkyRoot.history.push(stateRoute);
    sparkyRoot.historyIndex = sparkyRoot.history.length - 1;
}

export function Sparky_cleanHistory(this: HTMLElementSparkyEnhanced) {
    this.__sparkyRoot.history = [];
    this.__sparkyRoot.historyIndex = 0;
    this.__sparkyRoot.stateChanging = true;
    location.hash = "";
} 

export function Sparky__goToState(this: HTMLElementSparkyEnhanced, newPath: string) {
    let { routing, type } = this.__sparkyRoot;
    const routeState = getStateByHash(routing, newPath);
    routeState.hash = newPath;
    this.__sparkyRoot.stateChanging = true;
    let normalizePath = newPath;
    switch(type) {
        case "hash": location.hash = "/#/" + normalizePath; break;
        case "browser": location.hash = normalizePath; break;
    }
    pushToAbstractHistory(this.__sparkyRoot, routeState);
    Sparky.mount(routeState.component, this);
}

export function Sparky__back(this: HTMLElementSparkyEnhanced) {
    let { history, type } = this.__sparkyRoot;
    if (this.__sparkyRoot.historyIndex - 1 < 0) return;
    const state = history[--this.__sparkyRoot.historyIndex];
    this.__sparkyRoot.stateChanging = true;
    let normalizePath = state.hash;
    switch(type) {
        case "hash": location.hash = "/#/" + normalizePath; break;
        case "browser": location.hash = normalizePath; break;
    }
    Sparky.mount(state.component, this);
}

export function Sparky__forward(this: HTMLElementSparkyEnhanced) {
    let { history, type } = this.__sparkyRoot;
    if (this.__sparkyRoot.historyIndex + 1 > history.length - 1) return; 
    const state = history[++this.__sparkyRoot.historyIndex];
    this.__sparkyRoot.stateChanging = true;
    let normalizePath = state.hash;
    switch(type) {
        case "hash": location.hash = "/#/" + normalizePath; break;
        case "browser": location.hash = normalizePath; break;
    }
    Sparky.mount(state.component, this)
}
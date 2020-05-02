import { IStateRoute, Sparky } from "./sparky"
import { HTMLElementSparkyEnhanced, ISparkyRoot, IParams } from "./sparky.component";
/**
 * @internal
 */
declare var thisTest;
export type IRoutingTypes = "browser" | "hash" | "abstract";
/**
 * @internal
 */
export interface documentSparkyEnhanced extends Document {
    __sparkyRoutingId: string;
}

/**
 * @internal
 */
export function listeningHashChange(stateRoute: IStateRoute[], callbackFn: Function, dom: HTMLElementSparkyEnhanced) {
    if(!dom.__sparkyRoot.isRoutingEnabled)
        throw TypeError("To use route() function, you need to pass a Sparky.router object on the mount function");
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
        dom.__sparkyRoot.basename = dom.__sparkyRoot.basename ? dom.__sparkyRoot.basename : ""; 
        dom.__sparkyRoot.forceURLUpdate = true;
        changeStateByEvent(evt, stateRoute, callbackFn, dom)
    }
}

/**
 * @internal
 */
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
    dom.__sparkyRoot.params = getParamsByPath(newState.path, location.hash);
    pushToAbstractHistory(dom.__sparkyRoot, newState);
    if(newState) {
        callbackFn(newState.component);
    }
    documentSparky.__sparkyRoutingId = dom.__sparkyRoot.id;
}

/**
 * @internal
 */
export function getStateByHash(stateRoute: IStateRoute[], newPath: string) {
    return stateRoute.find((state, i) => {
        if (typeof state.path == "string") {
            state.exact = true;
            return matchUrl(state.path, newPath);
        }
        return false;
    }) || {...stateRoute[0], exact: false};
}

/**
 * @internal
 */
export function pushToAbstractHistory(sparkyRoot: ISparkyRoot, stateRoute: IStateRoute) {
    if(sparkyRoot.historyIndex < (history.length - 1)) {
        sparkyRoot.history = sparkyRoot.history.slice(0, sparkyRoot.historyIndex + 1)
    }
    sparkyRoot.history.push(stateRoute);
    sparkyRoot.historyIndex = sparkyRoot.history.length - 1;
}

/**
 * @internal
 */
export function Sparky_cleanHistory(this: HTMLElementSparkyEnhanced) {
    this.__sparkyRoot.history = [];
    this.__sparkyRoot.historyIndex = 0;
    this.__sparkyRoot.stateChanging = true;
    location.hash = "";
} 

/**
 * @internal
 */
export function Sparky__goToState(this: HTMLElementSparkyEnhanced, newPath: string) {
    let { routing, type, basename } = this.__sparkyRoot;
    const routeState = getStateByHash(routing, newPath);
    routeState.hash = newPath;
    if(routeState.exact)
        this.__sparkyRoot.params = getParamsByPath(routeState.path, newPath);
    this.__sparkyRoot.stateChanging = true;
    let normalizePath = newPath;
    switch(type) {
        case "hash": location.hash = "/" + normalizePath; break;
        case "browser": location.pathname = basename + "/" + normalizePath; break;
    }
    pushToAbstractHistory(this.__sparkyRoot, routeState);
    Sparky.mount(routeState.component, this);
}

/**
 * @internal
 */
export function Sparky__back(this: HTMLElementSparkyEnhanced) {
    let { history, type, basename } = this.__sparkyRoot;
    if (this.__sparkyRoot.historyIndex - 1 < 0) return;
    const state = history[--this.__sparkyRoot.historyIndex];
    if(state.exact)
        this.__sparkyRoot.params = getParamsByPath(state.path, state.hash);
    this.__sparkyRoot.stateChanging = true;
    let normalizePath = state.hash;
    switch(type) {
        case "hash": location.hash = "/" + normalizePath; break;
        case "browser": location.pathname = basename + "/" + normalizePath; break;
    }
    Sparky.mount(state.component, this);
}

/**
 * @internal
 */
export function Sparky__forward(this: HTMLElementSparkyEnhanced) {
    let { history, type, basename } = this.__sparkyRoot;
    if (this.__sparkyRoot.historyIndex + 1 > history.length - 1) return; 
    const state = history[++this.__sparkyRoot.historyIndex];
    if(state.exact)
        this.__sparkyRoot.params = getParamsByPath(state.path, state.hash);
    this.__sparkyRoot.stateChanging = true;
    let normalizePath = state.hash;
    switch(type) {
        case "hash": location.hash = "/" + normalizePath; break;
        case "browser": location.pathname = basename + "/" + normalizePath; break;
    }
    Sparky.mount(state.component, this)
}

/**
 * @internal
 */
export function Sparky__params(this: HTMLElementSparkyEnhanced) {
    const { params } = this.__sparkyRoot;
    return params;
}

/**
 * @internal
 */
export function Sparky__currentState(this: HTMLElementSparkyEnhanced) {
    const { history, historyIndex } = this.__sparkyRoot;
    return history[historyIndex];
}

/**
 * @internal
 */
export function getParamsByPath(path:string, url: string): IParams[] {
    if(path.includes("*")) {  
        const pathArray = path.split("*");  
        if(pathArray[1].includes("/")) 
            throw TypeError("The wildcard can only be the last element to be identified on the url");        
    }
    const urlParts = url.split("/");
    const params = [];
    path.split("/").reduce((params, pathPart, i) =>  {
        if(pathPart.startsWith(":")) {
            const obj = {};
            obj[pathPart.slice(1, pathPart.length)] = urlParts[i];
            params.push(obj as IParams);
        } else if(pathPart.startsWith("*")) {
            const obj = {};
            obj[pathPart.slice(1, pathPart.length)] = urlParts.slice(i, urlParts.length).join("");
            params.push(obj as IParams)
        }
        return params;
    }, params);

    return params;
}

/**
 * @internal
 */
export function matchUrl(path:string, url: string) {
    if(path.includes("*")) {
        const pathArray = path.split("*");
        if(pathArray[1].includes("/")) 
            throw TypeError("The wildcard can only be the last element to be identified on the url");        
    }
    const pathPart = path.split("/").filter((part) => {
        return !part.startsWith(":") && !part.startsWith("*")
    })

    return url.includes(pathPart.join("/"))
}
import { IStateRoute, Sparky } from "./sparky"
import { HTMLElementSparkyEnhanced } from "./sparky.component";

export function listeningHashChange(stateRoute: IStateRoute[], callbackFn: Function, dom: HTMLElementSparkyEnhanced) {
    window.requestIdleCallback(() => {
        window.addEventListener("hashchange", (evt) => {
            const { history, historyIndex } = dom.__sparkyRoot;
            if(evt.oldURL == evt.newURL) {
                //stateChange
                return;
            };
            const newState = getStateByHash(stateRoute, location.hash);
            newState.hash = location.hash;
            pushToAbstractHistory(history, historyIndex, newState);
            if(newState) {
                callbackFn(newState.component);
            }
        })
    })
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


export function pushToAbstractHistory(history: IStateRoute[], historyIndex: number, stateRoute: IStateRoute) {
    if(historyIndex < (history.length - 1)) {
        history = history.slice(0, historyIndex + 1)
    }
    history.push(stateRoute);
    historyIndex = history.length - 1;
}

export function Sparky_cleanHistory(this: HTMLElementSparkyEnhanced) {
    this.__sparkyRoot.history = [];
    this.__sparkyRoot.historyIndex = 0;
    //StateChange
    location.hash = "";
} 

export function Sparky__goToState(this: HTMLElementSparkyEnhanced, newPath: string) {
    let { routing, history, historyIndex } = this.__sparkyRoot;
    const routeState = getStateByHash(routing, newPath);
    routeState.hash = newPath;
    //stateChanging = true;
    location.hash = newPath;
    pushToAbstractHistory(history, historyIndex, routeState);
    Sparky.mount(routeState.component, this);
}

export function Sparky__back(this: HTMLElementSparkyEnhanced) {
    let { history, historyIndex } = this.__sparkyRoot;
    if(historyIndex - 1 < 0) return;
    const state = history[--historyIndex];
    location.hash = state.hash;
    Sparky.mount(state.component, this);
}

export function Sparky__forward(this: HTMLElementSparkyEnhanced) {
    let { history, historyIndex } = this.__sparkyRoot;
    if(historyIndex + 1 > history.length - 1) return; 
    const state = history[++historyIndex];
    // stateChanging = true;
    location.hash = state.hash;
    Sparky.mount(state.component, this)
}
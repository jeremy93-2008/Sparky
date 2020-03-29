import { IStateRoute, Sparky } from "./sparky"

let currentIndex = 0;
let stateChanging = false;
let statesRouter = [];
let abstractHistory: IStateRoute[] = [];

export function listeningHashChange(stateRoute: IStateRoute[], callbackFn: Function) {
    window.requestIdleCallback(() => {
        window.addEventListener("hashchange", (evt) => {
            if(evt.oldURL == evt.newURL || stateChanging) {
                stateChanging = false;
                return
            };
            const newState = getStateByHash(stateRoute, location.hash);
            newState.hash = location.hash;
            pushToAbstractHistory(newState);
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


export function pushToAbstractHistory(stateRoute: IStateRoute) {
    if(currentIndex < (abstractHistory.length - 1)) {
        abstractHistory = abstractHistory.slice(0, currentIndex + 1)
    }
    abstractHistory.push(stateRoute);
    currentIndex = abstractHistory.length - 1;
}

export function Sparky_cleanHistory() {
    abstractHistory = [];
    stateChanging = true;
    location.hash = "";
} 

export function Sparky__goToState(newPath: string) {
    const routeState = getStateByHash(statesRouter, newPath);
    routeState.hash = newPath;
    stateChanging = true;
    location.hash = newPath;
    pushToAbstractHistory(routeState);
    Sparky.mount(routeState.component);
}

export function Sparky__back() {
    if(currentIndex - 1 < 0) return;
    const state = abstractHistory[--currentIndex];
    stateChanging = true;
    location.hash = state.hash;
    Sparky.mount(state.component);
}

export function Sparky__forward() {
    if(currentIndex + 1 > abstractHistory.length - 1) return; 
    const state = abstractHistory[++currentIndex];
    stateChanging = true;
    location.hash = state.hash;
    Sparky.mount(state.component)
}

export function setStateRoute(stateRoute: IStateRoute[]) {
    statesRouter = stateRoute;
}

export function getStateRoute() {
    return statesRouter;
}
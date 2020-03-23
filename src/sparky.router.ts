import { IStateRoute } from "./sparky"

export function listeningHashChange(stateRoute: IStateRoute[], callbackFn: Function) {
    window.requestIdleCallback(() => {
        window.addEventListener("hashchange", (evt) => {
            if(evt.oldURL == evt.newURL) return;
            const newState = getStateByHash(stateRoute);
            if(newState) {
                callbackFn(newState.component);
            }
        })
    })
}

export function getStateByHash(stateRoute: IStateRoute[]) {
    return stateRoute.find((state) => {
        if (state.path instanceof RegExp) {
            return location.hash.search(state.path);
        }
        else if (typeof state.path == "string") {
            return location.hash.includes(state.path);
        }
        else {
            return false;
        }
    }) || stateRoute[0];
}

import { Sparky } from "./sparky";
import 'requestidlecallback-polyfill';
import { callCachedFn } from "./sparky.function.helper";
import { SparkyContext } from "./sparky.context";

export type ArgumentsList = any[];
type UpdateCallback = () => void;

export interface IFnCached {
    fn: Function;
    dependencies: string[];
    result: any;
}

export type ISetState<S> = (newState: S) => ISetState<S>;

/**
 * Execute after the render/update of the DOM tree.
 * @param callback - The function that you want to execute
 * @param dependenciesChanged - An array of keys to know when the onUpdate need to be executed
 */
export const onUpdate = (callback: UpdateCallback, dependenciesChanged?: ArgumentsList) => {
    const currentContext = getContext();
    window.requestIdleCallback(() => {
        callCachedFn(currentContext, "update", currentContext.cachedUpdate, callback, dependenciesChanged)
    }, { timeout: 250 });
}

/**
* Get State object value of this context
* @param props - the specific key of the value that you want to retrieve
*/
const getState = <S>(props: string): S => {
    const currentContext = getContext();
    if (props) return currentContext.state[props];
    return currentContext.state as S;
}

/**
 * Add/Set a new value into the State object of the context
 * @param newState - new Value
 */
const setCurrentState = <S>(newState: S): ISetState<S> => {
    const currentContext = getContext();
    currentContext.cachedState[currentContext.indexes.state] = newState;
    (currentContext.__root) ? Sparky.mount({...currentContext.__root, context: currentContext}) :
        Sparky.mount({ type: "SparkyComponent", context: currentContext, renderFn: currentContext.renderFunc });
    return setCurrentState;
}

export const state = <S>(newState: S): [S, ISetState<S>] => {
    const currentContext = getContext();
    const currentState = currentContext.cachedState[currentContext.indexes.state];
    if(currentState) {
        currentContext.indexes.state++;
        const setState = setCurrentState;
        return [currentState as S, setState];
    }

    const setState = setCurrentState(newState);
    return [currentState as S, setState];
}

/**
 * Call the function callback only when dependencies has changed
 * @param callbackFn - Callback to be called when needed
 * @param argumentsChanged - list of value that are used to know if the callback needed to be recalled
 */
export const memoize = (callbackFn: Function, argumentsChanged?: ArgumentsList) => {
    const currentContext = getContext();
    callCachedFn(currentContext, "memoize", currentContext.cachedMemo, callbackFn, argumentsChanged)
}

function getContext() {
    const currentContext = SparkyContext.getCurrentContext();
    if (!currentContext)
        throw new ReferenceError("Sparky Function only can be used in the lifecycle of a Sparky application");
    return currentContext;
}

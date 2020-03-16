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

const getContext = () => {
    const currentContext = SparkyContext.getCurrentContext();
    if (!currentContext)
        throw new ReferenceError("Sparky Function only can be used in the lifecycle of a Sparky application");
    return currentContext;
}

const setCurrentState = <S>(newState: S): ISetState<S> => {
    const currentContext = getContext();
    currentContext.cachedState[currentContext.indexes.state] = newState;
    currentContext.indexes.state++;
    if (currentContext.__root) {
        SparkyContext.setCurrentContext(Sparky.mount({ 
            ...currentContext.__root, currentContext }));
    } else {
        SparkyContext.setCurrentContext(
            Sparky.mount({ type: "SparkyComponent", 
            context: currentContext, currentContext, renderFn: currentContext.renderFunc }));
    }
    return setCurrentState;
}

const setInitialState = <S>(newState: S): ISetState<S> => {
    const currentContext = getContext();
    currentContext.cachedState[currentContext.indexes.state] = newState;
    return setCurrentState;
}

/**
 * Function will be run after the render is commited to the screen.
 * @param callbackFn - The function to run
 * @param dependenciesChanged - Array of values that the function depends on
 */
export const update = (callbackFn: UpdateCallback, dependenciesChanged?: ArgumentsList) => {
    const currentContext = getContext();
    window.requestIdleCallback(() => {
        callCachedFn(currentContext, "update", currentContext.cachedUpdate, callbackFn, dependenciesChanged)
    }, { timeout: 250 });
}

/**
 * Returns a stateful value, and a function to update it.
 * @param initialState The value during the first render
 */
export const state = <S>(initialState: S): [S, ISetState<S>] => {
    const currentContext = getContext();
    const currentState = currentContext.cachedState[currentContext.indexes.state];
    if(currentState) {
        currentContext.indexes.state++;
        const setState = setCurrentState;
        return [currentState as S, setState];
    }
    const setState = setInitialState(initialState);
    currentContext.indexes.state++;
    const lastIndex = currentContext.indexes.state - 1;
    return [currentContext.cachedState[lastIndex] as S, setState];
}

/**
 * Run and returns a memoized value
 * @param callbackFn - Function will be run on rendering phase
 * @param argumentsChanged - Array of values that the function depends on
 */
export const memoize = (callbackFn: Function, argumentsChanged?: ArgumentsList) => {
    const currentContext = getContext();
    callCachedFn(currentContext, "memoize", currentContext.cachedMemo, callbackFn, argumentsChanged)
}
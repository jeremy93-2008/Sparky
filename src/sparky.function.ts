import { Sparky } from "./sparky";
import 'requestidlecallback-polyfill';
import { callCachedFn } from "./sparky.function.helper";
import { SparkyContext, ISparkySelf } from "./sparky.context";
import { Sparky__goToState, Sparky__back, Sparky__forward, Sparky_cleanHistory } from "./sparky.router";

export type ArgumentsList = any[];
type UpdateCallback = () => void;
type IBoundSetCurrentState = {
    context: ISparkySelf;
    state: number;
    rootElement: HTMLElement;
};

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

const setContext = (newContext: ISparkySelf) => {
    SparkyContext.setCurrentContext(newContext);
    SparkyContext.resetIndexes();
}

const setCurrentState = function <S>(this: IBoundSetCurrentState, newState: S): ISetState<S> {
    setContext(this.context);
    const currentContext = getContext();
    currentContext.indexes.state = this.state;
    currentContext.cachedState[currentContext.indexes.state] = newState;
    currentContext.indexes.state++;
    if (currentContext.__root) {
        SparkyContext.setCurrentContext(Sparky.mount({ 
            ...currentContext.__root, currentContext }, currentContext.__rootElement));
    } else {
        SparkyContext.setCurrentContext(
            Sparky.mount({ type: "SparkyComponent", 
            context: currentContext, currentContext, renderFn: currentContext.renderFunc }, currentContext.__rootElement));
    }
    return setCurrentState;
}

const setInitialState = <S>(newState: S): ISetState<S> => {
    const currentContext = getContext();
    currentContext.cachedState[currentContext.indexes.state] = newState;
    return setCurrentState;
}

export const Sparky__update = (callbackFn: UpdateCallback, dependenciesChanged?: ArgumentsList) => {
    const currentContext = getContext();
    window.requestIdleCallback(() => {
        callCachedFn(currentContext, "update", currentContext.cachedUpdate, callbackFn, dependenciesChanged)
    }, { timeout: 250 });
}

export const Sparky__state = <S>(initialState: S): [S, ISetState<S>] => {
    const currentContext = getContext();
    const bound = { context: currentContext, state: currentContext.indexes.state }
    const currentState = currentContext.cachedState[currentContext.indexes.state];
    if(currentState) {
        currentContext.indexes.state++;
        const setState = setCurrentState;
        return [currentState as S, setState.bind(bound)];
    }
    const setState = setInitialState(initialState);
    currentContext.indexes.state++;
    const lastIndex = currentContext.indexes.state - 1;
    return [currentContext.cachedState[lastIndex] as S, setState.bind(bound)];
}

export const Sparky__memoize = (callbackFn: Function, argumentsChanged?: ArgumentsList) => {
    const currentContext = getContext();
    callCachedFn(currentContext, "memoize", currentContext.cachedMemo, callbackFn, argumentsChanged)
}

export const Sparky__internal_history = () => {
    const currentContext = getContext();
    const goToState = Sparky__goToState.bind(currentContext.__rootElement);
    const goBack = Sparky__back.bind(currentContext.__rootElement);
    const goAfter = Sparky__forward.bind(currentContext.__rootElement);
    const cleanHistory = Sparky_cleanHistory.bind(currentContext.__rootElement);

    return { goToState, goBack, goAfter, cleanHistory };
}
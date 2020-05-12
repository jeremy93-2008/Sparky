import { Sparky, ISparkyStore } from "./sparky";
import 'requestidlecallback-polyfill';
import { callCachedFn, incrementIndexByType } from "./sparky.function.helper";
import { SparkyContext, ISparkySelf } from "./sparky.context";
import { Sparky__goToState, Sparky__back, Sparky__forward, Sparky_cleanHistory, Sparky__params, Sparky__currentState } from "./sparky.router";
import { IParams } from "./sparky.component";

export type ISetStateOrDispatcher<S> = (newStateOrAction: S | IDispatcherAction | INewStateFunction<S>) => void;
export type IArgumentsList = any[];
export type IDispatcherAction = { [x: string]: string | number | boolean | null | undefined};
type IUpdateCallback = () => void;
type INewStateFunction<S> = (prevState: S) => S;
type IBoundSetCurrentState = {
    context: ISparkySelf;
    state: number;
    rootElement: HTMLElement;
};

export interface IRouterFunctions {
    /**
     * Convenience method for transitioning to a new state.
     * @params newPath to transitioning to that new state
     */
    goToState: (newPath: string) => void, 
    /**
     * Convenience method for transitioning go back on history
     */
    goBack: () => void, 
    /**
     * Convenience method for transitioning go forward on history
     */
    goAfter: () => void, 
    /**
     * Returns an object of key/value pairs of parameters matched on the url
     */
    getParams: () => IParams[], 
    /**
     * Convenience method to clean History stack
     */
    cleanHistory: () => void,
    /**
     * Get current state of the router
     */
    getCurrentState: () => void
}

/**
 * @internal
 */
export interface IFnCached {
    fn: Function;
    dependencies: string[];
    result: any;
}

/**
 * @internal
 */
const getContext = () => {
    const currentContext = SparkyContext.getCurrentContext();
    if (!currentContext)
        throw new ReferenceError("Sparky Function only can be used in the lifecycle of a Sparky application");
    return currentContext;
}

/**
 * @internal
 */
const setContext = (newContext: ISparkySelf) => {
    SparkyContext.setCurrentContext(newContext);
    SparkyContext.resetIndexes();
}

/**
 * @internal
 */
const setCurrentState = function <S>(this: IBoundSetCurrentState, newState: S | ((prevState: S) => S) ) {
    setContext(this.context);
    const currentContext = getContext();
    currentContext.indexes.state = this.state;
    const prevState = currentContext.cachedState[currentContext.indexes.state];
    currentContext.cachedState[currentContext.indexes.state] = 
        typeof(newState) == "function" ? (newState as INewStateFunction<S>)(prevState) : newState;
    currentContext.indexes.state++;
    if (currentContext.__root) {
        SparkyContext.setCurrentContext(Sparky.mount({ 
            ...currentContext.__root, currentContext }, currentContext.__rootElement));
    } else {
        SparkyContext.setCurrentContext(
            Sparky.mount({ type: "SparkyComponent", 
            context: currentContext, currentContext, renderFn: currentContext.renderFunc }, currentContext.__rootElement));
    }
}

/**
 * @internal
 */
const setInitialState = <S>(newState: S): ISetStateOrDispatcher<S> => {
    const currentContext = getContext();
    currentContext.cachedState[currentContext.indexes.state] = newState;
    return setCurrentState;
}

/**
 * @internal
 */
export const Sparky__update = (callbackFn: IUpdateCallback, dependenciesChanged?: IArgumentsList) => {
    const currentContext = getContext();
    const indexes = {...currentContext.indexes};
    incrementIndexByType(currentContext, "update");
    window.requestIdleCallback(() => {
        callCachedFn({...currentContext, indexes}, "update", currentContext.cachedUpdate, callbackFn, dependenciesChanged)
    }, { timeout: 250 });
}

/**
 * @internal
 */
export const Sparky__state = <S>(initialState: S | ISparkyStore<S>): [S, ISetStateOrDispatcher<S>] => {
    if(typeof(initialState) == "object") {
        const initialStore = initialState as ISparkyStore<S>;
        if(initialStore.type && initialStore.type == "SparkyStore") {
            return Sparky__store(initialStore);
        }
    }
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

/**
 * @internal
 */
export const Sparky__memoize = (callbackFn: Function, argumentsChanged?: IArgumentsList) => {
    const currentContext = getContext();
    callCachedFn(currentContext, "memoize", currentContext.cachedMemo, callbackFn, argumentsChanged);
    incrementIndexByType(currentContext, "memoize");
}

/**
 * @internal
 */
export const Sparky__internal_history = () : IRouterFunctions => {
    const currentContext = getContext();
    if(!currentContext.__rootElement.__sparkyRoot.isRoutingEnabled)
        throw TypeError("To use router() function, you need to pass a Sparky.router object on the mount function");
    const goToState = Sparky__goToState.bind(currentContext.__rootElement);
    const goBack = Sparky__back.bind(currentContext.__rootElement);
    const goAfter = Sparky__forward.bind(currentContext.__rootElement);
    const getParams = Sparky__params.bind(currentContext.__rootElement);
    const cleanHistory = Sparky_cleanHistory.bind(currentContext.__rootElement);
    const getCurrentState = Sparky__currentState.bind(currentContext.__rootElement);

    return { goToState, goBack, goAfter, getParams, cleanHistory, getCurrentState };
}

/**
 * @internal
 */
export const Sparky__store = <T>(store: ISparkyStore<T>): [T, (action: IDispatcherAction) => void] => {
    return [store.store, (action: IDispatcherAction) => store.dispatcher(store, action)];
}
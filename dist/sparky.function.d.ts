import { ISparkyStore } from "./sparky";
import 'requestidlecallback-polyfill';
import { IParams } from "./sparky.component";
export declare type ISetStateOrDispatcher<S> = (newStateOrAction: S | IDispatcherAction | INewStateFunction<S>) => void;
export declare type IArgumentsList = any[];
export declare type IDispatcherAction = {
    [x: string]: string | number | boolean | null | undefined;
};
declare type IUpdateCallback = () => void;
declare type INewStateFunction<S> = (prevState: S) => S;
export interface IRouterFunctions {
    /**
     * Convenience method for transitioning to a new state.
     * @params newPath to transitioning to that new state
     */
    goToState: (newPath: string) => void;
    /**
     * Convenience method for transitioning go back on history
     */
    goBack: () => void;
    /**
     * Convenience method for transitioning go forward on history
     */
    goAfter: () => void;
    /**
     * Returns an object of key/value pairs of parameters matched on the url
     */
    getParams: () => IParams[];
    /**
     * Convenience method to clean History stack
     */
    cleanHistory: () => void;
    /**
     * Get current state of the router
     */
    getCurrentState: () => void;
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
export declare const Sparky__update: (callbackFn: IUpdateCallback, dependenciesChanged?: IArgumentsList) => void;
/**
 * @internal
 */
export declare const Sparky__state: <S>(initialState: S | ISparkyStore<S>) => [S, ISetStateOrDispatcher<S>];
/**
 * @internal
 */
export declare const Sparky__memoize: (callbackFn: Function, argumentsChanged?: IArgumentsList) => void;
/**
 * @internal
 */
export declare const Sparky__internal_history: () => IRouterFunctions;
/**
 * @internal
 */
export declare const Sparky__store: <T>(store: ISparkyStore<T>) => [T, (action: IDispatcherAction) => void];
export {};

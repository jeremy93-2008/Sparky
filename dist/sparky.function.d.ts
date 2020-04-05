import 'requestidlecallback-polyfill';
import { IParams } from "./sparky.component";
export declare type ArgumentsList = any[];
declare type UpdateCallback = () => void;
export interface IReturnRouterFunctions {
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
}
export interface IFnCached {
    fn: Function;
    dependencies: string[];
    result: any;
}
export declare type ISetState<S> = (newState: S) => ISetState<S>;
export declare const Sparky__update: (callbackFn: UpdateCallback, dependenciesChanged?: ArgumentsList) => void;
export declare const Sparky__state: <S>(initialState: S) => [S, ISetState<S>];
export declare const Sparky__memoize: (callbackFn: Function, argumentsChanged?: ArgumentsList) => void;
export declare const Sparky__internal_history: () => IReturnRouterFunctions;
export {};

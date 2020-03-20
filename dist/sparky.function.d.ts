import 'requestidlecallback-polyfill';
export declare type ArgumentsList = any[];
declare type UpdateCallback = () => void;
export interface IFnCached {
    fn: Function;
    dependencies: string[];
    result: any;
}
export declare type ISetState<S> = (newState: S) => ISetState<S>;
export declare const Sparky__update: (callbackFn: UpdateCallback, dependenciesChanged?: ArgumentsList) => void;
export declare const Sparky__state: <S>(initialState: S) => [S, ISetState<S>];
export declare const Sparky__memoize: (callbackFn: Function, argumentsChanged?: ArgumentsList) => void;
export {};

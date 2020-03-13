import 'requestidlecallback-polyfill';
export declare type ArgumentsList = any[];
declare type UpdateCallback = () => void;
export interface IFnCached {
    fn: Function;
    dependencies: string[];
    result: any;
}
/**
 * Execute after the render/update of the DOM tree.
 * @param callback - The function that you want to execute
 * @param dependenciesChanged - An array of keys to know when the onUpdate need to be executed
 */
export declare const onUpdate: (callback: UpdateCallback, dependenciesChanged?: ArgumentsList) => void;
/**
* Get State object value of this context
* @param props - the specific key of the value that you want to retrieve
*/
export declare const getState: <S>(props: string) => S;
/**
 * Add/Set a new value into the State object of the context
 * @param newState - new Value
 */
export declare const setState: <S>(newState: S) => void;
/**
 * Call the function callback only when dependencies has changed
 * @param callbackFn - Callback to be called when needed
 * @param argumentsChanged - list of value that are used to know if the callback needed to be recalled
 */
export declare const memoize: (callbackFn: Function, argumentsChanged?: ArgumentsList) => void;
export {};

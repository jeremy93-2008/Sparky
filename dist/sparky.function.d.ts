import { IRenderReturn, ISparkyComponent, ISparkyProps } from "./sparky";
import 'requestidlecallback-polyfill';
declare type UpdateCallback = () => void;
declare type DependenciesList = string[];
declare type ArgumentsList = any[];
export declare class SparkyFunction {
    __root: ISparkyComponent;
    props: ISparkyProps;
    private newProps;
    private cachedMemo;
    private state;
    private renderFunc;
    constructor(renderFunc: (self: SparkyFunction) => IRenderReturn, props: ISparkyProps);
    /**
     * Execute after the render/update of the DOM tree.
     * @param callback - The function that you want to execute
     * @param dependenciesChanged - An array of keys to know when the onUpdate need to be executed
     */
    onUpdate: (callback: UpdateCallback, dependenciesChanged?: DependenciesList) => void;
    /**
    * Get State object value of this context
    * @param props - the specific key of the value that you want to retrieve
    */
    getState: <S>(props: string) => S;
    /**
     * Add/Set a new value into the State object of the context
     * @param newState - new Value
     */
    setState: <S>(newState: S) => void;
    /**
     * Call the function callback only when dependencies has changed
     * @param callbackFn - Callback to be called when needed
     * @param argumentsChanged - list of value that are used to know if the callback needed to be recalled
     */
    memo: (callbackFn: Function, argumentsChanged?: ArgumentsList) => any;
}
export {};

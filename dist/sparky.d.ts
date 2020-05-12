import { HTMLElementSparkyEnhanced, IParams } from "./sparky.component";
import { ISparkySelf } from "./sparky.context";
import { IDispatcherAction } from "./sparky.function";
export interface IRenderReturn {
    type: string;
    html: string;
    func: ISparkyEventFunc[];
    nestedComponents: ISparkyComponent[];
    children: IRenderReturn[];
    renderId: string;
}
export interface IStateRoute {
    hash?: string;
    exact?: boolean;
    path: string;
    component: ISparkyComponent;
}
/**
 * @internal
 */
export interface IReconciliateProps {
    dom: HTMLElement;
    func: ISparkyEventFunc[];
}
export declare type ISparkyFunction = (props?: any) => IRenderReturn;
export interface ISparkyEventFunc {
    renderId: string;
    index: number;
    func: Function;
}
export interface ISparkyComponent {
    type: string;
    context: ISparkySelf;
    currentContext: ISparkySelf;
    renderFn: ISparkyFunction;
}
export interface ISparkyRouterOptions {
    type?: "hash" | "abstract" | "browser";
    basename?: string;
    forceUrlUpdate?: boolean;
}
export interface ISparkyRouter {
    type: string;
    component: ISparkyComponent;
    routing: IStateRoute[];
    history: IStateRoute[];
    params: IParams[];
    options: ISparkyRouterOptions;
}
export declare type ISparkyStore<T> = {
    store: T;
    dispatcher: (store: ISparkyStore<T>, action: IDispatcherAction) => void;
    type: string;
};
export interface ISparkyProps {
    [key: string]: any;
}
export declare type ISparkyState = ISparkyProps;
export declare class Sparky {
    /**
     * Generate a Sparky Component that can be mount.
     * @param renderFunc The function that going to be execute to render html template
     */
    static component(renderFunc: ISparkyFunction, props?: ISparkyProps): ISparkyComponent;
    /**
     * Create a routing component that manage history
     * @param stateRoute
     */
    static router(stateRoute: IStateRoute[], options?: ISparkyRouterOptions): ISparkyRouter;
    /**
     * Mount a Sparky Component in the DOM Tree and keep it updated.
     * @param component Sparky Component
     * @param dom The dom element where you want to mount this component
     */
    static mount(element: ISparkyComponent | ISparkyRouter, dom: HTMLElementSparkyEnhanced): ISparkySelf;
    /**
     * Create a Store to using it on components
     * @param newStore Object that will be Store
     * @param dispatcher Function that will run for changing programatically store object
     */
    static createStore<S>(newStore: S, dispatcher: (state: S, action: IDispatcherAction) => S): ISparkyStore<S>;
    /**
     * Reconciliate the current DOM with the new DOM Node
     * @internal
     * @param oldNode Node that need to be reconcile
     * @param newNode Node that have the new elements
     */
    static reconciliate(oldNode: HTMLElement, newNode: HTMLElement): HTMLElement;
}
/**
 * Function will be run after the render is commited to the screen.
 * @param callbackFn - The function to run
 * @param dependenciesChanged - Array of values that the function depends on
 */
export declare const update: (callbackFn: () => void, dependenciesChanged?: import("./sparky.function").IArgumentsList) => void;
/**
 * Returns a stateful value, and a function to update it.
 * @param initialState The value during the first render
 */
export declare const state: <S>(initialState: S | ISparkyStore<S>) => [S, import("./sparky.function").ISetStateOrDispatcher<S>];
/**
 * Run and returns a memoized value
 * @param callbackFn - Function will be run on rendering phase
 * @param argumentsChanged - Array of values that the function depends on
 */
export declare const memoize: (callbackFn: Function, argumentsChanged?: import("./sparky.function").IArgumentsList) => void;
/**
 * Returns routing functions for current mounted component
 */
export declare const router: () => import("./sparky.function").IRouterFunctions;
/**
 * Render the html string template to HTML elements
 * @param html Array of HTML String
 * @param computedProps Computed Props used to pass Javascript into template
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export declare function html(html: TemplateStringsArray | string, ...computedProps: any[]): IRenderReturn;
/**
 * @internal
 * @param html
 */
export declare function renderToDOMNode(html: string): HTMLElement;

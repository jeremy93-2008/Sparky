import 'mdn-polyfills/Array.from';
import 'mdn-polyfills/Array.prototype.find';
import { ISparkySelf } from "./sparky.context";
export interface IRenderReturn {
    type: string;
    html: string;
    func: ISparkyEventFunc[];
    nestedComponents: ISparkyComponent[];
    children: IRenderReturn[];
    renderId: string;
}
export interface IReconciliateProps {
    dom: HTMLElement;
    func: ISparkyEventFunc[];
}
export declare type ISelfFunction = (props?: any) => IRenderReturn;
export interface ISparkyEventFunc {
    renderId: string;
    index: number;
    func: Function;
}
export interface ISparkyComponent {
    type: string;
    context: ISparkySelf;
    currentContext: ISparkySelf;
    renderFn: ISelfFunction;
}
export interface ISparkyProps {
    [key: string]: any;
}
export declare type ISparkyState = ISparkyProps;
export declare class Sparky {
    static _DEV_: boolean;
    /**
     * Generate a Sparky Component that can be mount.
     * @param renderFunc The function that going to be execute to render html template
     */
    static component(renderFunc: ISelfFunction, props?: ISparkyProps): ISparkyComponent;
    /**
     * Mount a Sparky Component in the DOM Tree and keep it updated.
     * @param component Sparky Component
     * @param dom The dom element where you want to mount this component
     */
    static mount(component: ISparkyComponent, dom?: HTMLElement): ISparkySelf;
    /**
     * Reconciliate the current DOM with the new DOM Node
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
export declare const update: (callbackFn: () => void, dependenciesChanged?: import("./sparky.function").ArgumentsList) => void;
/**
 * Returns a stateful value, and a function to update it.
 * @param initialState The value during the first render
 */
export declare const state: <S>(initialState: S) => [S, import("./sparky.function").ISetState<S>];
/**
 * Run and returns a memoized value
 * @param callbackFn - Function will be run on rendering phase
 * @param argumentsChanged - Array of values that the function depends on
 */
export declare const memoize: (callbackFn: Function, argumentsChanged?: import("./sparky.function").ArgumentsList) => void;
/**
 * Render the html string template to HTML elements
 * @param html Array of HTML String
 * @param computedProps Computed Props used to pass Javascript into template
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export declare function render(html: TemplateStringsArray | string, ...computedProps: any[]): IRenderReturn;
export declare function renderToDOMNode(html: string): HTMLElement;

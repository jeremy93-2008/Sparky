import 'mdn-polyfills/Array.from';
import 'mdn-polyfills/Array.prototype.find';
import { SparkyFunction } from "./sparky.function";
export interface IRenderReturn extends IReconciliateProps {
    type: string;
    nestedComponents: ISparkyComponent[];
    children: IRenderReturn[];
    renderId: string;
}
export interface IReconciliateProps {
    dom: HTMLElement;
    func: ISparkyEventFunc[];
}
export declare type ISelfFunction = (self: SparkyFunction, props?: any) => IRenderReturn;
export interface ISparkyEventFunc {
    renderId: string;
    index: number;
    func: Function;
}
export interface ISparkyComponent {
    type: string;
    self: SparkyFunction;
    selfFn: ISelfFunction;
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
    static mount(component: ISparkyComponent, dom?: HTMLElement): void;
    /**
     * Reconciliate the current DOM with the new DOM Node
     * @param oldNode Node that need to be reconcile
     * @param newNode Node that have the new elements
     */
    static reconciliate(oldNode: HTMLElement, newNode: HTMLElement): HTMLElement;
}
/**
 * Render the html string template to HTML elements
 * @param html Array of HTML String
 * @param computedProps Computed Props used to pass Javascript into template
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export declare function render(html: TemplateStringsArray | string, ...computedProps: any[]): IRenderReturn;

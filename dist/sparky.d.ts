import "core-js/stable";
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
    private static currentDom;
    static _DEV_: boolean;
    static component(renderFunc: ISelfFunction, props?: ISparkyProps): ISparkyComponent;
    static mount(component: ISparkyComponent, dom?: HTMLElement): void;
    static reconciliate(oldNode: HTMLElement, newNode: HTMLElement): HTMLElement;
}
export declare function render(html: TemplateStringsArray | string, ...computedProps: any[]): IRenderReturn;

import { IRenderReturn, ISparkyComponent } from "./sparky";
import { IEventSingle } from "./sparky.eventmanager";
export interface HTMLElementSparkyEnhanced extends HTMLElement {
    __sparkyEvent?: IEventSingle;
}
export declare class SparkyComponent {
    private static cachedComponent;
    static populate(nextDOM: HTMLElement, render: IRenderReturn, rootComponent: ISparkyComponent): HTMLElement;
    private static findComment;
}

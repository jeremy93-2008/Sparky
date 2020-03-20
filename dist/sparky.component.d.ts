import { IRenderReturn, ISparkyComponent } from "./sparky";
export declare class SparkyComponent {
    private static cachedComponent;
    static populate(nextDOM: HTMLElement, render: IRenderReturn, rootComponent: ISparkyComponent): HTMLElement;
    private static findComment;
}

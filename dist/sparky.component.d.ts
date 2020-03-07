import { IRenderReturn, ISparkyComponent } from "./sparky";
export declare class SparkyComponent {
    private static cachedComponent;
    static populate(render: IRenderReturn, rootComponent: ISparkyComponent): HTMLElement;
    private static findComment;
}

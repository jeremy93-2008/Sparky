import { IRenderReturn, ISparkyComponent, IStateRoute } from "./sparky";
import { IEventSingle } from "./sparky.eventmanager";
import { IRoutingTypes } from "./sparky.router";
export interface IParams {
    [x: string]: string;
}
export interface ISparkyRoot {
    id: string;
    isRoutingEnabled: boolean;
    type: IRoutingTypes;
    basename: string;
    forceURLUpdate: boolean;
    historyIndex: number;
    stateChanging: boolean;
    params: IParams[];
    history: IStateRoute[];
    routing: IStateRoute[];
    updateAt: number;
}
export interface HTMLElementSparkyEnhanced extends HTMLElement {
    __sparkyEvent?: IEventSingle;
    __sparkyRoot?: ISparkyRoot;
}
export declare class SparkyComponent {
    private static cachedComponent;
    static populate(nextDOM: HTMLElement, render: IRenderReturn, rootComponent: ISparkyComponent): HTMLElement;
    private static findComment;
}

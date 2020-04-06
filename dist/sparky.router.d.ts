import { IStateRoute } from "./sparky";
import { HTMLElementSparkyEnhanced, ISparkyRoot, IParams } from "./sparky.component";
export declare type IRoutingTypes = "browser" | "hash" | "abstract";
export interface documentSparkyEnhanced extends Document {
    __sparkyRoutingId: string;
}
export declare function listeningHashChange(stateRoute: IStateRoute[], callbackFn: Function, dom: HTMLElementSparkyEnhanced): void;
export declare function getStateByHash(stateRoute: IStateRoute[], newPath: string): IStateRoute;
export declare function pushToAbstractHistory(sparkyRoot: ISparkyRoot, stateRoute: IStateRoute): void;
export declare function Sparky_cleanHistory(this: HTMLElementSparkyEnhanced): void;
export declare function Sparky__goToState(this: HTMLElementSparkyEnhanced, newPath: string): void;
export declare function Sparky__back(this: HTMLElementSparkyEnhanced): void;
export declare function Sparky__forward(this: HTMLElementSparkyEnhanced): void;
export declare function Sparky__params(this: HTMLElementSparkyEnhanced): IParams[];
export declare function Sparky__currentState(this: HTMLElementSparkyEnhanced): IStateRoute;
export declare function getParamsByPath(path: string, url: string): IParams[];
export declare function matchUrl(path: string, url: string): boolean;

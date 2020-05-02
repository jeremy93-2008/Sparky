import { IStateRoute } from "./sparky";
import { HTMLElementSparkyEnhanced, ISparkyRoot, IParams } from "./sparky.component";
export declare type IRoutingTypes = "browser" | "hash" | "abstract";
/**
 * @internal
 */
export interface documentSparkyEnhanced extends Document {
    __sparkyRoutingId: string;
}
/**
 * @internal
 */
export declare function listeningHashChange(stateRoute: IStateRoute[], callbackFn: Function, dom: HTMLElementSparkyEnhanced): void;
/**
 * @internal
 */
export declare function getStateByHash(stateRoute: IStateRoute[], newPath: string): IStateRoute;
/**
 * @internal
 */
export declare function pushToAbstractHistory(sparkyRoot: ISparkyRoot, stateRoute: IStateRoute): void;
/**
 * @internal
 */
export declare function Sparky_cleanHistory(this: HTMLElementSparkyEnhanced): void;
/**
 * @internal
 */
export declare function Sparky__goToState(this: HTMLElementSparkyEnhanced, newPath: string): void;
/**
 * @internal
 */
export declare function Sparky__back(this: HTMLElementSparkyEnhanced): void;
/**
 * @internal
 */
export declare function Sparky__forward(this: HTMLElementSparkyEnhanced): void;
/**
 * @internal
 */
export declare function Sparky__params(this: HTMLElementSparkyEnhanced): IParams[];
/**
 * @internal
 */
export declare function Sparky__currentState(this: HTMLElementSparkyEnhanced): IStateRoute;
/**
 * @internal
 */
export declare function getParamsByPath(path: string, url: string): IParams[];
/**
 * @internal
 */
export declare function matchUrl(path: string, url: string): boolean;

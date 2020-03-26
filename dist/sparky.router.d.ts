import { IStateRoute } from "./sparky";
export declare function listeningHashChange(stateRoute: IStateRoute[], callbackFn: Function): void;
export declare function getStateByHash(stateRoute: IStateRoute[], path: string): IStateRoute;
export declare function pushToAbstractHistory(stateRoute: IStateRoute): void;
export declare function Sparky__goToState(path: string): void;
export declare function Sparky__back(): void;
export declare function Sparky__forward(): void;
export declare function setStateRoute(stateRoute: IStateRoute[]): void;
export declare function getStateRoute(): any[];

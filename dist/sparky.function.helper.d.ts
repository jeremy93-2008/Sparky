import { IFnCached, ArgumentsList } from "./sparky.function";
import { ISparkyProps, ISparkyState, IRenderReturn, ISparkyComponent } from "./sparky";
declare type CachedType = "memoize" | "update";
export interface ISparkySelf {
    props: ISparkyProps;
    state?: ISparkyState;
    cachedMemo?: IFnCached[];
    cachedUpdate?: IFnCached[];
    indexes?: {
        memo: number;
        update: number;
        [x: string]: number;
    };
    __root?: ISparkyComponent;
    renderFunc: (props?: any) => IRenderReturn;
}
export declare function callCachedFn(context: ISparkySelf, type: CachedType, cachedArray: IFnCached[], callbackFn: Function, argumentsChanged?: ArgumentsList): any;
export {};

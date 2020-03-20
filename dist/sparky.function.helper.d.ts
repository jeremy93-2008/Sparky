import { IFnCached, ArgumentsList } from "./sparky.function";
import { ISparkySelf } from "./sparky.context";
declare type CachedType = "memoize" | "update";
export declare function callCachedFn(context: ISparkySelf, type: CachedType, cachedArray: IFnCached[], callbackFn: Function, argumentsChanged?: ArgumentsList): any;
export {};

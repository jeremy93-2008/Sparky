import { IFnCached, IArgumentsList } from "./sparky.function";
import { ISparkySelf } from "./sparky.context";
declare type ICachedType = "memoize" | "update";
/**
 * @internal
 */
export declare function callCachedFn(context: ISparkySelf, type: ICachedType, cachedArray: IFnCached[], callbackFn: Function, argumentsChanged?: IArgumentsList): any;
/**
 * @internal
 */
export declare function incrementIndexByType(context: ISparkySelf, type: ICachedType): number;
export {};

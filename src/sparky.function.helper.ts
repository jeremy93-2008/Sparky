import { arrayAreSame } from "./sparky.helper";
import { IFnCached, IArgumentsList } from "./sparky.function";
import { ISparkySelf } from "./sparky.context";

type ICachedType = "memoize" | "update";

/**
 * @internal
 */
export function callCachedFn(context: ISparkySelf, type: ICachedType, cachedArray: IFnCached[], callbackFn: Function, argumentsChanged?: IArgumentsList) {
    const fnCached = cachedArray[getIndexByType(context, type)];

    const newMemo = {
        fn: callbackFn,
        result: null,
        dependencies: argumentsChanged
    };

    if (!fnCached) {
        newMemo.result = callbackFn.call(window, argumentsChanged ? [...argumentsChanged] : null);
        cachedArray.push(newMemo)
        return newMemo.result;
    }

    if (!arrayAreSame(fnCached.dependencies, argumentsChanged)) {
        fnCached.dependencies = argumentsChanged;
        fnCached.result = callbackFn.call(window, ...argumentsChanged);
        return fnCached.result;
    }

    return fnCached.result;
}

/**
 * @internal
 */
function getIndexByType(context: ISparkySelf, type: ICachedType) {
    if (type == "memoize")
        return context.indexes.memo;
    return context.indexes.update;
}

/**
 * @internal
 */
export function incrementIndexByType(context: ISparkySelf, type: ICachedType) {
    if (type == "memoize")
        return ++context.indexes.memo;
    return ++context.indexes.update;
}
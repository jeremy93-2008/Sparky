import { arrayAreSame } from "./sparky.helper";
import { IFnCached, ArgumentsList } from "./sparky.function";
import { ISparkySelf } from "./sparky.context";

type CachedType = "memoize" | "update";

export function callCachedFn(context: ISparkySelf, type: CachedType, cachedArray: IFnCached[], callbackFn: Function, argumentsChanged?: ArgumentsList) {
    const fnCached = cachedArray[getIndexByType(context, type)];
    incrementIndexByType(context, type)

    const newMemo = {
        fn: callbackFn,
        result: null,
        dependencies: argumentsChanged
    };

    if (!fnCached || !argumentsChanged) {
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

function getIndexByType(context: ISparkySelf, type: CachedType) {
    if (type == "memoize")
        return context.indexes.memo;
    return context.indexes.update;
}
function incrementIndexByType(context: ISparkySelf, type: CachedType) {
    if (type == "memoize")
        return ++context.indexes.memo;
    return ++context.indexes.update;
}
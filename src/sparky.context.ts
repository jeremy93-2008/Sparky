import { ISparkySelf } from "./sparky.function.helper";

const emptyContext = {
    __root: null,
    props: {},
    state: {},
    cachedMemo: [],
    cachedUpdate: [],
    cachedState: [],
    indexes: {
        memo: 0,
        update: 0,
        state: 0
    },
    renderFunc: null
};

export class SparkyContext {
    private static __context: ISparkySelf
    private static __defaultContext : ISparkySelf = emptyContext

    public static getCurrentContext() {
        return this.__context;
    }

    public static setCurrentContext(newContext: ISparkySelf) {
        this.__context = newContext;
    }

    public static resetIndexes() {
        if(!this.__context) throw new ReferenceError("Try to reset index on a undefined context");
        this.__context.indexes.memo = 0;
        this.__context.indexes.update = 0;
        this.__context.indexes.state = 0;
    }

    public static newContext(newContext: ISparkySelf) : ISparkySelf {
        return {...this.__defaultContext, ...newContext};
    }
}
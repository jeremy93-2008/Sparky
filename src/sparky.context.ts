import nanoid from "nanoid/non-secure";
import cloneDeep from "clone-deep";
import { ISparkyProps, ISparkyState, ISparkyComponent, IRenderReturn } from "./sparky";
import { IFnCached } from "./sparky.function";
import { HTMLElementSparkyEnhanced } from "./sparky.component";

/**
 * @internal
 */
export interface ISparkySelf {
    props: ISparkyProps;
    state?: ISparkyState;
    cachedMemo?: IFnCached[],
    cachedUpdate?: IFnCached[],
    cachedState?: any[]
    indexes?: {
        memo: number;
        update: number;
        state: number;
        [x: string] : number;
    },
    __id?: string,
    __root?: ISparkyComponent,
    __rootElement?: HTMLElementSparkyEnhanced
    renderFunc: (props?: any) => IRenderReturn;
}

/**
 * @internal
 */
const emptyContext: ISparkySelf = {
    __rootElement: null,
    __root: null,
    __id: "",
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

/**
 * @internal
 */
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
        return cloneDeep({...this.__defaultContext, ...newContext, __id: nanoid(12)});
    }
}
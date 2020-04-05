import { ISparkyProps, ISparkyState, ISparkyComponent, IRenderReturn } from "./sparky";
import { IFnCached } from "./sparky.function";
import { HTMLElementSparkyEnhanced } from "./sparky.component";
export interface ISparkySelf {
    props: ISparkyProps;
    state?: ISparkyState;
    cachedMemo?: IFnCached[];
    cachedUpdate?: IFnCached[];
    cachedState?: any[];
    indexes?: {
        memo: number;
        update: number;
        state: number;
        [x: string]: number;
    };
    __id?: string;
    __root?: ISparkyComponent;
    __rootElement?: HTMLElementSparkyEnhanced;
    renderFunc: (props?: any) => IRenderReturn;
}
export declare class SparkyContext {
    private static __context;
    private static __defaultContext;
    static getCurrentContext(): ISparkySelf;
    static setCurrentContext(newContext: ISparkySelf): void;
    static resetIndexes(): void;
    static newContext(newContext: ISparkySelf): ISparkySelf;
}

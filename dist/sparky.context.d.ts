import { ISparkySelf } from "./sparky.function.helper";
export declare class SparkyContext {
    private static __context;
    private static __defaultContext;
    static getCurrentContext(): ISparkySelf;
    static setCurrentContext(newContext: ISparkySelf): void;
    static resetIndexes(): void;
    static newContext(newContext: ISparkySelf): ISparkySelf;
}

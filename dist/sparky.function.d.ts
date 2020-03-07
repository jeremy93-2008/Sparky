import { IRenderReturn, ISparkyComponent, ISparkyProps } from "./sparky";
import 'requestidlecallback-polyfill';
declare type UpdateCallback = () => void;
declare type DependenciesList = string[];
export declare class SparkyFunction {
    __root: ISparkyComponent;
    props: ISparkyProps;
    private newProps;
    private state;
    private renderFunc;
    constructor(renderFunc: (self: SparkyFunction) => IRenderReturn, props: ISparkyProps);
    initialState: <S>(initialState: S) => void;
    onUpdate: (callback: UpdateCallback, dependenciesChanged?: DependenciesList) => void;
    getState: <S>(props: string) => S;
    setState: <S>(newState: S) => void;
}
export {};

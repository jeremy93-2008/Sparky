import { Sparky, IRenderReturn, ISparkyComponent, ISparkyProps, ISparkyState } from "./sparky";
import 'requestidlecallback-polyfill';
import { arrayAreSame, ISparkySelf } from "./sparky.helper";

type CachedType = "memoize" | "update";
type UpdateCallback = () => void;
type ArgumentsList = any[];

interface IFnCached {
    fn: Function;
    dependencies: string[];
    result: any;
}

export class SparkyFunction {
    public __root: ISparkyComponent;
    public __sparkySelf: ISparkySelf;
    public props: ISparkyProps;
    
    private cachedUpdate: IFnCached[] = [];
    private cachedMemo: IFnCached[] = [];
    private state: ISparkyState;
    private renderFunc: (self: SparkyFunction) => IRenderReturn;

    constructor(renderFunc: (self: SparkyFunction) => IRenderReturn, props: ISparkyProps) {
        this.props = Object.freeze(props || {});
        this.state = {};
        this.renderFunc = renderFunc;
        this.__root = null;
    }
    
    /**
     * Execute after the render/update of the DOM tree.
     * @param callback - The function that you want to execute
     * @param dependenciesChanged - An array of keys to know when the onUpdate need to be executed
     */
    onUpdate = (callback: UpdateCallback, dependenciesChanged?: ArgumentsList) => {
        window.requestIdleCallback(() => {
            callCachedFn(this, "update", this.cachedUpdate, callback, dependenciesChanged)
        }, { timeout: 250 });
    }

    /**
    * Get State object value of this context
    * @param props - the specific key of the value that you want to retrieve
    */
    getState = <S>(props: string): S => {
        if (props) return this.state[props];
        return this.state as S;
    }

    /**
     * Add/Set a new value into the State object of the context
     * @param newState - new Value
     */
    setState = <S>(newState: S) => {
        this.state = { ...this.state, ...newState };
        (this.__root) ? Sparky.mount(this.__root) :
            Sparky.mount({ type: "SparkyComponent", self: this, selfFn: this.renderFunc });
    }

    /**
     * Call the function callback only when dependencies has changed
     * @param callbackFn - Callback to be called when needed
     * @param argumentsChanged - list of value that are used to know if the callback needed to be recalled
     */
    memoize = (callbackFn: Function, argumentsChanged?: ArgumentsList) => {
        callCachedFn(this, "memoize", this.cachedMemo, callbackFn, argumentsChanged)
    }
}

function callCachedFn(self: SparkyFunction, type: CachedType,cachedArray: IFnCached[], callbackFn: Function, argumentsChanged?: ArgumentsList) {
    const fnCached = cachedArray[getIndexByType(self, type)];
    incrementIndexByType(self, type)

    const newMemo = {
        fn: callbackFn,
        result: null,
        dependencies: argumentsChanged
    };

    if(!fnCached || !argumentsChanged) {
        newMemo.result = callbackFn.call(window, argumentsChanged ? [ ...argumentsChanged ] : null);
        cachedArray.push(newMemo)
        return newMemo.result;
    }
    
    if(!arrayAreSame(fnCached.dependencies, argumentsChanged)) {
        fnCached.dependencies = argumentsChanged;
        fnCached.result = callbackFn.call(window, ...argumentsChanged);
        return fnCached.result;
    }
    
    return fnCached.result;
}

function getIndexByType(self: SparkyFunction, type: CachedType) {
    if(type == "memoize")
        return self.__sparkySelf.indexMemo;
    return self.__sparkySelf.indexUpdate;
}
function incrementIndexByType(self: SparkyFunction, type: CachedType) {
    if(type == "memoize")
        return ++self.__sparkySelf.indexMemo;
    return ++self.__sparkySelf.indexUpdate;    
}
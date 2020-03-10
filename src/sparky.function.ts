import { Sparky, IRenderReturn, ISparkyComponent, ISparkyProps, ISparkyState } from "./sparky";
import 'requestidlecallback-polyfill';
import { arrayAreSame } from "./sparky.helper";

type UpdateCallback = () => void;

type DependenciesList = string[];
type ArgumentsList = any[];

interface IMemoCached {
    fn: Function;
    dependencies: string[];
    result: any;
}

export class SparkyFunction {
    public __root: ISparkyComponent;
    public props: ISparkyProps;
    
    private newProps: string[] = [];
    private cachedMemo: IMemoCached[] = [];
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
    onUpdate = (callback: UpdateCallback, dependenciesChanged?: DependenciesList) => {
        if (!dependenciesChanged && this.newProps.length == 0 ||
            dependenciesChanged && dependenciesChanged.length == 0 ||
            this.newProps.some((props) => dependenciesChanged && dependenciesChanged.includes(props)))
            //@ts-ignore
            window.requestIdleCallback(() => callback.call(this))
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
        this.newProps = Object.keys(newState);
        this.state = { ...this.state, ...newState };
        (this.__root) ? Sparky.mount(this.__root) :
            Sparky.mount({ type: "SparkyComponent", self: this, selfFn: this.renderFunc });
    }

    /**
     * Call the function callback only when dependencies has changed
     * @param callbackFn - Callback to be called when needed
     * @param argumentsChanged - list of value that are used to know if the callback needed to be recalled
     */
    memo = (callbackFn: Function, argumentsChanged?: ArgumentsList) => {
        const memoCached = this.cachedMemo.find((memo) => callbackFn.toString() == memo.fn.toString());
        const newMemo = {
            fn: callbackFn,
            result: null,
            dependencies: argumentsChanged
        };

        if(!memoCached) {
            newMemo.result = callbackFn.call(window, ...argumentsChanged);
            this.cachedMemo.push(newMemo)
            return newMemo.result;
        }
        
        if(!arrayAreSame(memoCached.dependencies, argumentsChanged)) {
            memoCached.dependencies = argumentsChanged;
            return callbackFn.call(window, ...argumentsChanged)
        }
        
        return memoCached.result;
    }
}
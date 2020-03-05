import { Sparky, IRenderReturn, ISparkyComponent, ISparkyProps, ISparkyState } from "./sparky";

type UpdateCallback = () => void;

type DependenciesList = string[];

export class SparkyFunction {
    public __root: ISparkyComponent;
    public props: ISparkyProps;
    
    private newProps: string[] = [];
    private state: ISparkyState;
    private renderFunc: (self: SparkyFunction) => IRenderReturn;

    constructor(renderFunc: (self: SparkyFunction) => IRenderReturn, props: ISparkyProps) {
        this.props = props;
        this.state = {};
        this.renderFunc = renderFunc;
        this.__root = null;
    }

    /**
     * Execute on Initial Phase to set up the compnent's state object
     * @param initialState - The initial state object
     */
    initialState = <S>(initialState: S) => {
        if(Object.keys(this.state).length > 0) return;
        this.state = initialState;
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
}
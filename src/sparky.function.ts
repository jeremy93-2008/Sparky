import { Sparky, IRenderReturn } from "./sparky";

type UpdateCallback = () => void;

type DependenciesList = string[];

export class SparkyFunction {
    private newProps: string[] = [];
    private state: any;
    private renderFunc: (self: SparkyFunction) => IRenderReturn;

    constructor(renderFunc: (self: SparkyFunction) => IRenderReturn) {
        this.state = {};
        this.renderFunc = renderFunc;
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
        return this.state;
    }

    /**
     * Add/Set a new value into the State object of the context
     * @param newState - new Value
     */
    setState = <S>(newState: S) => {
        this.newProps = Object.keys(newState);
        this.state = { ...this.state, ...newState };
        Sparky.mount({
            self: this,
            selfFunc: this.renderFunc
        });
    }
}
import { populateDOMwithDiff } from "./sparky.diff";
import { Sparky } from "./sparky";

export class SparkyFunction {
    public currentDom: HTMLElement;

    private state: any;
    private renderFunc: () => HTMLElement;
    
    constructor(renderFunc: () => HTMLElement) {
        this.state = {};
        this.renderFunc = renderFunc;
    }
    
    getState = () => {
        return this.state;
    }

    setState = (newState: any) => {
        this.state = {...this.state, ...newState};
        const finalDOM = Sparky.mount({
            self: this,
            func: this.renderFunc
        });
        this.currentDom = finalDOM;
    }
}
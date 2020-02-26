import { Sparky } from "./sparky";

export class SparkyFunction {
    private state: any;
    private renderFunc: (S: SparkyFunction) => HTMLElement;
    
    constructor(renderFunc: (S: SparkyFunction) => HTMLElement) {
        this.state = {};
        this.renderFunc = renderFunc;
    }
    
    getState = () => {
        return this.state;
    }

    setState = (newState: any) => {
        this.state = {...this.state, ...newState};
        Sparky.mount({
            self: this,
            func: this.renderFunc
        });
    }
}
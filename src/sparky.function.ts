import { Sparky, renderReturn } from "./sparky";

export class SparkyFunction {
    private state: any;
    private renderFunc: (self: SparkyFunction) => renderReturn;
    
    constructor(renderFunc: (self: SparkyFunction) => renderReturn) {
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
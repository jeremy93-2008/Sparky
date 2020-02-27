import { Sparky, renderReturn } from "./sparky";

export class SparkyFunction {
    private newProps: string[] = [];
    private state: any;
    private renderFunc: (self: SparkyFunction) => renderReturn;
    
    constructor(renderFunc: (self: SparkyFunction) => renderReturn) {
        this.state = {};
        this.renderFunc = renderFunc;
    }

    onUpdate = (callback: () => void, objectChanged?: string[]) => {
        if(!objectChanged && this.newProps.length == 0 ||
            objectChanged && objectChanged.length == 0 || 
            this.newProps.some((props) => objectChanged && objectChanged.includes(props)))
            window.requestIdleCallback(() => callback.call(this))
    }

    private executeUpdate = (callback: () => void, objectChanged: string[]) => {
        const newPropsString = this.newProps.join(",");
        const objectChangedString = objectChanged.join(",");
        if(newPropsString == objectChangedString) {
            callback.call(this)
        }
    }
    
    getState = () => {
        return this.state;
    }

    setState = (newState: any) => {
        this.newProps = Object.keys(newState);
        this.state = {...this.state, ...newState};
        Sparky.mount({
            self: this,
            func: this.renderFunc
        });
    }
}
import { eventListSingle, EventManager } from "./sparky.eventmanager";
import { ISparkyComponent } from "./sparky";

/**
 * @internal
 */
export interface IBoundMountComponent {
    testing: boolean;
    __testUtilData: ITestData;
    simulate: Function;
}

/**
 * @internal
 */
export interface ITestData {
    root: HTMLElement;
    component: ISparkyComponent;
    eventList: eventListSingle[];
}

type ISelector = (selector: string) => IReturnSelector;

interface IReturnSelector {
    simulate: (eventType: string) => void;
    dom: HTMLElement;
}

/**
 * @internal
 */
type ISimulateEvent = {
    dom: HTMLElement;
    testData: ITestData;
};

export class SparkyTest {
    public static test(callback: Function) {
        const thisTest = { testing: true, __testUtilData: {} } as IBoundMountComponent;
        thisTest.simulate = this.simulate;
        (window as any).thisTest = thisTest;
        callback();
        return {
            selector: this.selector.bind(thisTest) as ISelector,
        }
    }

    private static selector(this: IBoundMountComponent, selector: string): IReturnSelector {
        const dom = this.__testUtilData.root.querySelector(selector) as HTMLElement;
        return {
            simulate: this.simulate.bind({ dom, testData: this.__testUtilData }),
            dom
        };
    }

    private static simulate(this: ISimulateEvent, eventType: string) {
        const currentSyntheticEvt = SparkyTest.getCurrentEvent(this.testData, this.dom, eventType);
        if(!currentSyntheticEvt) return;
        const testEvent = currentSyntheticEvt;
        const evt = new Event(testEvent.type);
        Object.defineProperty(evt, 'target', {writable: false, value: testEvent.dom});
        EventManager.dispatchEvent(evt);
    }

    private static getCurrentEvent(testData: ITestData, dom: HTMLElement, eventType: string) {
        return testData.eventList.find((evt) => {
            return evt.dom.isEqualNode(dom) && evt.type == eventType
        });
    }
}
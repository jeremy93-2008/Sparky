import { eventListSingle } from "./sparky.eventmanager";
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
declare type ISelector = (selector: string) => IReturnSelector;
interface IReturnSelector {
    simulate: (eventType: string) => void;
    dom: HTMLElement;
}
export declare class SparkyTest {
    static test(callback: Function): {
        selector: ISelector;
    };
    private static selector;
    private static simulate;
    private static getCurrentEvent;
}
export {};

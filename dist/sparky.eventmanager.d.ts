import { ISparkySelf } from "./sparky.context";
export interface eventListSingle {
    dom: HTMLElement;
    type: string;
    context: ISparkySelf;
    callbackFn: eventCallbackFn;
}
export interface IEventSingle {
    type: string;
    context: ISparkySelf;
    callbackFn: eventCallbackFn;
}
export declare type eventCallbackFn = (evt: Event) => void;
export declare class EventManager {
    static oldEventType: string[];
    static eventList: eventListSingle[];
    static eventListType: string[];
    static listen(finalDOM: HTMLElement): void;
    static dispatchEvent(event: Event): void;
    static addEvent(eventSingle: eventListSingle): void;
    private static populateEvents;
    private static removeAllEvents;
    private static removeUnusedEvents;
    private static isEventTypeListening;
    private static isEventTarget;
}

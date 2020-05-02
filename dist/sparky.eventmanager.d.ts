import { ISparkySelf } from "./sparky.context";
/**
 * @internal
 */
export interface eventListSingle {
    dom: HTMLElement;
    type: string;
    context: ISparkySelf;
    callbackFn: eventCallbackFn;
}
/**
 * @internal
 */
export interface IEventSingle {
    type: string;
    context: ISparkySelf;
    callbackFn: eventCallbackFn;
}
/**
 * @internal
 */
export declare type eventCallbackFn = (evt: Event) => void;
/**
 * @internal
 */
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

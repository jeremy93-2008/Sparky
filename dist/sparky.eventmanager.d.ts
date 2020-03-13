export interface eventListSingle {
    dom: HTMLElement;
    type: string;
    callbackFn: eventCallbackFn;
}
export declare type eventCallbackFn = (evt: Event) => void;
export declare class EventManager {
    static oldEventType: string[];
    static eventList: eventListSingle[];
    static eventListType: string[];
    static listen(): void;
    static dispatchEvent(event: Event): void;
    static addEvent(eventSingle: eventListSingle): void;
    private static removeUnusedEvents;
    private static isEventTypeListening;
    private static isEventTarget;
}

import { isConnectedPolyfill } from "./polyfill/isConnected"
import { ISparkySelf } from "./sparky.context";

isConnectedPolyfill();

export interface eventListSingle {
    dom: HTMLElement;
    type: string;
    context: ISparkySelf;
    callbackFn: eventCallbackFn;
}

export type eventCallbackFn = (evt: Event) => void;

export class EventManager {
    static oldEventType: string[] = [];
    static eventList: eventListSingle[] = [];
    static eventListType: string[] = [];

    static listen() {
        EventManager.removeUnusedEvents();
        this.eventList.forEach((event) => {
            const { type } = event;
            if(!this.isEventTypeListening(type)) {
                document.addEventListener(type, (event) => this.dispatchEvent(event))
                this.eventListType.push(type);
            }
        });
    }

    static dispatchEvent(event: Event) {
        this.eventList.find((evtList) => {
            if(this.isEventTarget(evtList, event)) {
                if(evtList.type === event.type) {
                    evtList.callbackFn(event);
                }
            }
        })
    }

    static addEvent(eventSingle: eventListSingle) {
        const {dom, type, context, callbackFn} = eventSingle;
        this.eventList.push({ dom, type, context, callbackFn });
    }

    private static removeUnusedEvents() {
        this.eventList = this.eventList
            .filter((evt) => evt.dom.isConnected);
    }

    private static isEventTypeListening(type: string) {
        return this.eventListType.find(t => t == type);
    }

    private static isEventTarget(evtList: eventListSingle, event: Event) {
        return (evtList.dom === event.target) || evtList.dom.contains(event.target as HTMLElement);
    }
}
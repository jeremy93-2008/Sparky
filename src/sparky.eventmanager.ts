import { isConnectedPolyfill } from "./polyfill/isConnected"
import { ISparkySelf } from "./sparky.context";
import { HTMLElementSparkyEnhanced } from "./sparky.component";

isConnectedPolyfill();

interface windowTesting extends Window {
    thisTestEvent: eventListSingle[]
}
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

export type eventCallbackFn = (evt: Event) => void;

export class EventManager {
    static oldEventType: string[] = [];
    static eventList: eventListSingle[] = [];
    static eventListType: string[] = [];

    static listen(finalDOM: HTMLElement) {
        (window as unknown as windowTesting).thisTestEvent = EventManager.eventList;
        EventManager.populateEvents(finalDOM);
        EventManager.removeUnusedEvents();
        const evtList = this.eventList;
        evtList.forEach((event) => {
            const { type } = event;
            if(!this.isEventTypeListening(type)) {
                document.addEventListener(type, (event) => this.dispatchEvent(event, evtList))
                this.eventListType.push(type);
            }
        });
    }

    static dispatchEvent(event: Event, eventList: eventListSingle[]) {
        eventList.find((evtList) => {
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

    private static populateEvents(finalDOM: HTMLElementSparkyEnhanced) {
        const domQueue = [finalDOM];
        while(domQueue.length > 0) {
            const elem = domQueue.shift();
            
            if(elem.__sparkyEvent) {
                const { callbackFn, type, context } = elem.__sparkyEvent;
                this.addEvent({dom: elem, type, context, callbackFn})
                continue;
            }
    
            for(let index = 0; index < elem.children.length; index++) {
                domQueue.push(elem.children[index] as HTMLElement)
            }
        }
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
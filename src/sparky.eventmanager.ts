import { ISparkySelf } from "./sparky.context";
import { HTMLElementSparkyEnhanced } from "./sparky.component";

/**
 * @internal
 */
interface windowTesting extends Window {
    thisTestEvent: eventListSingle[]
}

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
export type eventCallbackFn = (evt: Event) => void;

/**
 * @internal
 */
export class EventManager {
    static oldEventType: string[] = [];
    static eventList: eventListSingle[] = [];
    static eventListType: string[] = [];

    static listen(finalDOM: HTMLElement) {
        EventManager.removeAllEvents();
        EventManager.populateEvents(finalDOM);
        EventManager.removeUnusedEvents();
        (window as unknown as windowTesting).thisTestEvent = EventManager.eventList;
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

    private static populateEvents(finalDOM: HTMLElementSparkyEnhanced) {
        const domQueue = [finalDOM];
        while(domQueue.length > 0) {
            const elem = domQueue.shift();
            
            if(elem.__sparkyEvent) {
                const { callbackFn, type, context } = elem.__sparkyEvent;
                this.addEvent({dom: elem, type, context, callbackFn});
            }
    
            for(let index = 0; index < elem.children.length; index++) {
                domQueue.push(elem.children[index] as HTMLElement)
            }
        }
    }

    private static removeAllEvents() {
        this.eventList = [];
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
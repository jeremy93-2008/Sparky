import { SparkyFunction } from "./sparky.function";

interface eventListSingle {
    dom: HTMLElement;
    type: string;
    callbackFn: eventCallbackFn;
}

type eventCallbackFn = (evt: Event) => void;


export class EventManager {
    static oldEventType: string[] = [];
    static eventList: eventListSingle[] = [];
    static eventListType: string[] = [];

    static listen() {
        EventManager.removeUnusedEvents();
        this.eventList.forEach(({type}) => {
            if(!this.eventListType.find(t => t == type)) {
                document.body.addEventListener(type, (event) => this.dispatchEvent(event))
                this.eventListType.push(type);
            }
        });
    }

    static dispatchEvent(event: Event) {
        this.eventList.forEach((evtList) => {
            if(evtList.dom === event.target) {
                if(evtList.type === event.type) {
                    evtList.callbackFn(event);
                }
            }
        })
    }

    static addEvent(dom: HTMLElement, type: string, callbackFn: eventCallbackFn) {
        this.eventList.push({ dom, type, callbackFn });
    }

    static removeUnusedEvents() {
        this.eventList = this.eventList
            .filter((evt) => evt.dom.isConnected);
    }
}
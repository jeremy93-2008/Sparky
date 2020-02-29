import { SparkyFunction } from "./sparky.function";

interface eventListSingle {
    dom: HTMLElement;
    type: string;
    callbackFn: eventCallbackFn;
}

type eventCallbackFn = (evt: Event) => void;


export class EventManager {
    static isListening = false;
    static eventType: string[] = [];
    static eventList: eventListSingle[];

    static listen() {
        if(this.isListening) return;
        this.eventType.forEach((type) => {
            document.body.addEventListener(type,(event) => this.dispatchEvent(event))
        });
        this.isListening = true;
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
        this.eventType.push(type)
        this.eventList.push({ dom, type, callbackFn });
    }

    static clearEvents() {
        this.eventList = [];
        this.eventType = [];
    }
}
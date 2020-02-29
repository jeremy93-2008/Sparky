import { SparkyFunction } from "./sparky.function";

interface eventListSingle {
    dom: HTMLElement;
    type: string;
    callbackFn: eventCallbackFn;
}

type eventCallbackFn = (evt: Event) => void;


export class EventManager {
    static isReRendering = false;
    static oldEventType: string[] = [];
    static eventType: string[] = [];
    static eventList: eventListSingle[];

    static listen() {
        let eventTypeArray = this.eventType;
        
        if(this.isReRendering)
            eventTypeArray = this.eventType.filter((type) => !this.oldEventType.includes(type));
        
        eventTypeArray.forEach((type) => {
            document.body.addEventListener(type,(event) => this.dispatchEvent(event))
        });
        
        this.isReRendering = true;
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
        this.oldEventType = this.eventType;
        this.eventList = [];
        this.eventType = [];
    }
}
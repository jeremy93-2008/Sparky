import { IRenderReturn, ISparkyComponent } from "./sparky";
import { findEvent } from "./sparky.event";
import { EventManager } from "./sparky.eventmanager";

interface ICachedComponent {
    component: ISparkyComponent,
    dom: HTMLElement
}

export class SparkyComponent {
    private static cachedComponent: ICachedComponent[][] = [];
    static populate(render: IRenderReturn, rootComponent: ISparkyComponent) {
        
        const renderQueue = [render];

        let depthHorizontal = 0;

        while (renderQueue.length > 0) {
            const currentRender = renderQueue.shift();
            if(!this.cachedComponent[depthHorizontal]) this.cachedComponent[depthHorizontal] = [];

            currentRender.func.forEach((currentFunc, index) => {
                const currentEvent = findEvent(render.dom, currentRender.renderId, index);
                const eventName = currentEvent.attr.name.replace("on", "");
                EventManager.addEvent({
                    dom: currentEvent.dom,
                    type: eventName,
                    callbackFn: currentFunc.func.bind(window, event)
                })
                currentEvent.dom.removeAttribute(currentEvent.attr.name)
            })

            currentRender.children.forEach((currentChild) => {
                renderQueue.push(currentChild)
            })

            currentRender.nestedComponents.forEach((currentComp, index) => {
                if(currentComp.type !== "SparkyComponent") return;
                const cached = this.cachedComponent[depthHorizontal][index];
                const commentDom = this.findComment(render.dom, currentRender.renderId, index, currentComp.selfFn.name);
                if(cached) {
                    cached.component.self.props = currentComp.self.props;
                    currentComp = cached.component;
                }
                const renderChild = currentComp.selfFn(currentComp.self, Object.freeze(currentComp.self.props));
                if(!commentDom) return;
                commentDom.parentNode.replaceChild(renderChild.dom, commentDom);
                currentComp.self.__root = rootComponent;
                render.func.push(...renderChild.func);
                renderQueue.push(renderChild);

                this.cachedComponent[depthHorizontal].push({
                    component: currentComp,
                    dom: renderChild.dom
                })
            });
            depthHorizontal++;
        }

        return render.dom;
    }

    private static findComment(element: HTMLElement, renderId: string, i: number, componentName: string) {
        const domQueue = [element];
        while(domQueue.length > 0) {
            const elem = domQueue.shift();
            if(elem.nodeName == '#comment' && elem.nodeValue.trim() == `SparkyComponent#${componentName}#${i}#${renderId}`) {
                return elem;
            }

            Array.from(elem.childNodes as NodeListOf<HTMLElement>).forEach((child) => {
                domQueue.push(child)
            })
        }
    }
}
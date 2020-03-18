import { IRenderReturn, ISparkyComponent } from "./sparky";
import { findEvent } from "./sparky.event";
import { EventManager, eventCallbackFn } from "./sparky.eventmanager";
import { SparkyContext } from "./sparky.context";

interface ICachedComponent {
    component: ISparkyComponent,
    dom: HTMLElement
}

export class SparkyComponent {
    private static cachedComponent: ICachedComponent[][] = [];
    static populate(render: IRenderReturn, rootComponent: ISparkyComponent) {
        
        const renderQueue: [IRenderReturn, ISparkyComponent][] = [[render, rootComponent]];

        let depthHorizontal = 0;

        while (renderQueue.length > 0) {
            const [currentRender, currentComponent] = renderQueue.shift();
            if(!this.cachedComponent[depthHorizontal]) this.cachedComponent[depthHorizontal] = [];

            currentRender.func.forEach((currentFunc, index) => {
                const currentEvent = findEvent(render.dom, currentRender.renderId, index);
                const eventName = currentEvent.attr.name.replace("on", "");
                EventManager.addEvent({
                    dom: currentEvent.dom,
                    type: eventName,
                    context: currentComponent.context,
                    callbackFn: currentFunc.func as eventCallbackFn
                })
                currentEvent.dom.removeAttribute(currentEvent.attr.name)
            })

            currentRender.children.forEach((currentChild) => {
                renderQueue.push([currentChild, currentComponent])
            })

            currentRender.nestedComponents.forEach((currentComp, index) => {
                if(currentComp.type !== "SparkyComponent") return;
                const cached = this.cachedComponent[depthHorizontal][index];
                const commentDom = this.findComment(render.dom, currentRender.renderId, index, currentComp.renderFn.name);
                if(cached) {
                    if(cached.component.renderFn.name == "") {
                        if(cached.component.renderFn.toString() == currentComp.renderFn.toString()) {
                            currentComp = getCachedComponent(cached, currentComp);
                        }
                    } else if(cached.component.renderFn.name == currentComp.renderFn.name){
                        currentComp = getCachedComponent(cached, currentComp);
                    }
                }
                SparkyContext.setCurrentContext(currentComp.context);
                SparkyContext.resetIndexes();
                const renderChild = currentComp.renderFn(Object.freeze(currentComp.context.props));
                if(!commentDom) return;
                commentDom.parentNode.replaceChild(renderChild.dom, commentDom);
                currentComp.context.__root = rootComponent;
                render.func.push(...renderChild.func);
                renderQueue.push([renderChild, currentComp]);

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

function getCachedComponent(cached: ICachedComponent, currentComp: ISparkyComponent) {
    cached.component.context.props = currentComp.context.props;
    currentComp = cached.component;
    return currentComp;
}

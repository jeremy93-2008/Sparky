import { IRenderReturn, ISparkyComponent, renderToDOMNode } from "./sparky";
import { findEvent } from "./sparky.event";
import { EventManager, eventCallbackFn } from "./sparky.eventmanager";
import { SparkyContext } from "./sparky.context";

interface ICachedComponent {
    component: ISparkyComponent,
    dom: HTMLElement
}

export class SparkyComponent {
    private static cachedComponent: ICachedComponent[][] = [];
    static populate(nextDOM: HTMLElement, render: IRenderReturn, rootComponent: ISparkyComponent) {
        
        const renderQueue: [IRenderReturn, ISparkyComponent, HTMLElement][] = [[render, rootComponent, nextDOM]];

        let depthHorizontal = 0;

        while (renderQueue.length > 0) {
            const [currentRender, currentComponent, currentDOM] = renderQueue.shift();
            if(!this.cachedComponent[depthHorizontal]) this.cachedComponent[depthHorizontal] = [];

            currentRender.func.forEach((currentFunc, index) => {
                const currentEvent = findEvent(currentDOM, currentRender.renderId, index);
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
                renderQueue.push([currentChild, currentComponent, currentDOM])
            })

            currentRender.nestedComponents.forEach((currentComp, index) => {
                const cached = this.cachedComponent[depthHorizontal][index];
                const commentDom = this.findComment(currentDOM, currentRender.renderId, index, currentComp.renderFn.name);
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
                const renderChildDOM = renderToDOMNode(renderChild.html);
                commentDom.parentNode.replaceChild(renderChildDOM, commentDom);
                currentComp.context.__root = rootComponent;
                render.func.push(...renderChild.func);
                renderQueue.push([renderChild, currentComp, renderChildDOM]);

                this.cachedComponent[depthHorizontal][index] = {
                    component: currentComp,
                    dom: currentDOM
                };
            });
            if(currentRender.nestedComponents.length > 0)
                depthHorizontal++;
        }

        return nextDOM;
    }

    private static findComment(element: HTMLElement, renderId: string, i: number, componentName: string) {
        const domQueue = [element];
        while(domQueue.length > 0) {
            const elem = domQueue.shift();
            if(elem.nodeName == '#comment' && elem.nodeValue.trim() == `SparkyComponent#${componentName}#${i}#${renderId}`) {
                return elem;
            }

            for(let i = 0; i < elem.childNodes.length; i++) {
                domQueue.push(elem.childNodes[i] as HTMLElement);
            }
        }
    }
}

function getCachedComponent(cached: ICachedComponent, currentComp: ISparkyComponent) {
    cached.component.context.props = currentComp.context.props;
    currentComp = cached.component;
    return currentComp;
}

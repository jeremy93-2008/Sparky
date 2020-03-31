import { IRenderReturn, ISparkyComponent, renderToDOMNode, IStateRoute } from "./sparky";
import { findEvent } from "./sparky.event";
import { eventCallbackFn, IEventSingle } from "./sparky.eventmanager";
import { SparkyContext } from "./sparky.context";
import { IRoutingTypes } from "./sparky.router";

export interface IParams {
    [x: string]: string
}
export interface ISparkyRoot {
    id: string;
    type: IRoutingTypes;
    basename: string;
    forceURLUpdate: boolean;
    historyIndex: number;
    stateChanging: boolean;
    params: IParams[];
    history: IStateRoute[];
    routing: IStateRoute[];
    updateAt: number;
}

export interface HTMLElementSparkyEnhanced extends HTMLElement {
    __sparkyEvent?: IEventSingle;
    __sparkyRoot?: ISparkyRoot;
}

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
                currentEvent.dom.__sparkyEvent = {
                    type: eventName,
                    context: currentComponent.context,
                    callbackFn: currentFunc.func as eventCallbackFn
                };
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
                currentComp.context.__root = rootComponent;
                currentComp.context.__rootElement = rootComponent.context.__rootElement;
                const renderChild = currentComp.renderFn(Object.freeze(currentComp.context.props));
                if(!commentDom) return;
                const renderChildDOM = renderToDOMNode(renderChild.html);
                commentDom.parentNode.replaceChild(renderChildDOM, commentDom);
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

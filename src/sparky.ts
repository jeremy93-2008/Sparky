import nanoid from "nanoid/non-secure";

import 'mdn-polyfills/Array.from';
import 'mdn-polyfills/Array.prototype.find';

import cloneDeep from "lodash.clonedeep";

import { reconciliate, getCurrentDom, setCurrentDom } from "./sparky.dom";
import { EventManager } from "./sparky.eventmanager";
import { SparkyComponent } from "./sparky.component";

import { isConnectedPolyfill } from "./polyfill/isConnected"
import { ISparkySelf } from "./sparky.function.helper";
import { SparkyContext } from "./sparky.context";


isConnectedPolyfill();

export interface IRenderReturn extends IReconciliateProps {
    type: string;
    nestedComponents: ISparkyComponent[];
    children: IRenderReturn[];
    renderId: string;
}

export interface IReconciliateProps {
    dom: HTMLElement,
    func: ISparkyEventFunc[],
}

export type ISelfFunction = (props?: any) => IRenderReturn;

export interface ISparkyEventFunc {
    renderId: string;
    index: number;
    func: Function;
}

export interface ISparkyComponent {
    type: string;
    context: ISparkySelf;
    currentContext: ISparkySelf;
    renderFn: ISelfFunction;
}

export interface ISparkyProps {
    [key: string]: any;
}

export type ISparkyState = ISparkyProps;

export class Sparky {
    public static _DEV_: boolean = true;

    /**
     * Generate a Sparky Component that can be mount.
     * @param renderFunc The function that going to be execute to render html template
     */
    static component(renderFunc: ISelfFunction, props?: ISparkyProps) {
        const sparkyContext = SparkyContext.newContext({ props, renderFunc });
        return { type: "SparkyComponent", context: sparkyContext, currentContext: sparkyContext, renderFn: renderFunc } as ISparkyComponent;
    }

    /**
     * Mount a Sparky Component in the DOM Tree and keep it updated.
     * @param component Sparky Component
     * @param dom The dom element where you want to mount this component
     */
    static mount(component: ISparkyComponent, dom?: HTMLElement) {
        if (Sparky._DEV_)
            console.time();

        const { context, renderFn } = component;

        const oldContext = cloneDeep(component.currentContext);

        SparkyContext.setCurrentContext(context);
        SparkyContext.resetIndexes();

        const render = renderFn(Object.freeze(context.props)) as IRenderReturn;

        render.dom = SparkyComponent.populate(render, component);

        let finalDOM = reconciliate(getCurrentDom(), render.dom);
        if (!finalDOM) return;
        if (!finalDOM.isConnected && dom)
            dom.appendChild(finalDOM);
        EventManager.listen();

        setCurrentDom(finalDOM as HTMLElement);

        if (Sparky._DEV_)
            console.timeEnd();
        
        return oldContext;
    }

    /**
     * Reconciliate the current DOM with the new DOM Node
     * @param oldNode Node that need to be reconcile
     * @param newNode Node that have the new elements
     */
    static reconciliate(oldNode: HTMLElement, newNode: HTMLElement) {
        return reconciliate(oldNode, newNode)
    }
}

/**
 * Render the html string template to HTML elements
 * @param html Array of HTML String 
 * @param computedProps Computed Props used to pass Javascript into template
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function render(html: TemplateStringsArray | string, ...computedProps: any[]): IRenderReturn {
    const domNode = document.createElement("div");
    const func: ISparkyEventFunc[] = [];
    const nestedComponents: ISparkyComponent[] = [];
    const children: IRenderReturn[] = [];
    const renderId = nanoid(12);

    const newHTML = (typeof html == "string") ? html
        : html.map((stringHTML, i) => {
            let htmlLine = ""
            htmlLine += stringHTML
            if (!computedProps[i]) return htmlLine;
            htmlLine = getComputedValue(computedProps, i, func, htmlLine, nestedComponents, children, renderId);
            return htmlLine;
        })

    domNode.innerHTML = Array.isArray(newHTML) ? newHTML.join("") : newHTML;

    if (domNode.children.length > 1) {
        throw new TypeError("The render HTML can only had one root node");
    }

    return { type: "SparkyRender", dom: domNode.firstElementChild as HTMLElement, func, nestedComponents, children, renderId };
}

function getComputedValue(computedProps: any[], i: number, func: ISparkyEventFunc[], htmlLine: string, nestedComponents: ISparkyComponent[], children: IRenderReturn[], renderId: string) {
    if (typeof computedProps[i] == "function") {
        func.push({ index: func.length - 1, renderId, func: computedProps[i] });
        htmlLine += `'SparkyFunction#${renderId}#${func.length - 1}'`;
    }
    else if (computedProps[i].type == "SparkyRender") {
        const render = computedProps[i] as IRenderReturn;
        htmlLine = renderSparkyObject(render, htmlLine);
        children.push(render)
    }
    else if (computedProps[i].type == "SparkyComponent") {
        const comp = computedProps[i] as ISparkyComponent;
        htmlLine += `<!-- SparkyComponent#${comp.renderFn.name}#${nestedComponents.length}#${renderId} -->`;
        nestedComponents.push(comp);
    }
    else {

        computedProps[i] = Array.isArray(computedProps[i]) ?
            computedProps[i].join("") : new String(computedProps[i]);
        if ((computedProps[i] as string).startsWith("<"))
            htmlLine += computedProps[i];
        else
            htmlLine += `<span class='computed'>${computedProps[i]}</span>`;
    }
    return htmlLine;
}

function renderSparkyObject(render: IRenderReturn, htmlLine: string) {
    const div = document.createElement("div");
    div.appendChild(render.dom);
    htmlLine += div.innerHTML;
    return htmlLine;
}

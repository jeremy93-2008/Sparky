import nanoid from "nanoid/non-secure";

import 'mdn-polyfills/Array.from';
import 'mdn-polyfills/Array.prototype.find';

import { reconciliate, getCurrentDom, setCurrentDom } from "./sparky.dom";
import { EventManager } from "./sparky.eventmanager";
import { SparkyComponent } from "./sparky.component";
import { SparkyContext, ISparkySelf } from "./sparky.context";

import cloneDeep from "clone-deep";

import { isConnectedPolyfill } from "./polyfill/isConnected";
import { Sparky__state, Sparky__update, Sparky__memoize } from "./sparky.function";
import { listeningHashChange, getStateByHash, pushToAbstractHistory, Sparky__goToState, Sparky__back, Sparky__forward, setStateRoute } from "./sparky.router";

isConnectedPolyfill();

declare var thisTest;
declare var thisTestEvent;

export interface IRenderReturn {
    type: string;
    html: string;
    func: ISparkyEventFunc[],
    nestedComponents: ISparkyComponent[];
    children: IRenderReturn[];
    renderId: string;
}

export interface IStateRoute {
    path: RegExp | string;
    component: ISparkyComponent;
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
     * Create a routing component that manage history
     * @param stateRoute 
     */
    static router(stateRoute: IStateRoute[], dom?: HTMLElement) {
        listeningHashChange(stateRoute, (component) => {
            Sparky.mount(component);
        })

        const routeState = getStateByHash(stateRoute, location.hash);
        setStateRoute(stateRoute);
        pushToAbstractHistory(routeState)
        return routeState.component;
    }

    /**
     * Mount a Sparky Component in the DOM Tree and keep it updated.
     * @param component Sparky Component
     * @param dom The dom element where you want to mount this component
     */
    static mount(component: ISparkyComponent, dom?: HTMLElement): ISparkySelf {
        if (Sparky._DEV_)
            console.time();

        const { context, renderFn } = component;

        const keepIndexes = cloneDeep(component.currentContext.indexes);

        SparkyContext.setCurrentContext(context);
        SparkyContext.resetIndexes();

        const render = renderFn(Object.freeze(context.props)) as IRenderReturn;

        let nextDOM = renderToDOMNode(render.html);

        nextDOM = SparkyComponent.populate(nextDOM, render, component);

        let finalDOM = reconciliate(getCurrentDom(), nextDOM);
        if (!finalDOM) return;
        if (!finalDOM.isConnected && dom)
            dom.appendChild(finalDOM);

        EventManager.listen(finalDOM);

        setCurrentDom(finalDOM as HTMLElement);

        if (Sparky._DEV_)
            console.timeEnd();

        if(typeof thisTest != "undefined" && thisTest.testing) {
            thisTest.__testUtilData = {
                root: getCurrentDom(),
                component,
                eventList: thisTestEvent
            };
        }
        
        return {...component.currentContext, indexes: keepIndexes};
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
 * Function will be run after the render is commited to the screen.
 * @param callbackFn - The function to run
 * @param dependenciesChanged - Array of values that the function depends on
 */
export const update = Sparky__update;

/**
 * Returns a stateful value, and a function to update it.
 * @param initialState The value during the first render
 */
export const state = Sparky__state;

/**
 * Run and returns a memoized value
 * @param callbackFn - Function will be run on rendering phase
 * @param argumentsChanged - Array of values that the function depends on
 */
export const memoize = Sparky__memoize;

export const goToState = Sparky__goToState;
export const goBack = Sparky__back;
export const goForward = Sparky__forward;

/**
 * Render the html string template to HTML elements
 * @param html Array of HTML String 
 * @param computedProps Computed Props used to pass Javascript into template
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function render(html: TemplateStringsArray | string, ...computedProps: any[]): IRenderReturn {
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

    const innerHTML = Array.isArray(newHTML) ? newHTML.join("") : newHTML;

    return { type: "SparkyRender", html: innerHTML, func, nestedComponents, children, renderId };
}

function getComputedValue(computedProps: any[], i: number, func: ISparkyEventFunc[], htmlLine: string, nestedComponents: ISparkyComponent[], children: IRenderReturn[], renderId: string) {
    if (typeof computedProps[i] == "function") {
        func.push({ index: func.length - 1, renderId, func: computedProps[i] });
        htmlLine += `'SparkyFunction#${renderId}#${func.length - 1}'`;
    }
    else if (computedProps[i].type == "SparkyRender") {
        const render = computedProps[i] as IRenderReturn;
        htmlLine += render.html;
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

export function renderToDOMNode(html: string) {
    const div = document.createElement("div");
    div.innerHTML = html;
    if (div.children.length > 1) {
        throw new TypeError("Adjacent elements on the root level are forbidden.");
    }
    return div.firstElementChild as HTMLElement;
}
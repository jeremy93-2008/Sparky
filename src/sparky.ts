import nanoid from "nanoid/non-secure";

import { reconciliate } from "./sparky.dom";
import { EventManager } from "./sparky.eventmanager";
import { SparkyComponent, HTMLElementSparkyEnhanced, IParams } from "./sparky.component";
import { SparkyContext, ISparkySelf } from "./sparky.context";

import cloneDeep from "clone-deep";

import { Sparky__state, Sparky__update, Sparky__memoize, Sparky__internal_history, Sparky__store, IDispatcherAction } from "./sparky.function";
import { listeningHashChange, getStateByHash, getParamsByPath } from "./sparky.router";

/**
 * @internal
 */
declare var thisTest;
/**
 * @internal
 */
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
    hash?: string;
    exact?: boolean;
    path: string;
    component: ISparkyComponent;
}

/**
 * @internal
 */
export interface IReconciliateProps {
    dom: HTMLElement,
    func: ISparkyEventFunc[],
}

export type ISparkyFunction = (props?: any) => IRenderReturn;

export interface ISparkyEventFunc {
    renderId: string;
    index: number;
    func: Function;
}

export interface ISparkyComponent {
    type: string;
    context: ISparkySelf;
    currentContext: ISparkySelf;
    renderFn: ISparkyFunction;
}

export interface ISparkyRouterOptions {
    type?: "hash" | "abstract" | "browser";
    basename?: string;
    forceUrlUpdate?: boolean;
}

export interface ISparkyRouter {
    type: string;
    component: ISparkyComponent;
    routing: IStateRoute[];
    history: IStateRoute[];
    params: IParams[];
    options: ISparkyRouterOptions;
}

export type ISparkyStore<T> = {store: T, dispatcher : (store: ISparkyStore<T>, action: IDispatcherAction) => void, type: string}

export interface ISparkyProps {
    [key: string]: any;
}

export type ISparkyState = ISparkyProps;

export class Sparky {

    /**
     * Generate a Sparky Component that can be mount.
     * @param renderFunc The function that going to be execute to render html template
     */
    static component(renderFunc: ISparkyFunction, props?: ISparkyProps) {
        const sparkyContext = SparkyContext.newContext({ props, renderFunc });
        return { type: "SparkyComponent", context: sparkyContext, currentContext: sparkyContext, renderFn: renderFunc } as ISparkyComponent;
    }

    /**
     * Create a routing component that manage history
     * @param stateRoute 
     */
    static router(stateRoute: IStateRoute[], options?: ISparkyRouterOptions): ISparkyRouter {
        if(!options) options = { type: "hash" };
        let locationString = "";
        if(options.type == "hash") {
            locationString = location.hash.slice(2, location.hash.length);
        } else if (options.type == "browser") {
            locationString = location.pathname;
        }
        const routeState = getStateByHash(stateRoute, locationString);
        routeState.hash = locationString;
        let params = []
        if(routeState.exact)
            params = getParamsByPath(routeState.path, locationString);
        return { type: "SparkyRouter", component: routeState.component, routing: stateRoute, history: [routeState], params, options };
    }

    /**
     * Mount a Sparky Component in the DOM Tree and keep it updated.
     * @param component Sparky Component
     * @param dom The dom element where you want to mount this component
     */
    static mount(element: ISparkyComponent | ISparkyRouter, dom: HTMLElementSparkyEnhanced): ISparkySelf {
        const processEnvNode = createProcessIfNotExist();
        if (processEnvNode === 'development')
            console.time();
        
        const component = ((element.type == "SparkyComponent") ? element : (element as ISparkyRouter).component) as ISparkyComponent 

        initialiseDOM(dom, element);

        const { context, renderFn } = component;

        const keepIndexes = cloneDeep(component.currentContext.indexes);

        context.__rootElement = dom; 
        SparkyContext.setCurrentContext(context);
        SparkyContext.resetIndexes();

        const render = renderFn(Object.freeze(context.props)) as IRenderReturn;

        const oldDom = dom.__sparkyRoot.updateAt ? (dom.firstElementChild as HTMLElementSparkyEnhanced) : null;
        let nextDOM = renderToDOMNode(render.html);

        nextDOM = SparkyComponent.populate(nextDOM, render, component);


        let finalDOM = reconciliate(oldDom, nextDOM);
        if (!finalDOM) return;
        if (!finalDOM.isConnected && dom)
            dom.appendChild(finalDOM);

        dom.__sparkyRoot.updateAt = new Date().getTime();

        EventManager.listen(finalDOM);

        if (processEnvNode === 'development')
            console.timeEnd();

        if(typeof thisTest != "undefined" && thisTest.testing) {
            thisTest.__testUtilData = {
                root: dom,
                component,
                eventList: thisTestEvent
            };
        }
        
        return {...component.currentContext, indexes: keepIndexes};
    }

    /**
     * Create a Store to using it on components
     * @param newStore Object that will be Store
     * @param dispatcher Function that will run for changing programatically store object
     */
    static createStore<S>(newStore: S, dispatcher: (state: S, action: IDispatcherAction) => S): ISparkyStore<S> {
        return {
            type: "SparkyStore",
            store: newStore,
            dispatcher: (store, action) => { store.store = dispatcher(store.store, action) }
        };
    }

    /**
     * Reconciliate the current DOM with the new DOM Node
     * @internal
     * @param oldNode Node that need to be reconcile
     * @param newNode Node that have the new elements
     */
    static reconciliate(oldNode: HTMLElement, newNode: HTMLElement) {
        return reconciliate(oldNode, newNode)
    }
}

function createProcessIfNotExist() {
    if(typeof process !== "undefined" && process.env) {
        return process.env.NODE_ENV;
    };
    return "production";
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

/**
 * Returns routing functions for current mounted component
 */
export const router = Sparky__internal_history;

/**
 * Render the html string template to HTML elements
 * @param html Array of HTML String 
 * @param computedProps Computed Props used to pass Javascript into template
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function html(html: TemplateStringsArray | string, ...computedProps: any[]): IRenderReturn {
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

/**
 * @internal
 * @param computedProps 
 * @param i 
 * @param func 
 * @param htmlLine 
 * @param nestedComponents 
 * @param children 
 * @param renderId 
 */
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
        htmlLine += computedProps[i];
    }
    return htmlLine;
}

/**
 * @internal
 * @param dom 
 * @param element 
 */
function initialiseDOM(dom: HTMLElementSparkyEnhanced, element: ISparkyComponent | ISparkyRouter) {
    if (dom && !dom.__sparkyRoot) {
        setRootProperties(dom);
        if (element.type == "SparkyRouter") {
            const { history, routing, params, options } = element as ISparkyRouter;
            dom.__sparkyRoot = { ...dom.__sparkyRoot, history, 
                routing, params, 
                basename: options?.basename, 
                isRoutingEnabled: true,
                forceURLUpdate: options?.forceUrlUpdate,
                type: options?.type
            };
            if(dom.__sparkyRoot.type == "hash") {
                listeningHashChange(routing, (component) => {
                    Sparky.mount(component, dom);
                }, dom);                
            }
        }
    }
    ;
}

/**
 * @internal
 * @param dom 
 */
function setRootProperties(dom: HTMLElementSparkyEnhanced) {
    dom.__sparkyRoot = { 
        id: nanoid(12),
        isRoutingEnabled: false,
        basename: "",
        params: [],
        forceURLUpdate: false,
        type: "hash",
        historyIndex: 0,
        stateChanging: false,
        history: [],
        routing: [],
        updateAt: null
    };
}

/**
 * @internal
 * @param html 
 */
export function renderToDOMNode(html: string) {
    const div = document.createElement("div");
    div.innerHTML = html;
    if (div.children.length > 1) {
        throw new TypeError("Adjacent elements on the root level are forbidden.");
    }
    return div.firstElementChild as HTMLElement;
}
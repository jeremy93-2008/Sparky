import { IRenderReturn, ISparkyComponent } from "./sparky";

interface ICachedComponent {
    component: ISparkyComponent,
    dom: HTMLElement
}

export class SparkyComponent {
    static cachedComponent: ICachedComponent[][] = [];
    static populate(render: IRenderReturn, rootComponent: ISparkyComponent) {
        
        const renderQueue = [render];

        let depthHorizontal = 0;

        while (renderQueue.length > 0) {
            const currentRender = renderQueue.shift();
            if(!this.cachedComponent[depthHorizontal]) this.cachedComponent[depthHorizontal] = [];
            currentRender.children.forEach((currentChild, index) => {
                const cached = this.cachedComponent[depthHorizontal][index];
                const commentDom = this.findComment(render.dom, currentRender.renderId, index, currentChild.selfFn.name);
                if(cached) {
                    currentChild = cached.component;
                }
                const renderChild = currentChild.selfFn(currentChild.self, currentChild.self.props);
                if(!commentDom) return;
                commentDom.parentNode.replaceChild(renderChild.dom, commentDom);
                currentChild.self.__root = rootComponent;
                render.func.push(...renderChild.func);
                renderQueue.push(renderChild);

                this.cachedComponent[depthHorizontal].push({
                    component: currentChild,
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

            domQueue.push(...Array.from(elem.childNodes as NodeListOf<HTMLElement>));
        }
    }
}
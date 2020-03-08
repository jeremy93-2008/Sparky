import 'mdn-polyfills/String.prototype.startsWith';
interface IEventReturn {
    dom: HTMLElement;
    attr: Attr;
}
export declare function findEvent(element: HTMLElement, renderId: string, index: number): IEventReturn;
export {};

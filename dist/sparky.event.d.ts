import 'mdn-polyfills/String.prototype.startsWith';
import { HTMLElementSparkyEnhanced } from './sparky.component';
interface IEventReturn {
    dom: HTMLElementSparkyEnhanced;
    attr: Attr;
}
export declare function findEvent(element: HTMLElement, renderId: string, index: number): IEventReturn;
export {};

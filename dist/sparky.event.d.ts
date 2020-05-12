import { HTMLElementSparkyEnhanced } from './sparky.component';
/**
 * @internal
 */
interface IEventReturn {
    dom: HTMLElementSparkyEnhanced;
    attr: Attr;
}
/**
 * @internal
 */
export declare function findEvent(element: HTMLElement, renderId: string, index: number): IEventReturn;
export {};

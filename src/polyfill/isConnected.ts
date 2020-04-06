/*
 * Node.isConnected polyfill for IE and EdgeHTML
 * 2020-02-04
 *
 * By Eli Grey, https://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */
declare var thisTest;
export function isConnectedPolyfill() {
    if (!('isConnected' in Node.prototype) || (typeof (window as any).test != "undefined")) {
        Object.defineProperty(Node.prototype, 'isConnected', {
        get() {
            return (
            !this.ownerDocument ||
            !(
                this.ownerDocument.compareDocumentPosition(this) &
                this.DOCUMENT_POSITION_DISCONNECTED
            )
            );
        },
        });
    }    
}

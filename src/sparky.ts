export class Sparky {
    static component(func: () => Node) {
        return func();
    }

    static mount(component) {

    }
}

export function render(html: string) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div;
}
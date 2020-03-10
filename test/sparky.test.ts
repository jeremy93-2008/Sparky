const lib = require("../src/sparky");
const Sparky = lib.Sparky;

describe("Diff method", () => {
    test("Nothing to render", () => {
        const diff = Sparky.reconciliate(null, null);
        expect(diff).toBe(null);
    });
    test("Only oldNode provided", () => {
        const diff = Sparky.reconciliate(lib.render(`<div>Hola a todos</div>`).dom, null);
        expect(diff).toBe(null);
    });

    test("Only newNode provided", () => {
        const currentDom = lib.render(`<div>Hola a todos</div>`).dom;
        const diff = Sparky.reconciliate(null, currentDom);
        expect(diff).toBe(currentDom);

        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos</div>`).dom.innerHTML);
    });

    test("If same nodes are provided the result must be the same", () => {
        const currentDom = lib.render(`<div>Hola a todos</div>`).dom;
        const diff = Sparky.reconciliate(currentDom, lib.render(`<div>Hola a todos</div>`).dom);

        expect(diff).toBe(currentDom);
        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos</div>`).dom.innerHTML);
    });

    test("Add a new node by diff", () => {
        const currentDom = lib.render(`<div>Hola a todos</div>`).dom;
        const diff = Sparky.reconciliate(currentDom, lib.render(`<div>Hola a todos <span>Jeremy</span></div>`).dom);

        expect(diff).toBe(currentDom);
        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos <span>Jeremy</span></div>`).dom.innerHTML);
    });

    test("Replace a existing node by diff", () => {
        const currentDom = lib.render(`<div>Hola a todos <b>Before</b></div>`).dom;
        const diff = Sparky.reconciliate(currentDom, lib.render(`<div>Hola a todos <em>After</em></div>`).dom);

        expect(diff).toBe(currentDom);
        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos <em>After</em></div>`).dom.innerHTML);
    });

    test("Adding a new nodes as a list by diff", () => {
        const currentDom = lib.render(`<div>Hola a todos <ul></ul></div>`).dom;
        const diff = Sparky.reconciliate(currentDom, lib.render(`<div>Hola a todos <ul>
            <li>Hola</li>
            <li>Adios</li>
            <li>Buenas</li>
        </ul></div>`).dom);

        expect(diff).toBe(currentDom);
        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos <ul>
            <li>Hola</li>
            <li>Adios</li>
            <li>Buenas</li>
        </ul></div>`).dom.innerHTML);
    });

    test("Add new attributes to an element", () => {
        const currentDom = lib.render(`<div>Hola a todos <b>Before</b></div>`).dom;
        const diff = Sparky.reconciliate(currentDom, lib.render(`<div>Hola a todos <b class='selected'>After</b></div>`).dom);

        expect(diff).toBe(currentDom);
        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos <b class='selected'>After</b></div>`).dom.innerHTML);
    });

    test("Add more attributes to an element", () => {
        const currentDom = lib.render(`<div>Hola a todos <b class='selected'>Before</b></div>`).dom;
        const diff = Sparky.reconciliate(currentDom, lib.render(`<div>Hola a todos <b id='uno' class='selected more'>After</b></div>`).dom);

        expect(diff).toBe(currentDom);
        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos <b class='selected more' id='uno'>After</b></div>`).dom.innerHTML);
    });

    test("Add less attributes to an element", () => {
        const currentDom = lib.render(`<div>Hola a todos <b id='uno' class='selected more'>Before</b></div>`).dom;
        const diff = Sparky.reconciliate(currentDom, lib.render(`<div>Hola a todos <b class='selected'>After</b></div>`).dom);

        expect(diff).toBe(currentDom);
        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos <b class='selected'>After</b></div>`).dom.innerHTML);
    });

    test("Change attributes to an element", () => {
        const currentDom = lib.render(`<div>Hola a todos <b class='selected more'>Before</b></div>`).dom;
        const diff = Sparky.reconciliate(currentDom, lib.render(`<div>Hola a todos <b class='selected'>After</b></div>`).dom);

        expect(diff).toBe(currentDom);
        expect(diff.innerHTML).toBe(lib.render(`<div>Hola a todos <b class='selected'>After</b></div>`).dom.innerHTML);
    });
})

describe("Mount function", () => {
    test("Basic function", () => {
        Sparky.mount(Sparky.component(() => {
            return lib.render /*html*/`
            <div>
                <p>Hola a todos</p>
            </div>
            `
        }), document.body);
        expect(document.body).toMatchSnapshot()
    });
    test("Computed function", () => {
        Sparky.mount(Sparky.component(() => {
            const a = 24;
            return lib.render /*html*/`
            <div>
                <p>Hola a todos ${a}</p>
            </div>
            `
        }), document.body);
        // console.log(document.body.innerHTML)
        expect(document.body).toMatchSnapshot()
    });
    test("Computed w/ State function", () => {
        Sparky.mount(Sparky.component((self) => {
            const a = self.getState("boton");
            return lib.render /*html*/`
            <div>
                <p>Hola a todos ${a}</p>
            </div>
            `
        }), document.body);
        // console.log(document.body.innerHTML)
        expect(document.body).toMatchSnapshot()
    });
})
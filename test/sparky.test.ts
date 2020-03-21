import { renderToDOMNode, state, memoize, update, render, Sparky } from "../src/sparky";
import { SparkyTest } from "../src/sparky.test-util";
import { EventManager } from "../src/sparky.eventmanager";

const lib = require("../src/sparky");

describe("Diff method", () => {
    test("Nothing to render", () => {
        const diff = Sparky.reconciliate(null, null);
        expect(diff).toBe(null);
    });
    test("Only oldNode provided", () => {
        const diff = Sparky.reconciliate(renderToDOMNode(render(`<div>Hola a todos</div>`).html), null);
        expect(diff).toBe(null);
    });

    test("Only newNode provided", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos</div>`).html);
        const diff = Sparky.reconciliate(null, currentDom);
        expect(diff).toBe(currentDom);

        expect(diff.outerHTML).toBe(render(`<div>Hola a todos</div>`).html);
    });

    test("If same nodes are provided the result must be the same", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos</div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(render(`<div>Hola a todos</div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos</div>`).html);
    });

    test("Add a new node by diff", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos</div>`).html);
        const diff = Sparky.reconciliate(currentDom,
            renderToDOMNode(render(`<div>Hola a todos <span>Jeremy</span></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos <span>Jeremy</span></div>`).html);
    });

    test("Remove a node by diff", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos <span>Pablo</span><span>Jeremy</span></div>`).html);
        const diff = Sparky.reconciliate(currentDom,
            renderToDOMNode(render(`<div>Hola a todos <span>Jeremy</span></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos <span>Jeremy</span></div>`).html);
    });

    test("Replace a existing node by diff", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos <b>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(render(`<div>Hola a todos <em>After</em></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos <em>After</em></div>`).html);
    });

    test("Adding a new nodes as a list by diff", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos <ul></ul></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(render(`<div>Hola a todos <ul>
            <li>Hola</li>
            <li>Adios</li>
            <li>Buenas</li>
        </ul></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos <ul>
            <li>Hola</li>
            <li>Adios</li>
            <li>Buenas</li>
        </ul></div>`).html);
    });

    test("Add new attributes to an element", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos <b>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(render(`<div>Hola a todos <b class='selected'>After</b></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos <b class=\"selected\">After</b></div>`).html);
    });

    test("Add more attributes to an element", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos <b contenteditable='true' class='selected'>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(render(`<div>Hola a todos <b id='uno' class='selected more'>After</b></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos <b class=\"selected more\" id=\"uno\">After</b></div>`).html);
    });

    test("Add less attributes to an element", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos <b id='uno' class='selected more'>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(render(`<div>Hola a todos <b class='selected'>After</b></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos <b class=\"selected\">After</b></div>`).html);
    });

    test("Change attributes to an element", () => {
        const currentDom = renderToDOMNode(render(`<div>Hola a todos <b class='selected more'>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(render(`<div>Hola a todos <b class='selected'>After</b></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(render(`<div>Hola a todos <b class=\"selected\">After</b></div>`).html);
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
            return render /*html*/`
            <div>
                <p>Hola a todos ${a}</p>
            </div>
            `
        }), document.body);
        // console.log(document.body.innerHTML)
        expect(document.body).toMatchSnapshot()
    });
    test("Computed w/ State function", () => {
        Sparky.mount(Sparky.component(() => {
            const [a, setA] = state("uno");
            return render /*html*/`
            <div>
                <p>Hola a todos ${a}</p>
            </div>
            `
        }), document.body);
        // console.log(document.body.innerHTML)
        expect(document.body).toMatchSnapshot()
    });
    test("Computed, State w/ Event function", () => {
        const test = SparkyTest.test(() => {
            Sparky.mount(Sparky.component(() => {
                const [a, setA] = state("uno");
                const onClick = () => {
                    setA("10");
                }
                return render /*html*/`
                <div>
                    <p id="unique" onclick=${onClick}>Hola a todos ${a}</p>
                </div>
                `
            }), document.body);
        });
        test.selector("#unique").simulate("click");
        // console.log(document.body.innerHTML)
        expect(document.body).toMatchSnapshot()
    });
    test("Computed, State, Memo w/ Event and Click function", () => {

        const Span = () => {
            const [a, setA] = state("uno");

            const onClick = () => {
                setA("100")
            }

            return render /*html*/`
            <div>
                <p id="paragraph-1" onclick=${onClick}>Hola a todos ${a}</p>
            </div>
            `
        };

        const test = SparkyTest.test(() => {
            Sparky.mount(Sparky.component(() => {
                const [a, setA] = state("hola mundo");

                memoize(() => {
                    console.log("Memo!")
                }, [a]);

                update(() => {
                    console.log("Update!")
                })

                const onClick = () => {
                    setA("10")
                }

                return render /*html*/`
            <div>
                <p id="paragraph" onclick=${onClick}>Hola a todos ${a}</p>
                <div>${Sparky.component(Span)}</div>
            </div>
            `
            }), document.body);
        });

        test.selector("#paragraph").simulate("click");
        test.selector("#paragraph-1").simulate("click");
        // console.log(document.body.innerHTML)
        expect(document.body).toMatchSnapshot()
    });

    test("Computed, State w/ Event function with Render inside", () => {
        const test = SparkyTest.test(() => {
            Sparky.mount(Sparky.component(() => {
                const [a, setA] = state("uno");
                const onClick = () => {
                    setA("10");
                }
                update(() => {
                    console.log("Update!")
                }, [a, "Jeremy"])
                return render /*html*/`
                <div>
                    <p id="unique" onclick=${onClick}>Hola a todos ${a}</p>
                    <div>${a == "10" ? render `<div>Hola</div>` : "No hay nada"}</div>
                    <div>${Sparky.component(() => {
                        return render `<div>Esto es un componente</div>`;
                    })}</div>
                </div>
                `
            }), document.body);
        });
        test.selector("#unique").simulate("click");
        // console.log(document.body.innerHTML)
        expect(document.body).toMatchSnapshot()
    });
})
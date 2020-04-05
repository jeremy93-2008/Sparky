import { renderToDOMNode, state, memoize, update, html, Sparky, router } from "../src/sparky";
import { SparkyTest } from "../src/sparky.test-util";
import { eventListSingle } from "../src/sparky.eventmanager";

const lib = require("../src/sparky");

document.body.innerHTML = `
    <div id="app"></div>
    <div id="app2"></div>
    <div id="app3"></div>
`;

describe("Diff method", () => {
    test("Nothing to render", () => {
        const diff = Sparky.reconciliate(null, null);
        expect(diff).toBe(null);
    });
    test("Only oldNode provided", () => {
        const diff = Sparky.reconciliate(renderToDOMNode(html(`<div>Hola a todos</div>`).html), null);
        expect(diff).toBe(null);
    });

    test("Only newNode provided", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos</div>`).html);
        const diff = Sparky.reconciliate(null, currentDom);
        expect(diff).toBe(currentDom);

        expect(diff.outerHTML).toBe(html(`<div>Hola a todos</div>`).html);
    });

    test("If same nodes are provided the result must be the same", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos</div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(html(`<div>Hola a todos</div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos</div>`).html);
    });

    test("Add a new node by diff", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos</div>`).html);
        const diff = Sparky.reconciliate(currentDom,
            renderToDOMNode(html(`<div>Hola a todos <span>Jeremy</span></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos <span>Jeremy</span></div>`).html);
    });

    test("Remove a node by diff", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos <span>Pablo</span><span>Jeremy</span></div>`).html);
        const diff = Sparky.reconciliate(currentDom,
            renderToDOMNode(html(`<div>Hola a todos <span>Jeremy</span></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos <span>Jeremy</span></div>`).html);
    });

    test("Replace a existing node by diff", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos <b>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(html(`<div>Hola a todos <em>After</em></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos <em>After</em></div>`).html);
    });

    test("Adding a new nodes as a list by diff", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos <ul></ul></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(html(`<div>Hola a todos <ul>
            <li>Hola</li>
            <li>Adios</li>
            <li>Buenas</li>
        </ul></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos <ul>
            <li>Hola</li>
            <li>Adios</li>
            <li>Buenas</li>
        </ul></div>`).html);
    });

    test("Add new attributes to an element", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos <b>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(html(`<div>Hola a todos <b class='selected'>After</b></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos <b class=\"selected\">After</b></div>`).html);
    });

    test("Add more attributes to an element", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos <b contenteditable='true' class='selected'>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(html(`<div>Hola a todos <b id='uno' class='selected more'>After</b></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos <b class=\"selected more\" id=\"uno\">After</b></div>`).html);
    });

    test("Add less attributes to an element", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos <b id='uno' class='selected more'>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(html(`<div>Hola a todos <b class='selected'>After</b></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos <b class=\"selected\">After</b></div>`).html);
    });

    test("Change attributes to an element", () => {
        const currentDom = renderToDOMNode(html(`<div>Hola a todos <b class='selected more'>Before</b></div>`).html);
        const diff = Sparky.reconciliate(currentDom, renderToDOMNode(html(`<div>Hola a todos <b class='selected'>After</b></div>`).html));

        expect(diff).toBe(currentDom);
        expect(diff.outerHTML).toBe(html(`<div>Hola a todos <b class=\"selected\">After</b></div>`).html);
    });
})

describe("Mount function", () => {
    test("Basic function", () => {
        Sparky.mount(Sparky.component(() => {
            return html /*html*/`
            <div>
                <p>Hola a todos</p>
            </div>
            `
        }), document.getElementById("app"));
        expect(document.getElementById("app")).toMatchSnapshot()
    });
    test("Computed function", () => {
        Sparky.mount(Sparky.component(() => {
            const a = 24;
            return html /*html*/`
            <div>
                <p>Hola a todos ${a}</p>
            </div>
            `
        }), document.getElementById("app"));
        // console.log(document.getElementById("app").innerHTML)
        expect(document.getElementById("app")).toMatchSnapshot()
    });
    test("Computed w/ State function", () => {
        Sparky.mount(Sparky.component(() => {
            const [a, setA] = state("uno");
            return html /*html*/`
            <div>
                <p>Hola a todos ${a}</p>
            </div>
            `
        }), document.getElementById("app"));
        // console.log(document.getElementById("app").innerHTML)
        expect(document.getElementById("app")).toMatchSnapshot()
    });
    test("Computed, State w/ Event function", () => {
        const test = SparkyTest.test(() => {
            Sparky.mount(Sparky.component(() => {
                const [a, setA] = state("uno");
                const onClick = () => {
                    setA("10");
                }
                return html /*html*/`
                <div>
                    <p id="unique" onclick=${onClick}>Hola a todos ${a}</p>
                </div>
                `
            }), document.getElementById("app"));
        });
        test.selector("#unique").simulate("click");
        // console.log(document.getElementById("app").innerHTML)
        expect(document.getElementById("app")).toMatchSnapshot()
    });
    test("Computed, State, Memo w/ Event and Click function", () => {

        const Span = () => {
            const [a, setA] = state("uno");

            const onClick = () => {
                setA("100")
            }

            return html /*html*/`
            <div>
                <p id="paragraph-1" onclick=${onClick}>Hola a todos ${a}</p>
            </div>
            `
        };

        const test = SparkyTest.test(() => {
            Sparky.mount(Sparky.component(() => {
                const [a, setA] = state("hola mundo");
                const [b, setB] = state("50");

                memoize(() => {
                    console.log("Memo!")
                }, a == "10" ? [a] : [a, b]);

                update(() => {
                    console.log("Update!")
                })

                const onClick = () => {
                    setA("10")
                }

                return html /*html*/`
            <div>
                <p id="paragraph" onclick=${onClick}>Hola a todos ${a}</p>
                <div>${Sparky.component(Span)}</div>
            </div>
            `
            }), document.getElementById("app"));
        });

        test.selector("#paragraph").simulate("click");
        test.selector("#paragraph-1").simulate("click");
        // console.log(document.getElementById("app").innerHTML)
        expect(document.getElementById("app")).toMatchSnapshot()
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
                return html /*html*/`
                <div>
                    <p id="unique" onclick=${onClick}>Hola a todos ${a}</p>
                    <div>${a == "10" ? html `<div>Hola</div>` : "No hay nada"}</div>
                    <div>${Sparky.component(() => {
                        return html `<div>Esto es un componente</div>`;
                    })}</div>
                </div>
                `
            }), document.getElementById("app"));
        });
        test.selector("#unique").simulate("click");
        // console.log(document.getElementById("app").innerHTML)
        expect(document.getElementById("app")).toMatchSnapshot()
    });
    test("Routing Functionality with Hash History", () => {
        const component = Sparky.component(() => {
            const { goToState, goBack, goAfter} = router();
            const clickState = () => {
                goBack();
                goAfter();
                goToState("tres")
            };
            const back = () => {
                goBack();
            };
            return html `<div> <span id="unique1" onclick=${clickState}>GoTo</span> <span id="unique-back" onclick=${back}>Everyone</span></div>`;
        });
        const regexpComponent = Sparky.component(() => {
            const { goToState, goAfter} = router();
            const click = () => {
                goToState("dos")
            }
            const forward = () => {
                goAfter();
            }
            const clickPrimero = () => {
                goToState("");
            };
            return html `<div><span id="unique-state" onclick=${click}>Hola </span> 
            <span id="unique2" onclick=${clickPrimero}>mundo</span> 
            <span id="unique-forward" onclick=${forward}>lol</span></div>`;
        })
        const goToComponent = Sparky.component(() => {
            const { goBack } = router();
            const clickUno = () => {
                goBack();
            }
            return html `<div> <span id="unique-backen" onclick=${clickUno}>GoTo</span> Mundo</div>`;
        });
        const test = SparkyTest.test(() => 
        {
            Sparky.mount(Sparky.router([
                {
                    path: "dos",
                    component: goToComponent
                },
                {
                    path: "tres",
                    component: regexpComponent
                },
                {
                    path: "",
                    component
                }
            ]), document.getElementById("app2"))
        });
        test.selector("#unique1").simulate("click");
        test.selector("#unique-state").simulate("click");
        test.selector("#unique-backen").simulate("click");
        test.selector("#unique2").simulate("click");
        test.selector("#unique-back").simulate("click");
        test.selector("#unique-forward").simulate("click");
        expect(document.getElementById("app2")).toMatchSnapshot()
    });
    // Browser Routing are not supported by Jest bu we need to insert it to not lose percentage on the stats
    test("Routing Functionality with Browser History", () => {
        const component = Sparky.component(() => {
            const { goToState, goBack, goAfter} = router();
            const clickState = () => {
                goBack();
                goAfter();
                goToState("tres")
            };
            const back = () => {
                goBack();
            };
            return html `<div> <span id="unique1" onclick=${clickState}>GoTo</span> <span id="unique-back" onclick=${back}>Everyone</span></div>`;
        });
        const regexpComponent = Sparky.component(() => {
            const { goToState, goAfter, getParams, cleanHistory} = router();
            console.log(getParams())
            const click = () => {
                goToState("dos")
            }
            const forward = () => {
                goAfter();
                cleanHistory();
            }
            const clickPrimero = () => {
                goToState("");
            };
            return html `<div><span id="unique-state" onclick=${click}>Hola </span> 
            <span id="unique2" onclick=${clickPrimero}>mundo</span> 
            <span id="unique-forward" onclick=${forward}>lol</span></div>`;
        })
        const goToComponent = Sparky.component(() => {
            const { goBack } = router();
            const clickUno = () => {
                goBack();
            }
            return html `<div> <span id="unique-backen" onclick=${clickUno}>GoTo</span> Mundo</div>`;
        });
        const test = SparkyTest.test(() => 
        {
            Sparky.mount(Sparky.router([
                {
                    path: "dos/:id",
                    component: goToComponent
                },
                {
                    path: "tres/:uno/*path",
                    component: regexpComponent
                },
                {
                    path: "",
                    component
                }
            ], {type: "browser"}), document.getElementById("app3"))
        });
        test.selector("#unique1").simulate("click");
        test.selector("#unique-state").simulate("click");
        test.selector("#unique-backen").simulate("click");
        test.selector("#unique2").simulate("click");
        test.selector("#unique-back").simulate("click");
        test.selector("#unique-forward").simulate("click");
        expect(document.getElementById("app3")).toMatchSnapshot()
    });
})
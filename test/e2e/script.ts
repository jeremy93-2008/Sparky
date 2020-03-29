import { Sparky, html, memoize, state, update, router} from "../../src/sparky";

const routingState = [
    {
        path: "#lol",
        component: Sparky.component(Main, { name: "Hugo" })
    },
    {
        path: "#dos",
        component: Sparky.component(Span, { name: "Hugo" })
    }
];

Sparky.mount(Sparky.router(routingState), document.getElementById("app"))

interface IProps {
    name: string;
}

function Main(props: IProps) {
    const { goBack, goToState, goAfter} = router();
    const [name, setName] = state("Hugo");
    const [text, setText] = state(["The world"]); 
    const [input, setInput] = state("");

    memoize((du) => {
        console.log("Memo :) " + du);
    }, [name]);

    memoize((du) => {
        console.log("Memo 2 :) " + du);
    }, [text]);

    update(() => {
        console.log("after dom render");
        console.log(document.getElementById("uno").innerHTML);
    }, [])

    const route = () => {
        goToState("#dos")
    }

    const back = () => {
        goBack()
    }

    const after = () => {
        goAfter()
    }

    const onClick = (event) => {
        setName("Jeremy");
        setText(["Hola","Buenas","Adios"]);
    }

    const onInput = (event: Event) => {
        setInput((event.target as HTMLInputElement).value)
    }

    return html`
        <div id="uno" class="lol">
            Hola a todos ${ name !== "Hugo" ? html`<b onclick=${onClick}>${name}</b>` : `no hay nada`}
            <button onclick=${onClick}>Hey!</button>
            <div>
                <div>${Sparky.component(Span, {name})}</div>
            </div>
            ${Sparky.component(SpanNest)}
            <input id="text" type="text" oninput=${onInput} />
            <a onclick=${route}>A Dos</a>
            <a onclick=${back}>A Back</a>
            <a onclick=${after}>A After</a>
            <span>${input}</span>
            <ul>
                ${text.map(t => `<li>${t}</li>`)}
            </ul>
        </div>
    `;    
}

function SpanNest(props: IProps) {
    const [ver, setVer] = state("Esto son state nuevos")
    const doIt = () => {
        setVer("Uno para ti");
    }
    return html`
        <div>
            <span ondblclick=${doIt}>Hazlo 2</span>
            <span>
                <span>${ver}</span>    
            </span>
            ${Sparky.component(Span)}
            <div style="border: solid 1px blue">
                ${Sparky.component(Span)}
            </div>
        </div>
    `
}

function Span(props: IProps) {
    const { goBack, goToState } = router();
    const name = props ? props.name : "Esto no es una prop";
    const [ver, setVer] = state(new Date().toLocaleString());
    const click = () => {
        setVer(new Date().toLocaleString())
    }
    const route = () => {
        goToState("#lol");
    }
    const back = () => {
        goBack()
    }
    return html`
        <div>
            <span ondblclick=${click}>Hazlo</span>
            <a onclick=${route}>A Main</a>
            <a onclick=${back}>A Back</a>
            <span>
                <span>Un nuevo Mundo ${name}</span>
                ${ver}
            </span>
        </div>
    `
}


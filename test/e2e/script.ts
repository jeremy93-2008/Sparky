import { Sparky, html, memoize, state, update, router} from "../../src/sparky";

const routingState = [
    {
        path: "lol/:id",
        component: Sparky.component(Main, { name: "Hugo" })
    },
    {
        path: "dos/tres/:uno/*hola",
        component: Sparky.component(Span, { name: "Hugo" })
    }
];

Sparky.mount(Sparky.router(routingState, {type: "hash"}), document.getElementById("app"))

interface IProps {
    name: string;
}

function Main(props: IProps) {
    const [list, setList] = state([]);
    
    const onClick= () => {
        setList((prevState) => [...prevState, new Date().toLocaleString()]);
    }

    return html`
        <div>
            <button onclick=${onClick}>Hola</button>
            <ul>
                ${list.map(item => `<li>${item}</li>`)}
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
        goToState("lol/14");
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


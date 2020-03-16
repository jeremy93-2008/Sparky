import { Sparky, render } from "../../src/sparky";
import { memoize, update, state } from "../../src/sparky.function";

Sparky.mount(Sparky.component(Main, { name: "Hugo"}), document.getElementById("app"))

interface IProps {
    name: string;
}

function Main(props: IProps) {
    const [name, setName] = state("Hugo");
    const [text, setText] = state(["The world"]); 

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

    const onClick = (event) => {
        setName("Jeremy");
        setText(["Hola","Buenas","Adios"]);
    }

    return render /*html*/`
        <div id="uno" class="lol">
            Hola a todos ${ name !== "Hugo" ? render `<b onclick=${onClick}>${name}</b>` : `no hay nada`}
            <button onclick=${onClick}>Hey!</button>
            <div>
                <div>${Sparky.component(Span, {name})}</div>
            </div>
            ${Sparky.component(SpanNest)}
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
    return render/*html*/`
        <div>
            <span ondblclick=${doIt}>Hazlo 2</span>
            <span>
                <span>${ver}</span>    
            </span>
            ${Sparky.component(Span)}
        </div>
    `
}

function Span(props: IProps) {
    const name = props ? props.name : "Esto no es una prop";
    const [ver, setVer] = state(new Date().toLocaleString());
    const click = () => {
        setVer(new Date().toLocaleString())
    }
    return render/*html*/`
        <div>
            <span ondblclick=${click}>Hazlo</span>
            <span>
                <span>Un nuevo Mundo ${name}</span>
                ${ver}
            </span>
        </div>
    `
}


import { Sparky, render } from "../../src/sparky";
import { getState, memoize, onUpdate, setState } from "../../src/sparky.function";

Sparky.mount(Sparky.component(Main, { name: "Hugo"}), document.getElementById("app"))

interface IProps {
    name: string;
}

function Main(props: IProps) {

    const a = (<string>getState("boton")) || props.name; 
    const text = (<string[]>getState("texto")) || ["The world"]; 

    memoize((du) => {
        console.log("Memo :) " + du);
    }, [a]);

    memoize((du) => {
        console.log("Memo 2 :) " + du);
    }, [text]);

    onUpdate(() => {
        console.log("after dom render");
        console.log(document.getElementById("uno").innerHTML);
    }, [])

    const onClick = (event) => {
        setState({ boton: "Jeremy", texto: ["Hola","Buenas","Adios"] });
    }

    return render /*html*/`
        <div id="uno" class="lol">
            Hola a todos ${ a !== "Hugo" ? render `<b onclick=${onClick}>${a}</b>` : `no hay nada`}
            <button onclick=${onClick}>Hey!</button>
            <div>
                <div>${Sparky.component(Span, {name: a})}</div>
            </div>
            ${Sparky.component(SpanNest)}
            <ul>
                ${text.map(t => `<li>${t}</li>`)}
            </ul>
        </div>
    `;    
}

function SpanNest(props: IProps) {
    const ver = (<string>getState("ver"))
    const doIt = () => {
        setState({ver: "Uno para ti"})
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
    const ver = (<string>getState("ver"))
    const click = () => {
        setState({ver: new Date().toISOString()})
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


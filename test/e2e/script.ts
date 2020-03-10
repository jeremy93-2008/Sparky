import { Sparky, render } from "../../src/sparky";
import { SparkyFunction } from "../../src/sparky.function";

Sparky.mount(Sparky.component(Main, { name: "Hugo"}), document.getElementById("app"))

interface IProps {
    name: string;
}

function Main(self: SparkyFunction, props: IProps) {

    const a = (<string>self.getState("boton")) || props.name; 
    const text = (<string[]>self.getState("texto")) || ["The world"]; 

    self.memo((du) => {
        console.log("Memo :) " + du);
    }, [a]);

    self.onUpdate(() => {
        console.log("after dom render");
        console.log(document.getElementById("uno").innerHTML);
    }, [])

    const onClick = () => {
        self.setState({ boton: "Jeremy", texto: ["Hola","Buenas","Adios"] });
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

function SpanNest(self: SparkyFunction, props: IProps) {
    const ver = (<string>self.getState("ver"))
    const doIt = () => {
        self.setState({ver: "Uno para ti"})
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

function Span(self: SparkyFunction, props: IProps) {
    const name = props ? props.name : "Esto no es una prop";
    const ver = (<string>self.getState("ver"))
    const click = () => {
        self.setState({ver: new Date().toISOString()})
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


import { Sparky, render } from "../../src/sparky";
import { SparkyFunction } from "../../src/sparky.function";

Sparky.mount(Sparky.component(Main, { name: "Pablo"}), document.getElementById("app"))

interface IProps {
    name: string;
}

function Main(self: SparkyFunction, props: IProps) {
    self.initialState({boton: props.name, texto: "The world"})

    const a = (<string>self.getState("boton")); 
    const text = (<string>self.getState("texto")); 

    self.onUpdate(() => {
        console.log("after dom render");
        console.log(document.getElementById("uno").innerHTML);
    }, [])

    const onClick = () => {
        self.setState({ boton: "Jeremy" });
    }

    return render /*html*/`
        <div id="uno" class="lol">
            Hola a todos ${ a ? render `<b onclick=${onClick}>${a}</b>` : `no hay nada`}
            <button onclick=${onClick}>Hey!</button>
            <div>
                <div>${Sparky.component(Span, {name: "Hola"})}</div>
            </div>
            ${Sparky.component(SpanNest, {name: "Hola"})}
            ${text}
        </div>
    `;    
}

function SpanNest(self: SparkyFunction, props: IProps) {
    console.log(props)
    const ver = (<string>self.getState("ver"))
    const doIt = () => {
        self.setState({ver: "Hola mundo nested"})
    }
    return render/*html*/`
        <div>
            <span ondblclick=${doIt}>Hazlo</span>
            <span>
                <span>${ver}</span>    
            </span>
            ${Sparky.component(Span)}
        </div>
    `
}

function Span(self: SparkyFunction, props: IProps) {
    console.log(props)
    const ver = (<string>self.getState("ver"))
    const doIt = () => {
        self.setState({ver: "Hola mundo nested"})
    }
    return render/*html*/`
        <div>
            <span ondblclick=${doIt}>Hazlo</span>
            <span>
                <span>Un nuevo Mundo </span>
                ${ver}
            </span>
        </div>
    `
}


import { Sparky, render } from "../../src/sparky";
import { SparkyFunction } from "../../src/sparky.function";

const SpanComponent = Sparky.component(Span);

Sparky.mount(Sparky.component(Main), document.getElementById("app"))

function Main(self: SparkyFunction) {
    self.initialState({boton: "Hugo", texto: "The world"})

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
            ${SpanComponent}
            ${text}
        </div>
    `;    
}

function Span(self: SparkyFunction) {
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


import { Sparky, render } from "../../src/sparky";
import { SparkyFunction } from "../../src/sparky.function";

Sparky.mount(Sparky.component(Main), document.getElementById("app"))

function Main(self: SparkyFunction) {
    const a = (<string>self.getState("boton")); 
    const text = (<string>self.getState("texto")); 

    self.onUpdate(() => {
        console.log("after dom render");
        console.log(document.getElementById("uno").innerHTML);
    }, [])

    const onClick = () => {
        self.setState({boton: "Jeremy"});
    }

    return render /*html*/`
        <div id="uno" class="lol">
            Hola a todos ${ a ? `<b>${a}</b>` : `no hay nada`} 
            <button onclick=${onClick}>Hey!</button>
            ${text}
        </div>
    `;    
}


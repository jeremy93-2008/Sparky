import { Sparky, render } from "../../src/sparky";
import { SparkyFunction } from "../../src/sparky.function";

Sparky.mount(Sparky.component(Main), document.getElementById("app"))

function Main(self: SparkyFunction) {
    const a = self.getState().boton; 
    self.onUpdate(() => {
        console.log("after dom render")
        console.log(document.getElementById("uno").innerHTML)
    }, [])
    return render /*html*/`
        <div id="uno" onclick=${() => { 
            self.setState({boton: "Jeremy"}); 
        }}>Hola a todos <b>${a}</b></div>
    `;    
}
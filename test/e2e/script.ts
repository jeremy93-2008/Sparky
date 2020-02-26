import { Sparky, render } from "../../src/sparky";
import { SparkyFunction } from "../../src/sparky.function";

Sparky.mount(Sparky.component(Main), document.getElementById("app"))

function Main(self: SparkyFunction) {
    const a = self.getState().boton;
    return render(`<div onclick='${() => { 
        self.setState({boton: "Jeremy"}); 
    }}'>Hola a todos ${a}</div>`);    
}
import { Sparky, render } from "../../src/sparky";

Sparky.mount(Sparky.component(function() {
    const a = this.getState().boton;
    return render(`<div onclick=${() => { this.setState({boton: "Jeremy"}); }}>Hola a todos ${a}</div>`);
}), document.getElementById("app"))
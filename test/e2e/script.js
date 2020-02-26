import { Sparky, render } from "../../src/sparky";

Sparky.mount(Sparky.component(function() {
    const a = this.getState().boton;
    setTimeout(() => {
        this.setState({boton: "Jeremy"})
    }, 2000)
    return render(`<div onclick='${() => { this.setState({boton: "Jeremy"}); }}'>Hola a todos ${a}</div>`);
}), document.getElementById("app"))
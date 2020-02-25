import { Sparky, render } from "../../src/sparky";

Sparky.mount(Sparky.component(() => {
    return render("<div>Hola a todos</div>");
}), document.getElementById("app"))
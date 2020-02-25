const lib = require("../.dist/sparky");
const Sparky = lib.Sparky;

test("Render a component as expected",() => {
    const comp = Sparky.component(() => {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode("Hola mundo"))
        return div;
    });
    expect(comp).toBeTruthy();
})
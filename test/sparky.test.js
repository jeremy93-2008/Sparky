const lib = require("../.dist/sparky");
const Sparky = lib.Sparky;

test("Render a component as expected",() => {
    const comp = Sparky.component(() => {
        return lib.render("<div>Hola a todos</div>");
    });
    expect(comp).toBeTruthy();
})
# `Sparky`

Sparky is a library that help you to create dynamic UI using Javascript.

You can use it with **Typescript** (as it was think when it was developed) or you can use **plain Javascript** if you want too.

The idea behind this library was to create something like React but without the incovenience of it, like transpiling stuff, so to be able to achieve this goal we render HTML from JS with ES6 Template String.

**Note:** This library are not suitable for production yet, they are a lot of issue to fix and a lot of bug to discover and solve.

## Example Usage

```js
    import { Sparky, render } from "sparky-js";

    Sparky.mount(Sparky.component(Main), document.getElementById("app"));

    function Main() {
        return render `<span>Hola mundo</span>`;
    }
```

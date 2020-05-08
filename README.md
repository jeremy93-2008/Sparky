# `Sparky`
![Travis CI](https://travis-ci.org/jeremy93-2008/Sparky.svg?branch=master)
[![codecov](https://codecov.io/gh/jeremy93-2008/Sparky/branch/master/graph/badge.svg)](https://codecov.io/gh/jeremy93-2008/Sparky)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky?ref=badge_shield)

Sparky is a library that help you to create dynamic UI using Javascript.

You can use it with **Typescript** (as it was think when it was developed) or you can use **plain Javascript** if you want too.

The idea behind this library was to create something like React but without the incovenience of it, like transpiling stuff, so to be able to achieve this goal we render HTML from JS with ES6 Template String.

**Note:** This library are not suitable for production yet, they are a lot of issue to fix and a lot of bug to discover and solve.

## Example Usage

```js
    import { Sparky, render } from "sparky-js";

    Sparky.mount(Sparky.component(Main), document.getElementById("app"));

    function Main() {
        return render `<span>Hello World</span>`;
    }
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky?ref=badge_large)
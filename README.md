# `Sparky`
[![Travis CI](https://travis-ci.org/jeremy93-2008/Sparky.svg?branch=master)](https://travis-ci.org/github/jeremy93-2008/Sparky)
[![codecov](https://codecov.io/gh/jeremy93-2008/Sparky/branch/master/graph/badge.svg)](https://codecov.io/gh/jeremy93-2008/Sparky)
[![Badge](https://img.shields.io/badge/npm-v1.1.7-informational)](https://www.npmjs.com/package/sparky-js)
[![Badge](https://img.shields.io/badge/license-MPL-green)](https://github.com/jeremy93-2008/Sparky/blob/master/LICENSE)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky?ref=badge_shield)
![Badge](https://img.shields.io/badge/We_❤-Frontend-red)

Sparky is a library that help you to create dynamic UI using Javascript.

You can use it with **Typescript** (as it was think when it was developed) or you can use **plain Javascript** if you want too.

The idea behind this library was to create something like React but without some inconvenience of it, like transpiling stuff, so to be able to achieve this goal we render HTML from JS with ES6 Template String.

## Browser Compatibility
Sparky supports all browsers that are [ES5-compliant](http://kangax.github.io/compat-table/es5) (IE8 and below are not supported).
But will need polyfills for some odd and older browsers as Internet Explorer 9, 10 or 11. If you can choose your browser, please use Chrome or Opera 😁 

## Example Usage

```js
    import { Sparky, render } from "sparky-js";

    Sparky.mount(Sparky.component(Main), document.getElementById("app"));

    function Main() {
        return html `<span>Hello World</span>`;
    }
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky?ref=badge_large)

# `Sparky`
[![Travis CI](https://travis-ci.org/jeremy93-2008/Sparky.svg?branch=master)](https://travis-ci.org/github/jeremy93-2008/Sparky)
[![codecov](https://codecov.io/gh/jeremy93-2008/Sparky/branch/master/graph/badge.svg)](https://codecov.io/gh/jeremy93-2008/Sparky)
[![Badge](https://img.shields.io/badge/npm-v1.1.7-informational)](https://www.npmjs.com/package/sparky-js)
[![Badge](https://img.shields.io/badge/license-MPL-green)](https://github.com/jeremy93-2008/Sparky/blob/master/LICENSE)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fjeremy93-2008%2FSparky?ref=badge_shield)
![Badge](https://img.shields.io/badge/We_❤-Frontend-red)

Sparky is a library that help you to create dynamic UI using Javascript.

You can use it with **Typescript** (``Sparky`` is developed with it) or you can use **plain Javascript** if you want too.

The idea behind this library was to create something like React but without the inconvenience of it, like transpiling stuff, so to be able to achieve this goal we render HTML from JS with ES6 Template String.

### Browser Compatibility

Sparky supports all browsers that are [ES5-compliant](http://kangax.github.io/compat-table/es5) (IE8 and below are not supported).

But will need polyfills for some odd and older browsers as Internet Explorer 9, 10 or 11. If you can choose your browser, please use Chrome or Opera 😁 



## Basic Usage

```js
    import { Sparky, render } from "sparky-js";

    Sparky.mount(Sparky.component(Main), document.getElementById("app"));

    function Main() {
        return html `<span>Hello World</span>`;
    }
```



## Documentation

### Getting started

Sparky is a reactive library that help you to make modern UI. 

To begin to work with Sparky, you need to download the npm package or through the unpkg link above.

```bash
	npm install sparky-js
```

When the package is installed, you need to download a bundler as **Webpack** or **Parcel** to compile your source code. (Our recommendation is **Parcel**)

Finally when everything is installed we can begin to work with ``Sparky``.

### First Step

``Sparky`` is a library mainly inspired by React Hooks, so everything was created since the beginning to follow this philosophy.

That's mean we have a function (called **Renderer Function**) that will be called each time that a new update are needed by the UI, and will return from this function the correct html code to be rendered on the website.

In this Renderer function you will have access to a lot of different Sparky Lifecycle Functions, to create reactivity.

We begin with need to import the essential function from ``Sparky``.

```typescript
	import { Sparky, render } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
    	return html `<span>Hello World</span>`;
	}
```
Let's explain what's going on here, on the first lines we can see two specific function

* **Sparky.mount** - This function take a Sparky component as first argument and DOM Element as a second. Its goal is to render the component inside the DOM element, and keeping it hydrated with the last update.
* **Sparky.component** - This function take a **Renderer Function** as first argument, and create a Sparky component, and so generate the correct lifecycle for this **Renderer Function**.

Finally the **Renderer Function** itself, this method doesn't have nothing special apart from the return value. A renderer function called by a component always need to return a **rendered html** that mean calling the html function on the return statement of the renderer function, having as argument you html code.

Now that we understand the basic of ``Sparky``, we can continue further and add reactivity to our application.

### Basic State

In ``Sparky`` as on every UI library we need to update visually our application with new data, when there are available, for this purpose we have a concept called **State** that make us able to update a certain piece of data across the time, and update the UI accordingly.

To use it we need to import the state function and using it as follow.

```typescript
	import { Sparky, render, state } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
        const [text, setText] = state("World");
    	return html `<span>Hello ${text}</span>`;
	}
```

As you can see we add a couple of things there, if you're familiar with React the process of how state are created surely remember you the **useState** hooks, as we say before React was a huge inspiration for us when we decided the architecture of the library.

When you create a state, this one return two value on an array, the first one, is the current value of the state, and the second is the function to update this value. When you update the value the **whole renderer function** are called back entirely.

````nohighlight
Note: Don't call the update state function directly from renderer function. You'll create a infinite loop!
````

Normally we hook a state change with a user event, in our case we going to create a button that when we click on it, the state "World" will change by "John".

Take a look at the final code:

```typescript
	import { Sparky, render, state } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
        const [text, setText] = state("World");
        const changeState = () => {
            setText("Hello Sparky");
        };
    	return html `<div>
							Hello ${text} 
							<button onClick=${changeState}>Change State</button>
					  </div>`;
	}
```

On this code apart implementing state, we can see how we implement event on Sparky, we just create a new arrow function inside our **renderer function**, and we call it from our template string.

Now that we know how state work, we can explain in more details how events work.

````nohighlight
Note: We can also use state function with a store and dispatcher function or using a accumulative state function. See the Sparky Function's List for more information.
````



### Events

When you're creating a component in Sparky, you could need to create events to react to user needs. For that you can add different events hooks as HTML have.

All _events_ standard attributes are available in Sparky, internally we manage it by adding it on the document object and creating a Event delegation to make Sparky quicker.

The function that will be called by your html can be added everywhere, but if you going to use Sparky Function try to put it on the **Renderer Function**.

For more information about which events exist please refer to the MDN: https://developer.mozilla.org/en-US/docs/Web/Events

Take a look to this code:

```typescript
	import { Sparky, render, state } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
        const [text, setText] = state("World");
        const changeState = () => {
            setText("Hello Sparky");
        };
        const inputText = (evt) => {
            setText(evt.currentTarget.value);
        };
    	return html `<div>
							Hello ${text} 
							<button onClick=${changeState}>Change State</button>
							<input type="text" oninput=${inputText} value="${text}" />
					  </div>`;
	}
```

So, now we are able to create a reactive application with state and events. However Sparky have much more functions that that, below you have a list of all Sparky Functions available on the **renderer function**.



### Sparky Function's List

-----------------------



### Memoize

As each time that you need to render new data, the **renderer function** are executed entirely, at consequence some function can be initialize or called more than once, It's for this scenario that memoize are available.

Memoize are a function that take as first argument the function that you want to execute, and on the second arguments an array of dependencies, that will determine if the first argument function need to be re-executed.

This function save a lot of performance, and make you code quicker. Take a look to this example:

```typescript
	import { Sparky, render, state, memoize } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
        const [text, setText] = state("Hello World");
        const clickText = () => {
            setText("Hello Sparky")
        }
        memoize(() => {
            console.log("Text has changed")
        }, [text])
    	return html `<span onclick=${clickText}>${text}</span>`;
	}
```



### Update

Sometimes you want to do some change to your application after DOM render, for example fetch some data, have access to some HTML Element or logging purpose. 

The function Update will wait until the DOM was totally renderer and the Javascript call stack empty.

Below you have a quick reference of how using it:

```typescript
	import { Sparky, render, state, update } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
        const [text, setText] = state("Hello World");
        const clickText = () => {
            setText("Hello Sparky")
        }
        update(() => {
            fetchScholarData((data) => {
                setText(data)
            })
        })
    	return html `<span onclick=${clickText}>${text}</span>`;
	}
```



### Advanced State

We already see how to use state in Sparky, but in a very basic way. State function is much more powerful, and allow you to use a reducer function with a store for example or having a computed accumulative state.

A classic example of a accumulative state, is a ToDo app, on this kind of application you to add a new line in our current list that are stored in our state, for that we need to specify that we want a accumulative state calling a function state instead to just assign a new state. See example below:

```typescript
	import { Sparky, render, state } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
        const [list, setList] = state([]);
        const clickText = () => {
            setText(prevState => [...prevState, new Date.toLocaleString()])
        }
    	return html `<ul onclick=${clickText}>
						${list.map(item => `<li>${item}</li>`)}
					</ul>`;
	}
```



But sometimes we can face another problem, related with the amount of data that a state are managing or the quantity of state functions that we need to make our apps reactive as we want, for this case a Store object with a Dispatcher is the better choice that able us to have a single trust source and to make everything more simple to understand for other.

Sparky support this behavior out of the box, as the example follow:

```typescript
	import { Sparky, render, state, update } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	const storeLike = Sparky.createStore({
        name: "john"
    }, (state, action) => { 
        return action.type == "boss" ? {name: "simon"} : {counter: "robert"};  
    });

	function Main() {
        const [store, dispatcher] = state(storeLike);
        const clickText = () => {
            dispatcher({type: "boss"})
        }
    	return html `<span onclick=${clickText}>${store.name}</span>`;
	}
```

As we can see in this case we add a new function called createStore outside our **renderer function**, this function will create our store object that after our state function will be able to understand. The createStore function take 2 arguments, the first one are the store object, and the second one the dispatcher will allow you to programmatically change you state based on the argument's action.



### Router

The last function that we going to see of this list, is the one related with the routing of a web application, this functionality are out of the box too, just downloading Sparky let you the power to routing you web application immediately.

The Router functionality are divided on two important part, one will happen outside the **renderer function**, on this part you will define the scheme of you routing system. The second part will be inside the **renderer function** and will let you use all the function that have the router function to access to a new page, go back to the latest page that you visit, going forward, with an automatic control of the URL address. 

Quiet cool, right? Let's see a quick example:

```typescript
	import { Sparky, render, state, update } from "sparky-js";

	const routeLike = [
        {
            path: "/about",
            component: Sparky.component(About)
        },
        {
            path: "",
            component: Sparky.component(Home)
        }
    ]

	Sparky.mount(routeLike, document.getElementById("app"));

	function Home() {
        const { goToState } = router();
        const [text, setText] = state("Hello World");
        const goAbout = () => {
            goToState("/about")
        }
        const clickText = () => {
            setText("Hello Sparky")
        }
    	return html `<div onclick=${clickText}>
						<h1>Home</h1>
						<span onclick=${goAbout}>About</span>
						${text}
					 </div>`; 
	}

	function About() {
        const { goBack } = router();
        const [text, setText] = state("Thanks to download Sparky");
        const back = () => {
            goBack();
        }
        const clickText = () => {
            setText("We are very grateful")
        }
    	return html `<div onclick=${clickText}>
						<h1>About</h1>
						<span onclick=${back}>Go back</span>
						${text}
					 </div>`;        
    }
```

As you can see we change first argument of the mount function, by a Router Object. This object are our schema for the application to navigate through it.



## Advanced Guide

Now that we know everything about functions and the lifecycle of Sparky, we can focus into a more architectural approach.

In this advanced guide will going to see the High Order Component guide, use of props to pass data through component, but also the use of the storeState function to have only one trust source.

### Passing data with Props

To pass data from parent to child components, we have the ability to pass information across them, and keep it sync by update each time that the **rendered function** is executed.

Let's see a quick example:

```typescript
	import { Sparky, render, state, update } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
        const [mousePosition, setMousePosition] = state({x: 0, y: 0});
		
        const mouseOver = (evt) => {
            setMousePosition({x: evt.screenX, y: evt.screenY});
        }
        
    	return html `<div onmouseover=${mouseOver} class="wrapper">
			${Sparky.component(MouseRenderPosition, mousePosition)}
		</div>`;
	}

	function MouseRenderPosition({x, y}) {
        return html `<div class="mouse-position">
			Mouse X: ${x}, Mouse Y: ${y}
		</div>`
    }
```



### HOC - High Order Components

To explain it well, we going to take the definition of the React website:

"Concretely, **a higher-order component is a function that takes a component and returns a new component.**

Whereas a component transforms props into UI, a higher-order component transforms a component into another component."

For example we can have something like this:

```typescript
	import { Sparky, render, state, update } from "sparky-js";

	Sparky.mount(Sparky.component(Main), document.getElementById("app"));

	function Main() {
        const [comments, setComments] = state([]);
        update(() => {
            fetchCommentsData((data) => {
                setComments(data)
            })
        })
    	return html `<div class="commentsList">${comments.map(comment => {
            return Sparky.component(CommentRender, { comment })
        })}</div>`;
	}

	function CommentRender({comment}) {
        return html `<div class="comments">
			${Sparky.component(comment)}
		</div>`
    }
```

And that's all for now. This only a quick guide for beginner to start to use Sparky, for further explanation and details we recommend you to go to the API documentation.

Thanks to use Sparky and enjoy 😀
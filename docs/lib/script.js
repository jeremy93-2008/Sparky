const component = sparky.Sparky.component;
const route = sparky.Sparky.router;
const router = sparky.router;
const mount = sparky.Sparky.mount;
const html = sparky.html;
const state = sparky.state;
const update = sparky.update;

const routingState = [
    {
        path: "guide",
        component: component(Guide)
    },
    {
        path: "",
        component: component(Home)
    }
];

mount(route(routingState, {type: "hash"}), 
        document.getElementById("app"));

function Header() {
    const { goToState } = router();
    const onclick = (evt) => {
        evt.preventDefault();
        goToState("guide");
    }
    return html `<div class="header">
                <div class="logo">
                    <a href="#">
                        <img src='./img/logo.png' />
                        <h2>Sparky</h2>                    
                    </a>
                </div>
                <ul>
                    <li>
                        <a href="./index.html">Home</a> 
                        <div class="border"></div>
                    </li>
                    <li>
                        <a href="#" onclick=${onclick}>Guide</a> 
                        <div class="border"></div>
                    </li>
                    <li>
                        <a href="./api/index.html">API</a> 
                        <div class="border"></div>
                    </li>
                    <li>
                        <a target="_blank" href="https://npmjs.com/package/sparky-js">Download</a> 
                        <div class="border"></div>
                    </li>
                </ul>
            </div>`;
}

function Footer() {
    const { goToState } = router();
    const onclick = (evt) => {
        evt.preventDefault();
        goToState("guide");
    }
    return html `
        <div class="footer_bg"></div>
        <div class="footer">
            <div class="container">
                <span class="link">Link</span>
                <ul>
                    <li>
                        <a href="./index.html">Home</a>
                    </li>
                    <li>
                        <a href="#" onclick=${onclick}>Guide</a>
                    </li>
                    <li>
                        <a href="./api/index.html">API</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://npmjs.com/package/sparky-js">Download</a>
                    </li>
                </ul>
            </div>
            <div class="container">
                <span class="link">Externals</span>
                <ul>
                    <li>
                        <a href="https://github.com/jeremy93-2008/Sparky">Github</a>
                    </li>
                    <li>
                        <a href="https://npmjs.com/package/sparky-js">npm</a>
                    </li>
                </ul>
            </div>
            <span class="createdBy">Created by Jeremy Auvray</span>
        </div>
    `;
}

function Home() {
    const { goToState } = router();
    const onclick = (evt) => {
        evt.preventDefault();
        goToState("guide");
    }
    const onNPM = () => {
        window.open("https://npmjs.com/package/sparky-js")
    }
    return html `<div class="wrapper">
        ${Header()}
        <div class="content">
            <img src='./img/logo.png' />
            <h1>
                <span>
                    <span class="content__a">A</span> 
                    Sparkling 
                </span> New Frontend Framework.
                <input title="CDN Link" class="cdnInput" readonly type="text" value="https://unpkg.com/sparky-js@1.1.7/sparky.js"/>
                <div>
                    <button onclick=${onclick}>Getting started</button>
                    <button onclick=${onNPM}>Download from npm</button>
                </div>
            </h1>
        </div>
        <div class="content__bg"></div>
        <div class="description">
            <div class="each">
                <div class="image">
                    <img src="./img/code.png" />
                </div>
                <div class="code">
                    <h2>Smooth Learning Curve 🎆</h2>
                    <p>Sparky has a very smooth learning curve. If you
                        already know Javascript, on one afternoon you
                        can have you first app built in Sparky.
                    </p>
                </div>
            </div>
            <div class="each">
                <div class="code">
                    <h2>A Functional Framework 🚀</h2>
                    <p>Sparky is a framework based in pure function where everything 
                        have always the same result. Pure State, Store integration,
                        Event Delegation, etc...
                    </p>                    
                </div>
                <div class="image">
                    <img src="./img/code2.png" />
                </div>
            </div>
            <div class="each">
                <div class="image">
                    <img src="./img/code3.png" />
                </div>
                <div class="code">
                    <h2>Based on Components ✨</h2>
                    <p>The framework is based on the code's separation and logic partition,
                        everything can be separated in small function that render small logic.
                    </p>
                </div>
            </div>
            <div class="each">
                <div class="code">
                    <h2>Routing integrated 🎉</h2>
                    <p>Sparky has a routing system integrated with it, with a integrated 
                        history. Create different way to access to your website.
                    </p>                    
                </div>
                <div class="image">
                    <img src="./img/code4.png" />
                </div>
            </div>
        </div>
        ${Footer()}
    </div>`
}
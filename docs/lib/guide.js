function Guide() {
    const [guideText, setGuideText] = state("loading...");
    const [isButtonShown, setButtonShown] = state(false);


    const onClickTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    update(() => {
        var converter = new showdown.Converter({ghCodeBlocks: true})
        fetch("guide.md").then((res) => {
            res.text().then((text) => {
                setGuideText(converter.makeHtml(text))
                setClassNameLanguageForHighlight();
            })
        });
    }, []);

    update(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 100) {
                setButtonShown(true)
            } else {
                setButtonShown(false)
            }
            setClassNameLanguageForHighlight();
        })
    },[])

    return html `<div class="wrapper">
        ${Header()}
        <div class="guide">
            ${guideText}        
        </div>
        <button style="${isButtonShown ? "opacity: 1" : "opacity: 0"}" onclick=${onClickTop} class="top">Top</button>
        ${Footer()}
    </div>`
}

function setClassNameLanguageForHighlight() {
    document.querySelectorAll(".guide pre").forEach(elm => {
        if (elm.querySelector("code").classList.contains("language-nohighlight")) {
            elm.classList.add("language-ini");
        }
        else {
            elm.className = elm.querySelector("code").className;
        }
        ;
        hljs.highlightBlock(elm);
    });
}

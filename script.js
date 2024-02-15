window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)


function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled*100, 100).toString())
}

window.addEventListener("scroll", ()=> {

    const htmlElement = document.documentElement;
    const percentOfScreenHeightScrolled = (htmlElement.scrollTop / htmlElement.clientHeight)*100
    console.log(percentOfScreenHeightScrolled)
    if(Math.round(percentOfScreenHeightScrolled)> 10) {
        document.querySelector("header").classList?.add("changeColor")
        document.querySelector(".bg").style.opacity="0"
        document.querySelector(".features").classList?.add("slideIn")
        document.querySelector("#joinus").classList?.remove("changeBtnColorRev")
        document.querySelector("#joinus").classList?.add("changeBtnColor")
        document.querySelector("header").classList?.remove("changeColorRev")
        document.querySelector(".active").classList?.add("changeBorder")

    } else {
        document.querySelector("header").classList?.remove("changeColor")
        document.querySelector("header").classList?.add("changeColorRev")
        document.querySelector("#joinus").classList?.remove("changeBtnColor")
        document.querySelector("#joinus").classList?.add("changeBtnColorRev")
        document.querySelector(".active").classList?.remove("changeBorder")
        document.querySelector(".bg").style.visibility="1"
    }
})

const observer = new IntersectionObserver(entries=> {
    const textDiv = entries[0];
    const footer = entries[1]
    if(textDiv.isIntersecting ) {
        document.querySelector(".initalText").classList?.add("textGoBye")
        document.querySelector(".initalText").classList?.remove("textGoByeRev")
        document.querySelector(".nextText").classList?.add("fadeTextIn")
        document.querySelector(".nextText").classList?.remove("fadeTextInRev")
    }

    else {
        document.querySelector(".initalText").classList?.add("textGoByeRev")
        document.querySelector(".nextText").classList?.add("fadeTextInRev")
    }
})

observer.observe(document.querySelector(".observer"))
observer.observe(document.querySelector("footer"))



setScrollVar();

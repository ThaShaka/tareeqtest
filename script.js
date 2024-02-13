document.getElementById("viewFeats").addEventListener("click", ()=> {
    document.getElementsByClassName("features")[0].classList.add("slideIn")
    document.getElementsByTagName("header")[0].classList.add("changeColor")
    document.getElementById("joinus").classList.add("changeBtnColor")
    setTimeout(()=> {
        document.getElementsByClassName("initalText")[0].classList.add("textGoBye")
        document.getElementsByClassName("nextText")[0].classList.add("slideIn2")
    }, 5000)
})
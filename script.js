document.getElementById("viewFeats").addEventListener("click", ()=> {
    document.getElementsByClassName("bg")[0].style.visibility = "hidden"
    document.getElementsByClassName("features")[0].classList.add("slideIn")
    document.getElementsByTagName("header")[0].classList.add("changeColor")
    document.getElementById("joinus").classList.add("changeBtnColor")
    document.getElementsByClassName("active")[0].classList.add("changeBorder")
    setTimeout(()=> {
        document.getElementsByClassName("initalText")[0].classList.add("textGoBye")
        document.getElementsByClassName("nextText")[0].classList.add("slideIn2")
    }, 5000)
})
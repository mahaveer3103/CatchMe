const button = document.getElementById("button")
button.addEventListener("mouseover",()=>{
    const top = Math.floor(Math.random()*700)
    const left = Math.floor(Math.random()*1500)
    button.style.left= left + "px"
    button.style.top= top + "px"
})

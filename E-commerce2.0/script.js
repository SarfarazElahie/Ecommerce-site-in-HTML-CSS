
// Hamberger Menu 
let bar = document.querySelector("#bar")
let nav = document.querySelector("#navbar")
let close = document.querySelector("#close")

if(bar){
    bar.addEventListener("click", ()=>{
        nav.classList.add("active")
    })
}

if(close){

        close.addEventListener("click", ()=>{
        nav.classList.remove("active")
    })
    
}

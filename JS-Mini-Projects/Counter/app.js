let count = 0;
let btn = document.querySelectorAll(".btn")

let value = document.querySelector(".value")



btn.forEach((item)=>{

    item.addEventListener("click",()=>{
        if(item.classList.contains("increase")){
            count = count +1;
            console.log(count)
            value.innerText = count
        }
        else if(item.classList.contains("decrease")){
            count = count -1;
            value.innerText = count
        }
        else if(item.classList.contains("reset")){
            count = 0;
            value.innerText = count
        }
    })

})



let accordian = document.querySelectorAll(".acordian")

accordian.forEach(accordian =>{
   let icon = accordian.querySelector("span")
   let answer = accordian.querySelector(".answer")

   icon.addEventListener("click", function (){
         if(answer.style.maxHeight !=="0px"){
      answer.style.overflow = "hidden"
      answer.style.maxHeight = "0px"
      icon.innerText = "+"
   }
   else{
       answer.style.overflow = "visible"
      answer.style.maxHeight = "200px"
      icon.innerText = "-"
   }
   })

})
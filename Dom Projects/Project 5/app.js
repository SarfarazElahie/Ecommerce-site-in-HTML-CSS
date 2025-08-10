
let addTask = document.querySelector(".add-task")
let taskContainer = document.querySelector(".task-container")
let inputTask = document.querySelector(".input-task")


// Adding Event Listners 

addTask.addEventListener("click", function(){

    let task = document.createElement("div")
    task.classList.add("task")

    let li = document.createElement("li")
    li.innerText = `${inputTask.value}`
    task.appendChild(li)

    let checkButton = document.createElement("button")
    checkButton.innerText = '✔️'
    checkButton.classList.add("check-Task")
    task.appendChild(checkButton)
    checkButton.style.marginRight = "2px"

    let deleteButton = document.createElement("button")
    deleteButton.innerText = '❌'
    deleteButton.classList.add("delete-Task")
    task.appendChild(deleteButton)

    if(inputTask.value === ""){
        alert("Please Enter a valid Task")
    }
    else{
        taskContainer.appendChild(task)
    }

    inputTask.value = ""


    checkButton.addEventListener("click", function(){
        checkButton.previousElementSibling.style.textDecoration = "line-through"
    })

    deleteButton.addEventListener("click", function(){
    task.remove()
})


})

// key board event 

inputTask.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    addTask.click(); // trigger the click event
  }
});
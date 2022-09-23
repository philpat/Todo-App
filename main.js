let formEl = document.getElementById("form")
let inputEl = document.getElementById("input")
let todoEl = document.getElementById("todo")
let addBtn = document.querySelector(".add-list")



addBtn.addEventListener("click", (e)=>{
    e.preventDefault()
   
    const todoText = input.value

    if(todoText){
        let newItems = document.createElement("div")
        newItems.classList.add("todo-items")
        newItems.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
            <i class="fas fa-trash fa-1x"></i>
            <i class="fas fa-edit fa-1x"></i>
        </div>
        `
        todoEl.appendChild(newItems)
        input.value = ""
        updateLS()
    }
    todoEl.addEventListener("click", (e)=>{
        if(e.target.classList.contains("fa-trash")){
            e.target.parentElement.parentElement.remove()
        }
        
    })
    todoEl.addEventListener("click", (e)=>{
        if(e.target.classList.contains("fa-edit")){
            e.target.parentElement.parentElement.classList.toggle("complete")
        }
    })
    
})
function updateLS(){
    const updateItem = document.querySelectorAll(".todo-items")
    const allTodos = []
    updateItem.forEach((newItems)=>{
        allTodos.push({
            text: newItems.innerHTML
        })
    })
    localStorage.setItem("allTodos", JSON.stringify(allTodos))
}





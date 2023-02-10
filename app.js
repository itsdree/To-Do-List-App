const todoInput= document.querySelector('.todo-input'); 
const todoButton= document.querySelector('.todo-button'); 
const todoList= document.querySelector ('.todo-list'); 
const filterOption =document.querySelector('.filter-todo');

todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//FX ADICIONAR TODO
function addTodo(event){
    event.preventDefault();/*prevents form form submitting*/
    /*todo DIV....we attached all the the const we created to this Div*/ 
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    /*create a LI*/ 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check" ></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash" ></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //append to List
    todoList.appendChild(todoDiv);
    //clear todo input depois de adicionarmos um input
    todoInput.value= '';
    
}
    function deleteCheck(e) {
        const item = e.target;
    //DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
    //ANIMATION
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
          todo.remove();
        })
    }
    //CHECKMARK
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

/*function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
       switch(e.target.value){
        case "All":
            todo.style.display = "All";
         break;
        case "Completed":
            if (todo.classList.contains("Completed")) {
                todo.style.display = "flex";
            } else {
                todo.style.display = "none";
            }
            break;
        case "Uncompleted":
            if(!todo.classList.contains("Completed")){
                todo.style.display = "flex";
            }else {
                todo.style.display = "none";
            }
            break;
       }
    });
}*/
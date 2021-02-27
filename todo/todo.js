// selectors
const formInput = document.querySelector(".todo-input");
const formButton = document.querySelector(".todo-button");
const listContainer = document.querySelector(".todo-container");
const root = document.querySelector(":root");

// events

formButton.addEventListener("click", addTodo);

// add todo to ul
function addTodo(e) {
    // create div
    e.preventDefault();
    addElement(formInput.value);
    formInput.value = "";
}

function addElement(input) {
    const liWrapper = document.createElement("div");
    liWrapper.classList.add("liWrapper");

    // add li to div
    const todoItem = document.createElement("li");
    todoItem.innerText = input;
    saveTodosSession(formInput.value);
    todoItem.classList.add("todoItem");
    liWrapper.appendChild(todoItem);

    // add check to div
    const todoCompleteButton = document.createElement("button");
    todoCompleteButton.innerHTML = '<i class="fas fa-check"></i>';
    todoCompleteButton.classList.add("todoCompleteButton");
    liWrapper.appendChild(todoCompleteButton);
    todoCompleteButton.addEventListener("click", toggleClassCompleteForItem);

    // add trash button to div
    const todoTrashButton = document.createElement("button");
    todoTrashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoTrashButton.classList.add("todoTrashButton");
    liWrapper.appendChild(todoTrashButton);
    todoTrashButton.addEventListener("click", removeTodoItem);

    //add div to ul
    todoList.appendChild(liWrapper);
    // clear input on form
}


//remove  li
const removeTodoItem = (e) => {
    let item = e.target.parentElement;
    item.classList.add("fall");
    item.addEventListener('transitionend', () => item.remove());
    let todos = getJson();
    let todo = e.target.parentElement.innerText;
    let todoIndex = todos.indexOf(todo);
    todos.splice(todoIndex,1);
    localStorage.setItem('todos', JSON.stringify(todos));
};

// togle when done
const toggleClassCompleteForItem = (e) =>{
    e.target.parentElement.classList.toggle("completed");
   }

//when filter applied update list items
const todoList = document.querySelector(".todo-list");

const filterListItems = (e) => {
    const selection = e.target.value;
    const todos = todoList.childNodes;
    todos.forEach((child) => {
        if (child.classList) {

            switch (selection) {
                case 'all':
                    child.style.display = 'flex';
                    break;
                case 'done':
                    if (child.classList.contains('completed')) {
                        child.style.display = 'flex';
                    } else {
                        child.style.display = 'none';
                    }
                    break;
                case 'todo':
                    if (child.classList.contains('completed')) {
                        child.style.display = 'none';
                    } else {
                        child.style.display = 'flex';
                    }
                    break;
            }

        }
    })


}

function getJson(){
    //check if todos exist
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos
}

const saveTodosSession = (todo) => {
    let todos = getJson();
    // add todo to array in local storage
    if (todo !== "" && todo !== null) {

        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
}

function populateUlFromLocalStorage() {
    let todos = getJson();
    todos.forEach((todo) => {
        addElement(todo)
    });
}


function removeTodoFromSessionStorage(todoValue){

}

populateUlFromLocalStorage();
































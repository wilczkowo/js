// selectors
const formInput = document.querySelector(".todo-input");
const formButton = document.querySelector(".todo-button");
const listContainer = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");
const root = document.querySelector(":root");

// events

formButton.addEventListener("click", addTodo);

// functions

function addTodo(e) {

    // create div
    e.preventDefault();
    const liWrapper = document.createElement('div');
    liWrapper.classList.add('liWrapper');

    // add li to div
    const todoItem = document.createElement('li');
    todoItem.innerText = formInput.value;
    todoItem.classList.add('todoItem');
    liWrapper.appendChild(todoItem);

    // add check to div
    const todoCompleteButton = document.createElement('button');
    todoCompleteButton.innerHTML = '<i class="fas fa-check"></i>';
    todoCompleteButton.classList.add('todoCompleteButton');
    liWrapper.appendChild(todoCompleteButton);
    todoCompleteButton.addEventListener('click', toggleClassCompleteForItem);

    // add trash button to div
    const todoTrashButton = document.createElement('button');
    todoTrashButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoTrashButton.classList.add('todoTrashButton');
    liWrapper.appendChild(todoTrashButton);
    todoTrashButton.addEventListener('click', removeTodoItem);


    //add div to ul
    list.appendChild(liWrapper);
    // clear input on form
    formInput.value = "";

}

const removeTodoItem = (e) => e.target.parentElement.remove();
const  toggleClassCompleteForItem = (e)=> e.target.parentElement.classList.toggle('complete');


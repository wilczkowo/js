// selectors
const formInput = document.querySelector(".todo-input");
const formButton = document.querySelector(".todo-button");
const listContainer = document.querySelector(".todo-container");
const list = document.querySelector(".todo-list");

// events

formButton.addEventListener("click", addTodo);

// functions

function addTodo(e) {
  e.preventDefault();
  const liWrapper = document.createElement('div');
  liWrapper.classList.add('liWrapper');
  
  const todoLi = document.createElement('li');
  todoLi.innerText = 'tekst';
  todoLi.classList.add('todoLi');
  liWrapper.appendChild(todoLi);

  const todoCompleteButton = document.createElement('button');
  todoCompleteButton.innerHTML = '<i class="fas fa-check"></i>';
  todoCompleteButton.classList.add('todoCompleteButton');
  todoLi.appendChild(todoCompleteButton);

  const todoTrashButton = document.createElement('button');
  todoTrashButton.innerHTML = '<i class="fas fa-trash"></i>';
  todoTrashButton.classList.add('todoTrashButton');
  todoLi.appendChild(todoTrashButton);

  list.appendChild(liWrapper);

}





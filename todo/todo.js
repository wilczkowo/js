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
  console.log("ala");
}

function regularExpresion() {
  let mojString = "bonib@onic.om";
  let regEx1 = /.*@.*\..*/;
  if(regEx1.test(mojString)){
    console.log('poprawny email');
  }



}


regularExpresion();



/* <div class="todo">
  <li>
    <button></button>
    <button></button>
  </li>
</div> */

// selectors
const formInput = document.querySelector('.todo-input')
const formButton = document.querySelector('.todo-button')
const listContainer = document.querySelector('.todo-container')
const list = document.querySelector('.todo-list')

// events

formButton.addEventListener('click', addTodo)

// functions

function addTodo(e) {
  e.preventDefault()
  console.log('ala')
}

function MyHereDoc(){

        let mojString = 'ala ma kota'    
        var reobj = new RegExp("/\\*"+here+"\\n[\\s\\S]*?\\n"+here+"\\*/", "m");
        str = reobj.exec(MyHereDoc).toString();
        str = str.replace(new RegExp("/\\*"+here+"\\n",'m'),'').toString();
        return str.replace(new RegExp("\\n"+here+"\\*/",'m'),'').toString();
    }
    

{/* <div class="todo">
  <li>
    <button></button>
    <button></button>
  </li>
</div> */}

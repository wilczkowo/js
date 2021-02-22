const list = document.querySelector('#list');
const listItem = document.createElement('li');
listItem.className='item';
listItem.innerText='Item 4';
list.appendChild(listItem);
list.style.color = 'green';

const button = document.querySelector('#submit');
button.addEventListener('keypress',(e)=>{
    console.log(e);
})









let toDoAddButton = document.getElementById('todo-add');
let toDoContainer =  document.getElementById('todo-container');
let toDoInput = document.getElementById('todo-input');

toDoAddButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.innerText = toDoInput.value;
    toDoContainer.appendChild(paragraph);
    toDoInput.value = "";
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
    })
});
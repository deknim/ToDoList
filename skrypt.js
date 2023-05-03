let toDoAddButton = document.getElementById('todo-add');
let toDoContainer =  document.getElementById('todo-container');
let toDoInput = document.getElementById('todo-input');

    function addEventListeners(paragraph){
        const paragraphstyle = 'task';
        paragraph.classList.add(paragraphstyle);
        paragraph.addEventListener('click', () => {
            if(paragraph.style.textDecoration === "none"){
                paragraph.style.textDecoration = "line-through";
            }
            else {
                paragraph.style.textDecoration = "none";
            }
            localStorage.setItem('tasks', toDoContainer.innerHTML);
        });

    let deleteButton = paragraph.querySelector('button') || document.createElement('button');
        deleteButton.innerText = '-';
        deleteButton.addEventListener('click', () => {
            toDoContainer.removeChild(paragraph);
            localStorage.setItem('tasks', toDoContainer.innerHTML);
    });
    paragraph.appendChild(deleteButton);
    }
  
    if (localStorage.getItem('tasks')) {
        toDoContainer.innerHTML = localStorage.getItem('tasks');
            let paragraph = toDoContainer.getElementsByTagName('p');
            for (let i = 0; i < paragraph.length; i++) {
                addEventListeners(paragraph[i]);
            }
    }

    toDoAddButton.addEventListener('click', () => {
        let paragraph = document.createElement('p');
            paragraph.innerText = toDoInput.value;
            paragraph.style.textDecoration = "none";
            toDoContainer.appendChild(paragraph);
            toDoInput.value = "";
            addEventListeners(paragraph);
            localStorage.setItem('tasks', toDoContainer.innerHTML);
    });
let toDoAddButton = document.getElementById('todo-add'); //tworzy zmienną odnoszącą się do elementu z html
let toDoContainer =  document.getElementById('todo-container'); //tworzy zmienną odnoszącą się do elementu z html
let toDoInput = document.getElementById('todo-input'); //tworzy zmienną odnoszącą się do elementu z html

    function addEventListeners(paragraph){ //tworzy funkcję z parametrem
        const paragraphstyle = 'task'; //dodaje zmienną 
        paragraph.classList.add(paragraphstyle); //dodaje klasę do zadania
        paragraph.addEventListener('click', () => { //dodaje do zadania funkcję wykreślania
            if(paragraph.style.textDecoration === "none"){
                paragraph.style.textDecoration = "line-through";
            }
            else {
                paragraph.style.textDecoration = "none";
            }
            localStorage.setItem('tasks', toDoContainer.innerHTML); //zapisuje zawartość toDoContainer w "tasks" w localstorage
        });

    let deleteButton = paragraph.querySelector('button') || document.createElement('button'); //tworzy zmienną, przypisuje ją do przycisku, lub tworzy nowy, jeśli takiego nie ma
        deleteButton.innerText = '-'; //ustawia zawartość przycisku
        deleteButton.addEventListener('click', () => { //dodaje do przycisku funkcję usuwającą zadanie
            toDoContainer.removeChild(paragraph);
            localStorage.setItem('tasks', toDoContainer.innerHTML); //zapisuje zadania w localstorage
    });
    paragraph.appendChild(deleteButton); //dodaje przycisk do zadania
    }
  
    if (localStorage.getItem('tasks')) { //sprawdza, czy w localstorage jest zawartość
        toDoContainer.innerHTML = localStorage.getItem('tasks'); //umieszcza zawartość localstorage w toDoContainer
            let paragraph = toDoContainer.getElementsByTagName('p'); //tworzy zmienną, umieszcza w niej wszystkie zadania
            for (let i = 0; i < paragraph.length; i++) { //pętla po wszystkich zadaniach, dodaje do nich funkcję addEventListeners
                addEventListeners(paragraph[i]);
            }
    }

    toDoAddButton.addEventListener('click', () => { //funkcja dodająca nowe zadania
        let paragraph = document.createElement('p'); //tworzy zmienną, umieszcza w niej nowe zadanie
            paragraph.innerText = toDoInput.value; //ustawia zawartość zadania
            paragraph.style.textDecoration = "none"; //ustawia styl zadania
            toDoContainer.appendChild(paragraph); //dodaje zadanie do toDoContainer
            toDoInput.value = ""; //czyści pole input
            addEventListeners(paragraph); //dodaje do zadania funkcję addEventListeners
            localStorage.setItem('tasks', toDoContainer.innerHTML); //zapisuje zadania w localstorage
    });
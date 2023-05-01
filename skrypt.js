
//pobiera elementy z pliku html i  przypisuje je do zmiennych (pozwala na zarządzanie elementami z pliku html w pliku js)
let toDoAddButton = document.getElementById('todo-add');
let toDoContainer =  document.getElementById('todo-container');
let toDoInput = document.getElementById('todo-input');

//dodaje funkcję addEventListeners do zadań, wprowadzonych jako parametr
const addEventListeners = paragraph => {
    paragraph.addEventListener('click', () => {
        paragraph.style.textDecoration = "line-through";
        localStorage.setItem('tasks', toDoContainer.innerHTML);
    });
  
    paragraph.addEventListener('dblclick', () => {
        toDoContainer.removeChild(paragraph);
        localStorage.setItem('tasks', toDoContainer.innerHTML);
    });
};
  
if (localStorage.getItem('tasks')) { //sprawdza czy w lokalnej pamięci znajdują się już jakieś zadania
    toDoContainer.innerHTML = localStorage.getItem('tasks'); //jeśli tak, to umieszcza je w kontenerze
        let paragraph = toDoContainer.getElementsByTagName('p'); //zwraca wszystkie elementy o tagu p w kontenerze i umieszcza je w zmiennej paragraph
        for (let i = 0; i < paragraph.length; i++) { //pętla dodająca do każdego paragrafu funkcję addEventListeners
            addEventListeners(paragraph[i]);
        }
}

//dodaje do przycisku funkcję umożliwiającą dodawanie nowych zadań
toDoAddButton.addEventListener('click', () => {
    let paragraph = document.createElement('p');
    paragraph.innerText = toDoInput.value;
    toDoContainer.appendChild(paragraph);
    toDoInput.value = ""; //czyści pole wpisywania zadań
    addEventListeners(paragraph);   //dodaje do paragrafu z zadaniem funkcję addEventListeners
    localStorage.setItem('tasks', toDoContainer.innerHTML);
  });
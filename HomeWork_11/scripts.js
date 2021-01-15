const TODO_ITEM_CLASS = 'todo-item';
const TODO_DELENE_BTN_CLASS = 'todo-delete-btn';
const TODO_ROW_SELECTOR = '.todo-row';

const toDoRowTemplate = document.querySelector('#toDoRowTemplate').innerHTML;
const toDoList = document.querySelector('#toDoList');
const toDoInput = document.querySelector('#toDoInput');

document.querySelector('#toDoForm').addEventListener('submit', onToDoFormSubmit);

toDoList.addEventListener('click', onToDoListClick, true)

function onToDoFormSubmit(event) {
    event.preventDefault();
    const textNewToDo = getTextToDo();
    if (isTextValid(textNewToDo)) {
        addNewToDoRowItem(textNewToDo);
        clearInput();
    } else {
        alert('Text not valid');
    }
}

function getTextToDo() {
    return toDoInput.value;
}

function isTextValid(value) {
    return value !== '';
}

function addNewToDoRowItem(value) {
    toDoList.insertAdjacentHTML('beforeend', generateNewToDoRowHtml(value));
}

function generateNewToDoRowHtml(value) {
    return toDoRowTemplate.replace('{{textTodo}}', value);
}

function clearInput() {
    toDoInput.value = '';
}

function onToDoListClick(event) {
    const eventTarget = event.target;
    if (eventTarget.classList.contains(TODO_ITEM_CLASS)) {
        changeColor(eventTarget);
    }
    if (eventTarget.classList.contains(TODO_DELENE_BTN_CLASS)) {
        removeToDo(getToDoRow(eventTarget));
    }
}

function changeColor(el) {
    el.classList.toggle('todo-item-green');
    el.classList.toggle('todo-item-yellow');
}

function getToDoRow(element) {
    return element.parentElement.closest(TODO_ROW_SELECTOR);
}

function removeToDo(element) {
    element.remove();
}

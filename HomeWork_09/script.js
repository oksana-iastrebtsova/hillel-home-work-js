const CLASSES_FOR_ITEM_TODO = ['item-todo', 'element-todo'];
const textNewToDo = document.querySelector('#textNewToDo');
const buttonAddToDo = document.querySelector('#buttonAddToDo');
let listToDo = document.querySelector('#listToDo');

buttonAddToDo.addEventListener('click', onButtonAddToDoClick);

function onButtonAddToDoClick() {
    if (!isTextNewToDoEmpty()) {
        appendNewToDoItem(createNewItemToDo());
        clearTextNewToDo();
    }
}

function isTextNewToDoEmpty() {
    return textNewToDo.value.trim().length == 0;
}

function createNewItemToDo() {
    let itemToDo = document.createElement('li');
    addStyles(itemToDo);
    setText(itemToDo);
    return itemToDo;
}

function addStyles(itemToDo) {
    CLASSES_FOR_ITEM_TODO.forEach(style => itemToDo.classList.add(style));
}

function setText(itemToDo) {
    itemToDo.innerHTML = textNewToDo.value.trim();
}

function appendNewToDoItem(itemToDo) {
    listToDo.append(itemToDo);
}

function clearTextNewToDo() {
    textNewToDo.value = '';
}









const CLASS_FOR_ITEM_TODO = 'item-todo';
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
    return textNewToDo.value.length == 0;
}

function createNewItemToDo() {
    let itemToDo = document.createElement('li');
    itemToDo.innerHTML = getTextNewToDo();
    itemToDo.classList.add(getClassForItemToDo());
    return itemToDo;
}

function getTextNewToDo() {
    return textNewToDo.value;
}

function getClassForItemToDo() {
    return CLASS_FOR_ITEM_TODO;
}

function appendNewToDoItem(itemToDo) {
    listToDo.append(itemToDo);
}

function clearTextNewToDo() {
    textNewToDo.value = '';
}









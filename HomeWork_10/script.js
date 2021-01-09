const TITLE_BUTTON_DELETE_ROW = 'Удалить';
const styledTableBody = document.querySelector('#styledTableBody');
const firstNameField = document.querySelector('#firstNameField');
const lastNameField = document.querySelector('#lastNameField');
const phoneField = document.querySelector('#phoneField');

document.querySelector('#styledTable')
    .addEventListener('click', deleteRow);

document.querySelector('#addRowButton')
    .addEventListener('click', onButtonAddRowClick);

function deleteRow(event) {
    event.target.parentElement.remove();
}

function onButtonAddRowClick() {
    if (firstNameField.value.trim() && lastNameField.value.trim() && phoneField.value.trim()) {
        addNewRow(firstNameField.value.trim(), lastNameField.value.trim(), phoneField.value.trim());
        clearFields();
    }
}

function addNewRow(firstName, lastName, phone) {
    styledTableBody.appendChild(createNewRow(firstName, lastName, phone) );
}

function createNewRow(firstName, lastName, phone) {
    const row = document.createElement('tr');
    row.appendChild(createCell(firstName));
    row.appendChild(createCell(lastName));
    row.appendChild(createCell(phone));
    row.appendChild(createButton(TITLE_BUTTON_DELETE_ROW));
    return row;
}

function createCell(text) {
    const cell = document.createElement('td');
    const cellText = document.createTextNode(text);
    cell.appendChild(cellText);
    return cell;
}

function createButton(buttonText) {
    const button = document.createElement('input');
    button.type = 'button';
    button.value = buttonText;
    return button;
}

function clearFields() {
    firstNameField.value = '';
    lastNameField.value = '';
    phoneField.value = '';
}










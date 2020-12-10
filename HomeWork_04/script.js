const PLUS_SIGN = '+';
const SUB_SIGN = '-';
const MULT_SIGN = '*';
const DIV_SIGN = '/';
const VALID_OPERATORS = [PLUS_SIGN, SUB_SIGN, MULT_SIGN, DIV_SIGN];
const MIN_NUMBER_OPERANDS = 2;
const MAX_NUMBER_OPERANDS = 4;

const operator = getOperator();
const numberOperands = getNumberOperands();
const operands = getOperands(numberOperands);
const result = calculate(operator, operands);
showResult(operator, operands, result);

function getOperator() {
    let operator;
    do {
        operator = prompt('What operation do you want to execute (' +
            VALID_OPERATORS.join(', ') + ') ?');
    } while (!isOperatorValid(operator));
    return operator;
}

function isOperatorValid(operator) {
    return VALID_OPERATORS.includes(operator);
}

function getNumberOperands() {
    let numberOperands;
    do {
        numberOperands = getNumber('How many operands do you want to use [' +
            MIN_NUMBER_OPERANDS + ', ' + MAX_NUMBER_OPERANDS + '] ?');
    } while (!isNumberOperandsValid(numberOperands));
    return numberOperands;
}

function getNumber(message) {
    return Number(prompt(message));
}

function isNumberOperandsValid(numberOperands) {
    return !isNaN(numberOperands) &&
        numberOperands >= MIN_NUMBER_OPERANDS &&
        numberOperands <= MAX_NUMBER_OPERANDS;
}

function getOperands(numberOperands) {
    let operands = [];
    for (let i = 1; i <= numberOperands; ++i) {
        operands.push(getOperand(i));
    }
    return operands;
}

function getOperand(operandName) {
    let operand;
    do {
        operand = getNumber('Operand ' + operandName);
    } while (!isOperandValid(operand));
    return operand;
}

function isOperandValid(operand) {
    return !isNaN(operand);
}

function calculate(operator, operands) {
    let result;
    switch (operator) {
        case PLUS_SIGN:
            result = add(operands);
            break;
        case SUB_SIGN:
            result = sub(operands);
            break;
        case MULT_SIGN:
            result = mult(operands);
            break;
        case DIV_SIGN:
            result = div(operands);
            break;
        default:
            console.log('Unimplemented operator: ' + operator);
            result = NaN;
    }
    return result;
}

function add(operands) {
    return operands.reduce((acc, num) => acc + num);
}

function sub(operands) {
    return operands.reduce((acc, num) => acc - num);
}

function mult(operands) {
    return operands.reduce((acc, num) => acc * num);
}

function div(operands) {
    return operands.reduce((acc, num) => acc / num);
}

function showResult(operator, operands, result) {
    return console.log(operands.join(' ' + operator + ' ') + ' = ' + result);
}


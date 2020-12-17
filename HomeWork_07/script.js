// Целое число больше нуля!
const integer = 5;

showResult(integer, sumAllIntegers(integer));

function showResult(integer, sum) {
    console.log('Число: ' + integer + ', сумма всех чисел: ' + sum);
}

function sumAllIntegers(integer) {
    return integer == 1 ? 1 : (sumAllIntegers(integer - 1) + integer);
}


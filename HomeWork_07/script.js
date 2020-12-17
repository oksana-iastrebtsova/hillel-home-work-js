// Целое число больше нуля!
const INTEGER = 5;

showResult(INTEGER, sumAllIntegers(INTEGER));

function showResult(integer, sum) {
    console.log('Число: ' + integer + ', сумма всех чисел: ' + sum);
}

function sumAllIntegers(integer) {
    return integer == 1 ? 1 : (sumAllIntegers(integer - 1) + integer);
}


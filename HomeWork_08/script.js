function isArgumentValid(value) {
    return !isNaN(value);
}

function createCalculator(num) {
    return {
        add: (arg) => isArgumentValid(arg) ? num += arg : null,
        sub: (arg) => isArgumentValid(arg) ? num -= arg : null,
        mult: (arg) => isArgumentValid(arg) ? num *= arg : null,
        div: (arg) => isArgumentValid(arg) ? num /= arg : null,
        set: (arg) => isArgumentValid(arg) ? num = arg : null
    }
}

const calculator = createCalculator(100);
console.log(calculator.add('a')); // null
console.log(calculator.add(10));  // 110
console.log(calculator.add(10));  // 120
console.log(calculator.sub(20));  // 100
console.log(calculator.mult(10)); // 1000
console.log(calculator.div(10));  // 100
console.log(calculator.set(20)); // Установить новое базовое число
console.log(calculator.add(10)); // 30
console.log(calculator.add(10)); // 40





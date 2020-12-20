function createCalculator(num) {

    let result = num;

    function isValidNum(value) {
        return !isNaN(value);
    }

    return {
        add: (num) => isValidNum(num) ? result += num : null,
        sub: (num) => isValidNum(num) ? result -= num : null,
        mult: (num) => isValidNum(num) ? result *= num : null,
        div: (num) => isValidNum(num) ? result /= num : null,
        set: (num) => isValidNum(num) ? result = num : null
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





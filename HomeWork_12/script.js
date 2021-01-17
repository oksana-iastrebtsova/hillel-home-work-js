// Про валидацию в задании ничего не сказано
// Валидацию не делаем
// Методы возвращают this чтобы удобно было производить вычисления
// из нескольких действий
function Calculator(base) {

    this.base = base;

    this.add = function (num) {
        this.base += num;
        return this;
    }

    this.sub = function (num) {
        this.base -= num;
        return this;
    }

    this.mult = function (num) {
        this.base *= num;
        return this;
    }

    this.div = function (num) {
        this.base /= num;
        return this;
    }

    this.set = function (num) {
        this.base = num;
        return this;
    }

    this.get = function () {
        return this.base;
    }
}

const calculator = new Calculator(10);

calculator.add(5).add(5).mult(3);
console.log('Get: ' + calculator.get() + ', Base: ' + calculator.base);

calculator.set(100).add(5);
console.log('Result: ' + calculator.get());






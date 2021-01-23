function Component(price, calories) {
    this._price = price;
    this._calories = calories;
}

Component.prototype.getPrice = function() {
    return this._price;
}

Component.prototype.getCalories = function() {
    return this._calories;
}

function HamburgerBase(price, calories) {
    Component.call(this, price, calories)
}

HamburgerBase.prototype = new Component();

function Topping(price, calories) {
    Component.call(this, price, calories)
}

Topping.prototype = new Component();

function Hamburger(name, hamburgerBase) {
    this._name = name;
    Component.call(this, hamburgerBase.getPrice(), hamburgerBase.getCalories())
}

Hamburger.prototype = new Component();

Hamburger.prototype.addTopping = function(topping) {
    this._price += topping.getPrice();
    this._calories += topping.getCalories();
}

Hamburger.prototype.getName = function() {
    return this._name;
}

Hamburger.prototype.toString = function() {
    return 'Hamburger {Name: ' + this.getName() + ', Price: ' + this.getPrice() + ', Calories: ' + this.getCalories() + '}';
}

Hamburger.BASE_SMALL = new HamburgerBase(50, 20);
Hamburger.BASE_MEDIUM = new HamburgerBase(75, 30);
Hamburger.BASE_LARGE = new HamburgerBase(100, 40);

Hamburger.TOPPING_CHEESE = new Topping(10, 20);
Hamburger.TOPPING_POTATO = new Topping(15, 10);
Hamburger.TOPPING_SALAD = new Topping(20, 5);
Hamburger.TOPPING_SEASON = new Topping(15, 0);
Hamburger.TOPPING_MAYO = new Topping(20, 5);


const hamburger = new Hamburger("MyFirstBurger", Hamburger.BASE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
console.log(hamburger.toString());







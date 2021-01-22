
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

function Hamburger(component) {
    this._price = component.getPrice();
    this._calories = component.getCalories();
}

Hamburger.prototype = new Component();

Hamburger.prototype.addTopping = function(topping) {
    this._price += topping.getPrice();
    this._calories += topping.getCalories();
}

function Topping(component) {
    this._price = component.getPrice();
    this._calories = component.getCalories();
}

Topping.prototype = new Component();

Hamburger.SIZE_SMALL = new Component(50, 20);
Hamburger.SIZE_MEDIUM = new Component(75, 30);
Hamburger.SIZE_LARGE = new Component(100, 40);
Hamburger.TOPPING_CHEESE = new Topping(new Component(10, 20));
Hamburger.TOPPING_POTATO = new Topping(new Component(15, 10));
Hamburger.TOPPING_SALAD = new Topping(new Component(20, 5));
Hamburger.TOPPING_SEASON = new Topping(new Component(15, 0));
Hamburger.TOPPING_MAYO = new Topping(new Component(20, 5));


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Topping.TOPPING_POTATO);

console.log("Price: " + hamburger.getPrice());
console.log("Calories: " + hamburger.getCalories());







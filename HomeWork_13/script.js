class Component {

    constructor(price, calories) {
        this._price = price;
        this._calories = calories;
    }

    getPrice() {
        return this._price;
    }

    getCalories() {
        return this._calories;
    }
}

class HamburgerBase extends Component {
    constructor(price, calories) {
        super(price, calories);
    }
}

class Topping extends Component {
    constructor(price, calories) {
        super(price, calories);
    }
}

class Hamburger extends Component {

    static BASE_SMALL = new HamburgerBase(50, 20);
    static BASE_MEDIUM = new HamburgerBase(75, 30);
    static BASE_LARGE = new HamburgerBase(100, 40);

    static TOPPING_CHEESE = new Topping(10, 20);
    static TOPPING_POTATO = new Topping(15, 10);
    static TOPPING_SALAD = new Topping(20, 5);
    static TOPPING_SEASON = new Topping(15, 0);
    static TOPPING_MAYO = new Topping(20, 5);

    constructor(name, hamburgerBase) {
        super(hamburgerBase.getPrice(), hamburgerBase.getCalories());
        this._name = name;
    }

    addTopping(topping) {
        this._price += topping.getPrice();
        this._calories += topping.getCalories();
    }

    getName() {
        return this._name;
    }

    toString() {
        return 'Hamburger {Name: ' + this.getName() + ', Price: ' + this.getPrice() + ', Calories: ' + this.getCalories() + '}';
    }
}

const hamburger = new Hamburger("MyFirstBurger", Hamburger.BASE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_CHEESE);
console.log(hamburger.toString());







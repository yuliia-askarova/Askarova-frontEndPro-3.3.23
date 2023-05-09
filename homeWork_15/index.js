//Гамбургер

const SIZE_SMALL = "small";
const SIZE_BIG = "big";


const STUFFING_CHEESE = "cheese";
const STUFFING_POTATO = "potato";
const STUFFING_SALAD = "salad";


const TOPPING_MAYO = "mayo";
const TOPPING_SAUCE = "sauce";


class Gamburger {
  size = '';
  stuffing = '';
  topping = '';

  kal = {
    cheese: 20,
    salad: 5,
    potato: 10,
    small: 20,
    big: 40,
    mayo: 5,
    sauce: 0
  }

  price = {
    cheese: 10,
    salad: 20,
    potato: 15,
    small: 50,
    big: 100,
    mayo: 20,
    sauce: 15
  }

  constructor (size, stuffing) {
    this.size = size,
    this.stuffing = stuffing
  }

  addTopping (topping) {
    this.topping = topping
  }

  calculate () { 
    let total = this.kal[this.size] + this.kal[this.stuffing] + this.kal[this.topping];
    console.log(total);
  }

  calculatePrice () {
    let price = this.price[this.size] + this.price[this.stuffing] + this.price[this.topping];
    console.log(price);
  }
}

const gamb = new Gamburger (SIZE_SMALL, STUFFING_POTATO);

gamb.addTopping(TOPPING_MAYO);

gamb.calculate();
gamb.calculatePrice();
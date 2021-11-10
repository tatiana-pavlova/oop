import Hamburger from "./components/Hamburger.js";
import Salad from "./components/Salad.js";
import Beverage from "./components/Beverage.js";
import Order from "./components/Order.js";

const yammyBurger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
const olivierSalad = new Salad(Salad.OLIVIER, 125);
const coffee = new Beverage(Beverage.COFFEE);
const erunda = new Hamburger('', 'polnaya erunda');

const order = new Order(1);

order.addItem(yammyBurger, 2);
order.addItem(olivierSalad);
order.addItem(coffee, 5);

order.showItems();

order.addItem(erunda);
console.log(order.pay());
order.deleteItem(erunda);

console.log(order.calculateTotalPrice());
console.log(order.calculateTotalCalories());
order.pay();
console.log(order.addItem(yammyBurger));

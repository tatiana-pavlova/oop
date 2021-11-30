import Hamburger from "./components/Hamburger.mjs";
import Salad from "./components/Salad.mjs";
import Beverage from "./components/Beverage.mjs";
import Order from "./components/Order.mjs";

const yammyBurger = new Hamburger('SIZE_LARGE', 'STUFFING_CHEESE');
const olivierSalad = new Salad('OLIVIER', 125);
const coffee = new Beverage('COFFEE');
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

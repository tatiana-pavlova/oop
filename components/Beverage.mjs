import MenuItem from "./MenuItem.mjs";

export default class Beverage extends MenuItem {
  constructor(name) {
    super(name);
  }

  static beverages = [{ name: 'COLA', price: 50, calories: 40 }, { name: 'COFFEE', price: 80, calories: 20 }];
  
  calculatePrice() {
    return super.calculatePrice(Beverage.beverages);
  }

  calculateCalories() {
    return super.calculateCalories(Beverage.beverages);
  }
}
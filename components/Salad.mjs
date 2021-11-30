import MenuItem from "./MenuItem.mjs";

export default class Salad extends MenuItem {
  constructor(name, weight) {
    super(name);
    this.weight = weight;
  }

  static salads = [{name: 'CAESAR', price: 100, calories: 20}, {name: 'OLIVIER', price: 50, calories: 80}]
  
  calculatePrice() {
    if (this._checkWeight() instanceof Error) {
      return this._checkWeight();
    }
    const pricePerHundredGrams = super.calculatePrice(Salad.salads);
    const pricePerGram = pricePerHundredGrams/100;
    return pricePerGram * this.weight;
  }

  calculateCalories() {
    if (this._checkWeight() instanceof Error) {
      return this._checkWeight();
    }
    const caloriesPerHundredGrams = super.calculateCalories(Salad.salads);
    const caloriesPerGram = caloriesPerHundredGrams/100;
    return caloriesPerGram * this.weight;
  }
    
  _checkWeight() {
    if (!this.weight || typeof this.weight !== 'number') {
      try {
        throw new Error('Нет данных для расчета стоимости');
      } catch (e) {
        return e;
      }
    }
  }
}

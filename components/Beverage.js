export default class Beverage {
  constructor(name) {
    this.name = name;
  }

  static COLA = { price: 50, calories: 40 };
  static COFFEE = { price: 80, calories: 20 };

  _getName() {
    if (this.name) {
      return this.name === Beverage.COLA || this.name === Beverage.COFFEE ? this.name : new Error('Данного напитка нет в меню');
    } else {
      try {
        throw new Error('Не указано название напитка');
      } catch(e) {
        return e;
      }
    }
  }

  calculatePrice() {
    if (this._getName() instanceof Error) {
      try {
        throw new Error('Нет данных для расчета стоимости');
      } catch (e) {
        return e;
      }
    } else {
      return this._getName().price;
    }
  }

  calculateCalories() {
    if (this._getName() instanceof Error) {
      try {
        throw new Error('Нет данных для расчета калорийности');
      } catch (e) {
        return e;
      }
    } else {
      return this._getName().calories;
    }
  }
}
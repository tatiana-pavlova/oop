export default class Salad {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  static CAESAR = { price: 100, calories: 20 };
  static OLIVIER = { price: 50, calories: 80 };

  _getName() {
    if (this.name) {
      return this.name === Salad.CAESAR || this.name === Salad.OLIVIER ? this.name : new Error('Данного салата нет в меню');
    } else {
      try {
        throw new Error('Не указано название салата');
      } catch (e) {
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
      if (typeof this.weight === 'number') {
        return this._getName().price/100 * this.weight;
      } else {
        try {
          throw new Error('Нет данных для расчета стоимости');
        } catch (e) {
          return e;
        }
      }
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
      if (typeof this.weight === 'number') {
        return Math.round(this._getName().calories/100 * this.weight);
      } else {
        try {
          throw new Error('Нет данных для расчета калорийности');
        } catch (e) {
          return e;
        }
      }
    }
  }
}

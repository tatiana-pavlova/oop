export default class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
  }

  static SIZE_SMALL = { price: 50, calories: 20 };
  static SIZE_LARGE = { price: 100, calories: 40 };
  static STUFFING_CHEESE = { price: 10, calories: 20 };
  static STUFFING_SALAD = { price: 20, calories: 5 };
  static STUFFING_POTATO = { price: 15, calories: 10 };

  _getSize() {
    if (this.size) {
      return  this.size === Hamburger.SIZE_LARGE || 
              this.size === Hamburger.SIZE_SMALL ? this.size : new Error( 'Некорректно указан размер гамбургера');
    } else {
      try {
        throw new Error('Нет данных о размере гамбургера');
      }
      catch(e) {
        return e;
      }
    }
  }

  _getStuffing() {
    if(this.stuffing) {
      return this.stuffing === Hamburger.STUFFING_CHEESE || 
             this.stuffing === Hamburger.STUFFING_SALAD || 
             this.stuffing === Hamburger.STUFFING_POTATO ? this.stuffing : new Error ('Некорректно указана начинка для гамбургера');
    } else {
      try {
        throw new Error('Нет данных о начинке для гамбургера');
      }
      catch(e) {
        return e;
      }
    }
  }

  calculatePrice() {
    if (this._getSize() instanceof Error || this._getStuffing() instanceof Error) {
      try {
        throw new Error('Не хватает данных для расчета стоимости');
      } 
      catch(e) {
        return e;
      }
    } else {
      return this._getSize().price + this._getStuffing().price;
    }
  }

  calculateCalories() {
    if (this._getSize() instanceof Error || this._getStuffing() instanceof Error) {
      try {
        throw new Error('Не хватает данных для расчета калорий');
      } 
      catch(e) {
        return e;
      } 
    } else {
      return this._getSize().calories + this._getStuffing().calories;
    }
  }
}

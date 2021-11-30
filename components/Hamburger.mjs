import MenuItem from "./MenuItem.mjs";

export default class Hamburger extends MenuItem {
  constructor(size, stuffing) {
    super(size);
    this.stuffing = stuffing;
  }

  static sizes = [{ name: 'SIZE_SMALL', price: 50, calories: 20 }, { name: 'SIZE_LARGE', price: 100, calories: 40 }]
  static stuffings = [{ name: 'STUFFING_CHEESE', price: 10, calories: 20 }, 
                      { name: 'STUFFING_SALAD', price: 20, calories: 5 }, 
                      { name: 'STUFFING_POTATO', price: 15, calories: 10 }]
  

  _getStuffing() {
    if (this.stuffing) {
      const requestedStuffing = Hamburger.stuffings.find((stuffing) => this.stuffing === stuffing.name);
      return requestedStuffing ? requestedStuffing : new Error ("Данной позиции нет в меню");
    } else {
      try {
        throw new Error('Уточните позицию меню');
      } catch (e) {
        return e;
      }
    }
  }

  calculatePrice() {
    if (this._getStuffing() instanceof Error) return new Error('Не хватает данных для расчета стоимости');
    return super.calculatePrice(Hamburger.sizes) + this._getStuffing().price;
  }

  calculateCalories() {
    if (this._getStuffing() instanceof Error) return new Error('Не хватает данных для расчета калорий');
    return super.calculateCalories(Hamburger.sizes) + this._getStuffing().calories;
  }
}

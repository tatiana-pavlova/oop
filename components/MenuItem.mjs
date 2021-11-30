export default class MenuItem {
  constructor(name) {
    this.name = name;
  }

  _getName(menuItems) {
    if (this.name) {
      const requestedItem = menuItems.find((item) => this.name === item.name);
      return requestedItem ? requestedItem.name : new Error ("Данной позиции нет в меню");
    } else {
      try {
        throw new Error('Уточните позицию меню');
      } catch (e) {
        return e;
      }
    }
  }

  _getItemInfo(menuItems) {
    if (this.name) {
      const requestedItem = menuItems.find((item) => this.name === item.name);
      return requestedItem ? requestedItem : new Error ("Данной позиции нет в меню");
    } else {
      try {
        throw new Error('Уточните позицию меню');
      } catch (e) {
        return e;
      }
    }
  }

  calculatePrice(items) {
    return this._getName(items) instanceof Error ? new Error('Нет данных для расчета стоимости') : this._getItemInfo(items).price;
  }

  calculateCalories(items) {
    return this._getName(items) instanceof Error ? new Error('Нет данных для расчета калорийности') : this._getItemInfo(items).calories;
  }
}
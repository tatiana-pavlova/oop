export default class Order {
  constructor(number) {
    this.number = number;
    this.isPaid = false;
  }

  static items = [];

  addItem(item, amount = 1) {
    if (this.isPaid) {
      try {
        throw new Error('Заказ оплачен, его нельзя изменить');
      } catch (e) {
        return e;
      }
    } else {
      const menuItem = Order.items.find(element => element.item === item);
      menuItem ? menuItem.amount += amount : Order.items.push({item, amount});
      
      return Order.items;
    }
  }

  deleteItem(item, amount = 1) {
    if (this.isPaid) {
      try {
        throw new Error('Заказ оплачен, его нельзя изменить');
      } catch (e) {
        return e;
      }
    } else {
      const menuItem = Order.items.find(element => element.item === item);
      if (menuItem) {
        amount < menuItem.amount ? 
        menuItem.amount -= amount : 
        Order.items = Order.items.filter((element) => {
          return element.item !== item;
        });
        
        return Order.items;
      } else {
        try {
          throw new Error('Данной позиции нет в заказе')
        } catch (e) {
          return e;
        }
      }
    }
  }

  pay() {
    if (this.calculateTotalPrice() instanceof Error) {
      try {
        throw new Error ('Невозможно оплатить заказ, так как он некорректно оформлен');
      } catch(e) {
        return e;
      }
    } else {
      return this.isPaid = true;
    }
  }

  calculateTotalPrice() {
    return Order.items.reduce(function(price, item) {
      if (item.item.calculatePrice() instanceof Error) {
        try {
          throw new Error('Некорректно оформлен заказ');
        } catch(e) {
          return e;
        }
      } else {
        return price += item.item.calculatePrice() * item.amount;
      }
    }, 0);
  }

  calculateTotalCalories() {
    return Order.items.reduce(function(price, item) {
      if (item.item.calculatePrice() instanceof Error) {
        try {
          throw new Error('Некорректно оформлен заказ');
        } catch(e) {
          return e;
        }
      } else {
        return price += item.item.calculateCalories() * item.amount;
      }
    }, 0);
  }

  showItems() {
    console.log(Order.items);
  }
}

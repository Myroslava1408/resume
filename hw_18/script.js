
 /* 1 Створити масив «Список покупок». Кожен елемент масиву є об'єктом, який містить  
 назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума.*/
 let list = [
         {
            name: 'bread',
            number: 2,
            purchased: true,
            unitPrise: 1,
            sum: 2  //dollar
        },
        {
            name: 'oil',
            number: 3,
            purchased: false,
            unitPrise: 2,
            sum: 6
        },
         {
            name: 'banana',
            number: 1,
            purchased: true,
            unitPrise: 1,
            sum: 1 
        }
 ];
 /*
 3 Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
 */
 function addPurchase(name, quantity, unitPrice) {
    let existingProduct;
    for (let i = 0; i < list.length; i++) {
      if (list[i].name === name) {
        existingProduct = list[i];
        break;
      }
    }
  
    if (existingProduct) {
      existingProduct.number += quantity;
      existingProduct.sum += quantity * unitPrice;
    } else {
      let newProduct = {
        name: name,
        number: quantity,
        purchased: false,
        unitPrise: unitPrice,
        sum: quantity * unitPrice
      };
  
      list.push(newProduct);
    }
    return list;
  }
  addPurchase();
  
  /*
2 Видалення продукту зі списку (видалення повинно проводитися шляхом створення  нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
*/
 let productToRemove = 'oil';

 let newList = [];

 for (let i = 0; i < list.length; i++) {
   if (list[i].name !== productToRemove) {
     newList.push(list[i]);
   }
 }
 
 console.log(newList);


   /* Написати  кілька функцій для роботи з таким масивом:
Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.*/

list.sort(function ( a, b ) {
    if (a.purchased && !b.purchased) {
        return 1;
    } else if (!a.purchased && b.purchased) {
        return -1;
    } else {
        return 0;
    }
});
let alertMessage = '';
for (let item of list) {
    alertMessage += item.name + ' - ' + (item.purchased ? 'Purchased' : ' Not Purchased') + '\n';
}
alert (alertMessage);

/*Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.*/

function buyProduct (name) {
    for (let i = 0; i < list.length; i++) {
        let product = list[i];

        if (product.name === name) {
            list[i].purchased = true;
            console.log(`Product "${name}" purchased.`);
            break;
        }

    }
}
buyProduct('oil');



//6 Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
//Метод, який виводить на екран інформацію про автомобіль.
//Додавання ім’я водія у список
//Перевірка водія на наявність його ім’я у списку
//Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину

 let auto = {
    manufacturer: 'Toyota',
    model: 'Toyota Camry',
    year: 1982,

    speed: 90, // km/hour
    fuelTankVolume: 70, // l
    fuel100Km: 5, // l

    drivers: [],

    showInformation : function () {
        let info = 'Manufacturer: ' + this.manufacturer + '\n'
            + 'Model: ' + this.model + '\n'
            + 'Year: ' + this.year + '\n'
            + 'Speed: ' + this.speed + ' km/hour' + '\n'
            + 'Fuel tank volume: ' + this.fuelTankVolume + ' l' + '\n'
            + 'The average fuel consumption per 100 km: ' + this.fuel100Km + ' l';

        alert(info);
    },

    addDriver : function (name) {
        if (!this.checkDriver(name)) {
            this.drivers.push(name);
        }

        console.log(this.drivers);
    },

    checkDriver: function (name) {
        return this.drivers.includes(name);
    },

    calculateTime: function (distance) {
        let time = distance / this.speed;
        time = +time.toFixed(2);

        if (time <= 4) {
            return time;
        }

        let timePieces = Math.floor(time / 4);
        let breaksQty = (time % 4 === 0) ?
            timePieces - 1 : timePieces;

        time += breaksQty;

        return time;
    },

    calculateFuel: function (distance) {
        let fuel = this.fuel100Km / 100 * distance;
        fuel = +fuel.toFixed(2);

        return fuel;
    },

    /**
     * Calculates the time and fuel
     * required to overcome passed distance
     * at an average speed.
     * 
     * @param {number} distance Distance in km
     */
    calculateTimeAndFuel: function (distance) {
        let info = 'Passed distance ' + distance + ' km:\n'
            + '\n'
            + 'Required time: ' + this.calculateTime(distance) + ' h\n'
            + 'Required fuel: ' + this.calculateFuel(distance) + ' l';

        alert(info);
    },
};

/**
 * 1 Створіть об'єкт room з параметри:
 *   ключ height зі значенням 3
 *   ключ tv зі значенням samsung
 *   ключ big зі значенням true
 * 2 Виведіть в alert тип даних параметра big
 */

let room = {
    height: 3,
    tv: 'samsung',
    big: true,
};

alert (typeof room.big);

/**
 * 3 Перевірте, що цей об'єкт не є порожнім і що в ньому є ключ age.
 */

let user = {
   name: 'John',
   age: 30,
};

if (Object.keys(user).length === 0) {
    console.log ('Пустий об єкт');
} else if (!('age' in user)) {
    console.log('Немає ключа age');
}

/**
 * 4 Отримайте з цього об'єкту елемент, де name == "Bob" і збережіть це в будь-якій змінній.
 */

let users = {
    user_1: {
        name: 'John',
        age: 30,
    },
    user_2: {
        name: 'Bob',
        age: 21,
    },
    user_3: {
        name: 'Anna',
        age: 19,
    },
};

let userBob;

for (let key in users) {

    if (users[key].name === 'Bob') {
        userBob = users[key];
        break;
    }
};

console.log(userBob);

/**
 * 5 Видаліть із об'єктів (завдання 4) об'єкт з name == "Anna".
 */

for (let key in users) {
    
    if (users[key].name === 'Bob') {
        delete users[key];
        break;
    }
};

/**
 * Отримайте з об'єкта obj значення id у констанду id, не використовуючи вираз obj.id
 */

const obj = {
  id: 5,
  token: 12343423,
};

const id = obj['id'];
console.log(id);
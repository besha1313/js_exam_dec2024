console.log('----------Task_7_6----------');
console.log('-----Створити функцію конструктор яка дозволяє створювати обєкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, обєм двигуна.-----');

//     додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


function Car (model, producer, year, maxSpeed, engineV) {
    this.model = model,
    this.producer = producer,
    this.year = year,
    this.maxSpeed = maxSpeed,
    this.engineV = engineV
    this.drive = function () {
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };

    this.info = function (){
        for(let value in this){
            if( typeof this[value] != 'function') {        //чтобы не выводило функции
                console.log(`${value} - ${this[value]}`)
            }
        }
    };

    this.increaseMaxSpeed = function (newSpeed) {     //підвищує значення максимальної швидкості на значення newSpeed
        this.maxSpeed = this.maxSpeed + newSpeed
    };

    this.changeYear = function (newValue) {         //змінює рік випуску на значення newValue
        this.year = +newValue
    }

    this.addDriver = function (driver) {             //приймає об'єкт який "водій"
        this.driver = driver
    }

}

let car1 = new Car( 'VW Touareg', 'Slovakia', 2023, 250, 3.0)
console.log(car1);
car1.drive();
car1.info();

car1.increaseMaxSpeed (250);
console.log(car1);

car1.changeYear ('999999');
console.log(car1);

car1.addDriver({name: 'lorik', age: 28});
// console.log(car1);




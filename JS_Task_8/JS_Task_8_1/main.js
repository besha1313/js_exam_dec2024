console.log('----------Task_8_1----------');
console.log('-----Створити функцію, яка робить глибоку копію об\'єкту.-----');

// Додати перевірки на undefined, null, NaN.

// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.



class Car {

    constructor(model, producer, year, maxSpeed, engineV) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineV = engineV;

        this.drive = function () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        };

        this.info = function () {
            for(let value in this){
                if( typeof this[value] != 'function') {
                    console.log(`${value} - ${this[value]}`)
                }
                console.log(`${value} - ${this[value]}`)
            }
        };

        this.increaseMaxSpeed = function (newSpeed) {
            this.maxSpeed = this.maxSpeed + newSpeed
        };

        this.changeYear = function (newValue) {
            this.year = +newValue
        };

        this.addDriver = function (driver) {
            this.driver = driver
        };

    };
}

console.log('********** Проверка работы функций объекта созданного через конструктор **********');

let audi = new Car('Audi Q7', 'India', 2025, 225, 4.2);
// let audi2 = new Car('Audi Q5', 'India', 2025, 230, 4.2);


console.log(audi);
audi.drive();                 //проверка работы функций после создания объекта конструктором
audi.increaseMaxSpeed(225);
// audi.info()

// console.log(audi);
audi.drive();

console.log('********************* Начало создания копии ************************************************');

function DeepCopy (object){
    let keyF = [];
    let valueF = [];

    if(!!object){        //проверка объекта на undefined, null, NaN
        for(let value in object){
            if (typeof object[value] === 'function'){        //отделяем функции объекта перед выполнением глубокой копии
                keyF.push(value);
                valueF.push(object[value]);
            }
        }
        //востанавливаем структуру функции ключ-значение
        let keyValue = keyF.reduce(function(exitObject, keyF, indexKeyF){exitObject[keyF] = valueF[indexKeyF]; return exitObject}, {});
        //возвращаем функцию в объект посл выполнения глубокой копии
        this.object = Object.assign(JSON.parse(JSON.stringify(object)), keyValue);

    }
    else{
        console.log(`Not is object`);
    }
    return this.object;
}

console.log('********************* Конечный объект ************************************************');

let audi_Deep_Copy = new DeepCopy(audi);

console.log(audi_Deep_Copy);                  //проверка работы функции после создания объекта
audi_Deep_Copy.drive();
audi_Deep_Copy.increaseMaxSpeed(9546094506);   //проверка работы функции после создания объекта
audi_Deep_Copy.drive()     ;                   //проверка работы функции после создания объекта
audi_Deep_Copy.addDriver({name:'oko', age: 301});


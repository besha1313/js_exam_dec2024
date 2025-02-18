console.log('----------Task_7_8----------');
console.log('-----                    -----');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }

}

class Prince {

    constructor(name, age, findShoes) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
    }

}

let arrCinderells = [
    new Cinderella('olly', 18, 36),
    new Cinderella('nikki', 19, 35.5),
    new Cinderella('svity', 20, 36.5),
    new Cinderella('eva', 19.5, 37),
    new Cinderella('anny', 17, 35),
    new Cinderella('laura', 18.5, 38),
    new Cinderella('iren', 17.5, 37.5),
    new Cinderella('hloya', 18, 38.5),
    new Cinderella('kiki', 25, 39),
    new Cinderella('kony', 35, 35),
];

console.log(arrCinderells);

let findShoes = +prompt('введіть розмір туфельки, яку знайшов Принц від 35 до 39 з кроком 0.5');

let prince = new Prince('prince', 20, findShoes);
console.log(prince);

if(findShoes < 35 || findShoes > 39){
    console.log(`туфельку розміром ${findShoes} Принц НЕ знаходив, перезавантажте сторінку і введіть розмір з діапазону`)
}
else {
    console.log(`Принц знайшов туфельку розміром ${findShoes}`)

    for (const cinderellaEllem of arrCinderells) {
            if (prince.findShoes === cinderellaEllem.footSize && cinderellaEllem.age < 20) {   // умова за віком, щоб не потрапила в Попелюшки 35 річна Kony з 35 розміром ноги
            console.log(`парою для Принца є Попелюшка, яку рідні звуть ${cinderellaEllem.name.toUpperCase()} їй ${cinderellaEllem.age} років, розмір її туфельки ${cinderellaEllem.footSize}`);
            console.log(cinderellaEllem);
        }
        if (prince.findShoes === cinderellaEllem.footSize && cinderellaEllem.age >= 20) {
            console.log(`${cinderellaEllem.name.toUpperCase()}, Ви не Попелюшка (я впевнений що їй менше 20 років), а Вам ${cinderellaEllem.age} років, хоча у вас теж ${cinderellaEllem.footSize} розмір`)
            console.log(cinderellaEllem);
        }
    }
}

console.log('-----Знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку-----');

console.log(arrCinderells.find(cinderella => prince.findShoes === cinderella.footSize && cinderella.age < 20));
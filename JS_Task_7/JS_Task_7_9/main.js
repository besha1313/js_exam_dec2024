console.log('----------Task_7_9----------');
console.log('-----*Через Array.prototype. створити власний foreach, filter-----');


class Cinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }


}

class Prince {

    constructor(name, age, findShoes, height) {
        this.name = name;
        this.age = age;
        this.findShoes = findShoes;
        this.height = height;
    }
}

class GirlWithHeight extends Cinderella {

    constructor(name, age, footSize, height) {
        super(name, age, footSize);
        this.height = height;
    }
}

let arrGirlWithHeight = [
    new GirlWithHeight ('olly', 18, 36, 181),
    new GirlWithHeight ('nikki', 19, 35, 170),
    new GirlWithHeight ('svity', 20, 37, 175),
    new GirlWithHeight ('olena', 17, 39, 190),
    new GirlWithHeight ('eva', 19.5, 38, 180),
    new GirlWithHeight ('anny', 17, 39, 185),
    new GirlWithHeight ('oksana', 34, 37, 187),
    new GirlWithHeight ('laura', 18.5, 38, 190),
    new GirlWithHeight ('inna', 18.5, 38, 185),
    new GirlWithHeight ('iren', 17.5, 37, 185),
    new GirlWithHeight ('hloya', 18, 36, 185),
    new GirlWithHeight ('kiki', 25, 35, 175),
    new GirlWithHeight ('kony', 35, 36, 170),
    new GirlWithHeight ('anka', 25, 38, 170),
    new GirlWithHeight ('sofiya', 22, 39, 185),
];

console.log(arrGirlWithHeight);

let findShoes = +prompt('введіть розмір туфельки, що знайшов Принц від 35 до 39 з кроком 1');

let prince = new Prince('prince', 20, findShoes, 180);
console.log(prince);

//*************************************************************************************

//сначала Принц отбирает девушек с размером ноги туфельки и ростом (запомнил рост, когда танцевал с ней на балу, что она выше него)
//и затем таких девушек ставит по-росту

let arrFindFootSize = arrGirlWithHeight.filter(girl => prince.findShoes === girl.footSize && prince.height < girl.height).sort((x1, x2) => x1.height-x2.height)

if(arrFindFootSize.length === 0){
    console.log(`наразі тут не присутня дівчина, що ми шукаємо (з розміром ноги ${prince.findShoes} та на зріст вища ${prince.height})`)
}else{
    console.log(arrFindFootSize)
}


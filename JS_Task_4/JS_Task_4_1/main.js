console.log(`----------add_4_1----------`);
console.log(`----------створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і b----------`);

function square(a, b) {
    let result = a * b;
    return result;
}
let a = 8;
let b = 15
let squareRect = square(a, b);
console.log(`Площа прямокутника зі сторонами a = ${a} і b = ${b} дорівнює ${squareRect}`);


//**********************************************************************************************************


console.log(`----------add_4_2----------`);
console.log(`----------створити функцію яка обчислює та повертає площу кола з радіусом r----------`);

function square_2(r) {
    const PI = 3.14;
    let result = PI * r**2;
    return result;
}
let r = 5
let squareСircle = square_2(r);
console.log(`Площа кола з радіусом r = ${r} дорівнює ${squareСircle}`);


//**********************************************************************************************************


console.log(`----------add_4_3----------`);
console.log(`----------створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r----------`);

function square_3(h, r_2) {
    const PI = 3.14;
    let result = 2 * PI * r_2 * (h + r_2);
    return result;
}
let h = 15;
let r_2 = 8;
let squareCylinder = square_3(h, r_2);

console.log(`Площа циліндру висотою h = ${h} та радіусом r = ${r_2} дорівнює ${squareCylinder}`);


//**********************************************************************************************************


console.log(`----------add_4_4----------`);
console.log(`----------створити функцію яка приймає масив та виводить кожен його елемент----------`);

function printElemArr(arr){
    console.log(arr);
    for (let i = 0; i <arr.length; i++) {
        console.log(arr[i]);
    }
}

let arr = [13, 'stepan', true, 'oleksa', null, 88, {name: 'okten', age: 12}];
let print = printElemArr(arr);

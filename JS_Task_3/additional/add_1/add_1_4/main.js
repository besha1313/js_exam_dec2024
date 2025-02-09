console.log('----------add_1_4----------');

console.log('--------Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.-------');

let arr = [13, 21, 26, 8, 6, 81, -78, -7, -9, -13];
console.log(arr);
for (let ar of arr) {
    console.log(ar);
}


console.log('----------add_1_5----------');
console.log('------Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.-----');

let strings = ['oleg', 'lorik', 'katy', 'mihail', 'vera', 'sneg', 'oil', 'divali', 'house', 'okten']
for (let i = 0; i < strings.length; i++) {
    console.log(strings[i]);
}


console.log('----------add_1_6----------');
console.log('---Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.---');

let others = ['oleg', 13, 'katy', undefined, true, -88, 'oil', false, null, 'okten']
let ii = 0;
while (ii < others.length){
    console.log(others[ii]);
    ii++;
}


console.log('----------add_1_7----------');
console.log('---Створити масив з 10 елементів різн. типу. З if та typeof вивести тільки булеві елементи.---');

let all_1 = ['oleg', 13, 'katy', false, true, -88, 'oil', false, 25, 'okten']

for (let k = 0; k < all_1.length; k++) {
    let el = all_1[k]
    if(typeof el === "boolean"){
        console.log(all_1[k])
    }
}


console.log('----------add_1_8----------');
console.log('---Створити масив з 10 елементів різн. типу. З if та typeof вивести тільки числові елементи.---');

// let all_1 = ['oleg', 13, 'katy', false, true, -88, 'oil', false, 25, 'okten']

for (let k1 = 0; k1 < all_1.length; k1++) {
    let int = all_1[k1]
    if(typeof int === 'number'){
        console.log(all_1[k1])
    }
}


console.log('----------add_1_9----------');
console.log('---Створити масив з 10 елементів різн. типу. З if та typeof вивести тільки рядкові елементи.---');

// let all_1 = ['oleg', 13, 'katy', false, true, -88, 'oil', false, 25, 'okten']

for (let k2 = 0; k2< all_1.length; k2++) {
    let int = all_1[k2]
    if(typeof int === 'string'){
        console.log(all_1[k2])
    }
}

console.log('----------add_1_10----------');
console.log('----Створ. порожн. масив. Наповнити його 10 (різними типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.----------');
let new_arr = [];

new_arr[0] = 'oil';
new_arr[1] = [1, 2, 3, 4, 5];
new_arr[2] = true;
new_arr[3] = 13;
new_arr[4] = {name: 'okten', age: 13, status: true};
new_arr[5] = false;
new_arr[6] = null;
new_arr[7] = undefined;
new_arr[8] = 'gold';
new_arr[9] = 34;

for (const newArrElement of new_arr) {
    console.log(newArrElement);
}


console.log('----------add_1_11----------');
console.log('-----Ств. цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write--------');
document.write(`<div>`);
for (let z = 1; z < 11; z++) {
    console.log(z);
    document.write(` крок № ${z} `)
}
document.write(`</div>`);

console.log('----------add_1_12----------');
console.log('----------Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write----------');

document.write(`<div>`);
for (let zz = 1; zz < 101; zz++) {
    console.log('крок' + ' ' + zz);
    document.write(` крок ${zz} `)
}

document.write(`</div>`);

console.log('----------add_1_13----------');
console.log('---Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write---');

document.write(`<div>`);
let variable = 0;
for (let zzz = 1; zzz < 101; zzz++) {
    console.log(`крок ${zzz} значення ${variable}`);
    document.write(`знач ${variable} це крок ${zzz}, `)
    variable = variable+2;
}
document.write(`</div>`);


console.log('----------add_1_14----------');
console.log('---Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write---');

document.write(`<div>`);
for (let p = 1; p < 101; p++) {
    let isEven1 = p
    if(isEven1 = p % 2 === 0){
        console.log(`це ПАрний крок ${p}`);
        document.write(`це ПАрний крок ${p}, `)
    }
}
document.write(`</div>`);


console.log('----------add_1_15----------');
console.log('---Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write---');

document.write(`<div>`);
for (let v = 1; v < 101; v++) {
    let isOdd = v;
    if(isOdd = v % 2 !== 0){
        console.log(`це НЕпарний крок ${v}`);
        document.write(`це НЕпарний крок ${v}, `)
    }
}
document.write(`</div>`);






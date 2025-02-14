// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
console.log(`----------add_3_1-----Створити пустий масив----------`);
console.log(`----------заповнити його 50 ПАрними числами за допомоги циклу----------`);

let arr = [];
let a = 0;
for (let i = 0; i < 50; i++) {
    arr[i] = a;
    // console.log(arr);
    a = a + 2;
}
console.log(arr);



console.log(`----------add_3_2-----Створити пустий масив----------`);
console.log(`----------заповнити його 50 НЕпарними числами за допомоги циклу----------`);

let arr_1 = [];
let aa = -23;
for (let ii = 0; ii < 50; ii++) {
    arr_1[ii] = aa;
    // console.log(arr_1);
    aa = aa + 2;
}
console.log(arr_1);



console.log(`----------add_3_3-----Створити пустий масив----------`);
console.log(`----------Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)----------`);


let arr_3 = [];

for (let i_3 = 0; i_3 < 20; i_3++) {
        arr_3.push(Math.floor(Math.random() * 50))
}
console.log(arr_3);




console.log(`----------add_3_4-----Створити пустий масив----------`);
console.log(`----------Заповнити масив 20ма рандомними числами. в діапазоні від 8 до 732----------`);

let arr_34 = [];

for (let i_4 = 0; i_4 < 20; i_4++) {
    arr_34.push(Math.floor(Math.random()*(732 - 8)));
}
console.log(arr_34);



console.log(`----------add_3_5-----Створити пустий масив----------`);
console.log(`----------Вивести за допомогою console.log кожен третій елемен----------`);

let arr3_5 = arr_34;
let every3 = [];
for (let i_5 = 0; i_5 < arr3_5.length; i_5++) {
    if ((i_5+1) %3 === 0){
        every3.push(arr3_5[i_5])
        console.log(arr3_5[i_5])
    }
}
console.log(every3)



console.log(`----------add_3_6-----Створити пустий масив----------`);
console.log(`----------Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним----------`);
console.log(`----------та записати їх в новий масив----------`);

let arr3_6 = arr_34;
let every3_Even = [];
for (let i = 0; i < arr3_6.length; i++) {
    if ((i+1) %3 === 0 && arr3_6[i] %2 ===0){
        every3_Even.push(arr3_6[i])
        console.log(arr3_6[i])
    }
}
console.log(every3_Even)



console.log(`----------add_3_6-----Вивести кожен елемент масиву, сусід справа якого є парним----------`);
console.log(`----------EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56----------`);

let exmple = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];

for (let i = 0; i < exmple.length; i++) {
    if(exmple[i+1] % 2 === 0){
        console.log(exmple[i])
    }
}



console.log(`-----add_3_7_Є масив з числами. Які характеризують вартість окремої покупки. Обрахувати середній чек.---------`);

let purchase = [100,250,50,168,120,345,188];
let sum = 0;
for (const number of purchase) {
    sum = sum+number;

}
console.log(sum/purchase.length)



console.log(`-----add_3_8_Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.---------`);


let arr_38 = [];
for (let i = 0; i < 10; i++) {
    arr_38.push(Math.floor(Math.random()*(13 - 0)));
}
console.log(arr_38);

let arrX5 = [];
for (const arr_38Element of arr_38) {
    arrX5.push(arr_38Element * 5)
}
console.log(arrX5)



console.log(`-----add_3_9_Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.---------`);

let arr_39 = [13, true, 'okten', -88, null, undefined, [], 99, {}, -4];
console.log(arr_39);

let arrNumber = [];
for (const arr_39Element of arr_39) {
    if(typeof arr_39Element === "number"){
        arrNumber.push(arr_39Element)
    }
}
console.log(arrNumber)




console.log(`----------add_3_10-----Дано 2 масиви з рівною кількістю об'єктів.----------`);
console.log(`-----З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id". Записати цей об'єкт в новий масив------`);

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let arrNew = [];

for (let i = 0; i < usersWithId.length; i++) {
    arrNew[i] = usersWithId[i];
    for (const citiesWithIdElem of citiesWithId) {
        if (arrNew[i].id === citiesWithIdElem.user_id) {
            arrNew[i].addres = citiesWithIdElem
        }
    }
}
console.log(arrNew)


console.log(`-------add_3_11---Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.-------`);


let arr_3_11 = [];
for (let i = 0; i < 10; i++) {
    arr_3_11.push(Math.floor(Math.random()*(20 - 0)));
}
console.log(arr_3_11);

for (const arr311Element of arr_3_11) {
    if (arr311Element %2 === 0){
        console.log(arr311Element)
    }
}


console.log(`-------add_3_12---Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.-------`);


let arr_3_12 = [];
for (let i = 0; i < 10; i++) {
    arr_3_12.push(Math.floor(Math.random()*100));
}
console.log(arr_3_12);

let k = 0;
let arrNew_3_12 = [];
while (k < arr_3_12.length){
    arrNew_3_12[k]= arr_3_12[k]
    k++
}
console.log(arrNew_3_12)


console.log(`-------add_3_13_A---Дано масив: ['a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.-------`);

let arr_For = [ 'a', 'b', 'c'];
let word = '';
for (const string of arr_For) {
    word = word + string
}
console.log(word);


console.log(`-------add_3_13_A---Дано масив: [ 'o', 'k', 't', 'e', 'n'] . За допомогою циклу while зібрати всі букви в слово.-------`);

let arr_While = ['o', 'k', 't', 'e', 'n'];
let word_W = '';
let x = 0
while (x < arr_While.length){
    word_W = word_W + arr_While[x]
    x++
}
console.log(word_W);



console.log(`-------add_3_13_B---Дано масив: ['g', 'r', 'a', 'y', '', 'h', 'e', 'a', 'd']. За допомогою циклу for of зібрати всі букви в слово..-------`);

let arr_G = ['g', 'r', 'a', 'y', ' ', 'h', 'e', 'a', 'd'];

let word_G = '';
for (const wordG_El of arr_G) {
    word_G = word_G + wordG_El
}

console.log(word_G);

console.log(`----------Task_5_13----------`);
console.log(`------Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)-------`);


let exchange = (sumUAH,currencyValues,exchangeCurrency) => {

    let itogo = sumUAH;

        for (curVal of currencyValues){
            if(exchangeCurrency.toUpperCase() === curVal.currency.toUpperCase()){
                itogo = sumUAH / curVal.value
            }
        }

    return itogo.toFixed(2);
}

let currencyValues = [
    {currency:'USD',value:25},
    {currency:'EUR',value:42},
    {currency:'PLN',value:9.65}
    ];

let sumUAH = +prompt(`скільки гривень Ви бажаете обміняти?`);
let exchangeCurrency = prompt(`введіть на яку Валюту: USD EUR PLN`);

let howMany = exchange(sumUAH,currencyValues,exchangeCurrency);
console.log(`${sumUAH} UAH = ${howMany} ${exchangeCurrency.toUpperCase()}`);




















//
//
//
//
// function swap (arr, i_1, i_2){
//
//     let rezult = [];
//     let arr_i_1 = arr[i_1];
//     let arr_i_2 = arr[i_2];
//     console.log(`${arr} початковий масив`);
// // проверка введенных индексов на принадлежность длине массива
//     if (i_1 < 0 || i_1 >= arr.length){
//         console.log(`значення індексу і_1 має бути від 0 до ${arr.length-1}. Введено ${i_1}. Перестановка елементів НЕ ВІДБУЛАСЯ. ПЕРЕВІРТЕ аргумент і_1.`)
//         return arr;
//     }
//     if (i_2 < 0 || i_2 >= arr.length) {
//         console.log(`значення індексу і_2 має бути від 0 до ${arr.length-1}. Введено ${i_2}. Перестановка елементів НЕ ВІДБУЛАСЯ. ПЕРЕВІРТЕ аргумент і_2`)
//         return arr;
//     }
//
//     console.log(`${arr} поміняти в масиві місцями елементи з індексом ${i_1} та ${i_2}, це ${arr[i_1]} та ${arr[i_2]}`);
//
//     for (let i = 0; i < arr.length; i++) {
//         if(i === i_1){
//             rezult[i] = arr_i_2
//         }else if(i === i_2){
//             rezult[i] = arr_i_1
//         }else{
//             rezult[i] = arr[i]
//         }
//     }
//     return rezult;
// }
//
// let i_1 = 7;
// let i_2 = 1;
// // let arr = [0, 11, 22, 33, 44, 55]
//
// let arr = [-13, 'OKTEN', -15, 67, 34, 888, -17, true, -17.5]
//
// let itog = swap(arr, i_1, i_2)
// console.log(`${itog} це масив після перестановки елементів`)
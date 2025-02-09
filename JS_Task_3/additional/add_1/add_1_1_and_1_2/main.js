// add_1_1


console.log('----------add_1_1----------');

// add_1_1
// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль


let arr_numbers = [13, 21, 26, 8, 25];

for (let arrNumber of arr_numbers) {
    console.log(arrNumber)
}

console.log('----------------------------')

let arr_strings = ['oleg', 'lorik', 'katy', 'mihail', 'eva'];

for (let arrString of arr_strings) {
    console.log(arrString);
}

console.log('----------------------------')

let arr_alls = [1313, 'lorik', true, 'mihail', false];

for (let arrAll of arr_alls) {
    console.log(arrAll);
}

console.log('------Створено пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль')

let arr = [];

arr[0] = 'sun';
arr[1] = 13;
arr[2] = true;
arr[3] = 'lorik';
arr[4] = 13;
arr[arr.length] = 99;

for (const arrElement of arr) {
    console.log(arrElement);
}
console.log(arr);
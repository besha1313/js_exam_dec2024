console.log(`----------Task_4_12----------`);
console.log(`------створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах-------`);
console.log(`------Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]-------`);


function swap (arr, i_1, i_2){

    let rezult = [];
    let arr_i_1 = arr[i_1];
    let arr_i_2 = arr[i_2];
    console.log(`${arr} початковий масив`);
// проверка введенных индексов на принадлежность длине массива
    if (i_1 < 0 || i_1 >= arr.length){
        console.log(`значення індексу і_1 має бути від 0 до ${arr.length-1}. Введено ${i_1}. Перестановка елементів НЕ ВІДБУЛАСЯ. ПЕРЕВІРТЕ аргумент і_1.`)
        return arr;
    }
    if (i_2 < 0 || i_2 >= arr.length) {
        console.log(`значення індексу і_2 має бути від 0 до ${arr.length-1}. Введено ${i_2}. Перестановка елементів НЕ ВІДБУЛАСЯ. ПЕРЕВІРТЕ аргумент і_2`)
        return arr;
    }

    console.log(`${arr} поміняти в масиві місцями елементи з індексом ${i_1} та ${i_2}, це ${arr[i_1]} та ${arr[i_2]}`);

    for (let i = 0; i < arr.length; i++) {
        if(i === i_1){
            rezult[i] = arr_i_2
        }else if(i === i_2){
            rezult[i] = arr_i_1
        }else{
            rezult[i] = arr[i]
        }
    }
    return rezult;
}
let arr = [-13, 'OKTEN', -15, 67, 34, 888, -17, true, -17.5]

let i_1 = +prompt(`введіть index_1 від 0 до ${arr.length-1}`);
let i_2 = +prompt(`введіть index_2 від 0 до ${arr.length-1}`);;
// let arr = [0, 11, 22, 33, 44, 55]



let itog = swap(arr, i_1, i_2)
console.log(`${itog} це масив після перестановки елементів`)






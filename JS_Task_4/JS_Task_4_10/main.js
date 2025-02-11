console.log(`----------Task_4_10----------`);
console.log(`------створити функцію яка повертає найменьше число з масиву-------`);

function minArr (arrIn){
    console.log(arrIn);
    let minX= arrIn[0];
    for (let i = 1; i < arrIn.length; i++) {
        if(arrIn[i] < minX){
        minX = arrIn[i]
        }
    }
    return minX;
}

let arr = [-13, 8, -15, 67, 34, 888, -17, 34, -17.5]

let xMin = minArr(arr)
console.log(`найменше з масиву дорівнює: ${xMin}`)


console.log(`*****************************************************************`);


console.log(`----------Task_4_11----------`);
console.log(`------створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13-------`);

function sum (arrSum) {
    console.log(arrSum)
    let rezultSum = arrSum[0];
    for (let i = 1; i < arrSum.length; i++) {
        rezultSum = rezultSum + arrSum[i]
    }
    return rezultSum;
}

let startArr = [-1, 0, 1, 13];

let sumX = sum(startArr);
console.log(`сумма елементів массиву дорівнює ${sumX}`)
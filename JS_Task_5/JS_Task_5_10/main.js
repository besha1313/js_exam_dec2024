console.log(`----------Task_5_10----------`);
console.log(`------створити функцію яка повертає найменьше число з масиву-------`);

let minArr = (arrIn) => {
    console.log(arrIn);
    let minX= arrIn[0];
    for (let i = 1; i < arrIn.length; i++) {
        if(arrIn[i] < minX){
        minX = arrIn[i]
        }
    }
    return minX;
}

let arr = [-3, 34, 75, 67, 34, 888, -4, -8, -31.3]

let xMin = minArr(arr)
console.log(`найменше з масиву дорівнює: ${xMin}`)


console.log(`*****************************************************************`);


console.log(`----------Task_5_11----------`);
console.log(`------створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13-------`);

let sum = (arrSum) => {
    console.log(arrSum)
    let rezultSum = arrSum[0];
    for (let i = 1; i < arrSum.length; i++) {
        rezultSum = rezultSum + arrSum[i]
    }
    return rezultSum;
}

let startArr = [-1, 0, 1, 64];

let sumX = sum(startArr);
console.log(`сумма елементів массиву дорівнює ${sumX}`)
// add_1_3


console.log('----------add_1_3----------');

let arr = [2,17,13,6,22,31,45,66,100,-18]

console.log('----------перебрати циклом while----------');
let i = 0;
while (i < arr.length){
    console.log(arr[i])
    i++;
}

console.log('----------перебрати циклом for----------');
for (let j = 0; j < arr.length; j++) {
    console.log(`елемент ${arr[j]} з index ${j}`)
}

console.log('----------перебрати циклом while та вивести  числа тільки з непарним індексом---------');

let k = 0;
while (k < arr.length){
    let x = k
    if (x = x % 2 === 0){
        // console.log(`${arr_w[k]} потому что индекс ${k} парний`)
    }else{
        console.log(`Вивели елемент ${arr[k]}, тому що його індекс ${k} НЕпарний`)
    }
    k++;
}

console.log('----------перебрати циклом for та вивести  числа тільки з непарним індексом----------');
// let arr = [2,17,13,6,22,31,45,66,100,-18]

for (let l = 0; l < arr.length; l++) {
    let ll = l;
    if(ll = l % 2 !== 0){
        console.log(`Вивели елемент ${arr[l]}, тому що його індекс ${l} НЕпарний`)
    }
}

console.log('----------перебрати циклом while та вивести числа тільки парні значення----------');
// let arr = [2,17,13,6,22,31,45,66,100,-18]
let t = 0;
while (t < arr.length){
    let tt = arr[t];
    if (tt = arr[t] %2 === 0){
        console.log(`Виводимо число ${arr[t]}, тому що значення ${arr[t]} парне`)
    }
    t++;
}

console.log('----------перебрати циклом for та вивести числа тільки парні значення----------');
// let arr = [2,17,13,6,22,31,45,66,100,-18]
for (let r = 0; r < arr.length; r++){
    let rr = arr[r];
    if (rr = arr[r] % 2 ===0){
        console.log(`Виводимо число ${arr[r]}, тому що число ${arr[r]} парне`)
    }
}

console.log('----------замінити кожне число кратне 3 на слово "okten"----------');
// let arr = [2,17,13,6,22,31,45,66,100,-18]

console.log(arr);
for (let okt = 0; okt < arr.length; okt++){
    let okt_1 = arr[okt];
    if(okt_1 = arr[okt] % 3 === 0){
        console.log(`елемент ${arr[okt]} кратний 3, тому змінюємо елемент масиву на 'okten'`);
        arr[okt] = 'okten';
    }
}
console.log(arr);

console.log('----------вивести масив в зворотньому порядку----------');
let arr_1 = [2,17,13,6,22,31,45,66,100,-18]
console.log(arr_1);
let arr_zvor = [];
// console.log(arr_zvor);
for (let zvor = arr_1.length-1; zvor >= 0; zvor--){
    arr_zvor[arr_zvor.length] = arr_1[zvor]
}
console.log(arr_zvor)



console.log('-----------------------------Зворотні завдання------------------------');
console.log('----------------------------------------------------------------------');



console.log('----------перебрати циклом while---- зворотньо------');
let arr_z = [2,17,13,6,22,31,45,66,100,-18]
console.log(arr_z);

let iz = arr_z.length-1;

while (iz > -1){
    console.log(arr_z[iz])
    iz--;
}

console.log('----------перебрати циклом for---зворотньо-------');
console.log(arr_z);

for (let oz = arr_z.length-1; oz > -1; oz--){
    console.log(arr_z[oz])
}

console.log('----------перебрати циклом while та вивести числа тільки з непарним індексом-----зворотньо----');
// let arr_z = [2,17,13,6,22,31,45,66,100,-18]
console.log(arr_z);

let iq = arr_z.length-1;
while (iq > -1){
    let isIq = iq
    if(isIq = iq % 2 !== 0){
        console.log(`Виводимо ${arr_z[iq]}, тому що його індекс ${iq} НЕпарний`)
    }
    iq--;
}

console.log('----------перебрати циклом for та вивести  числа тільки з непарним індексом-----зворотньо-----');
// let arr_z = [2,17,13,6,22,31,45,66,100,-18]
console.log(arr_z);

for(let qw = arr_z.length-1; qw > -1; qw--){
    let isIq = qw;
    if(isIq = qw % 2 !== 0){
        console.log(`Виводимо ${arr_z[qw]}, тому що його індекс ${qw} НЕпарний`)
    }
}


console.log('----------перебрати циклом while та вивести числа тільки парні значення-------зворотньо---');
// let arr_z = [2,17,13,6,22,31,45,66,100,-18]
console.log(arr_z);

let re = arr_z.length-1;
while (re > -1){
    let isEven = arr_z[re]
    if(isEven = arr_z[re] % 2 === 0){
        console.log(`Виводимо число ${arr_z[re]}, тому що воно Парне`)
    }
    re--;
}


console.log('----------перебрати циклом for та вивести числа тільки парні значення------зворотньо----');
// let arr_z = [2,17,13,6,22,31,45,66,100,-18]
console.log(arr_z);

for (let we = arr_z.length-1; we > -1; we--) {
    let isEven = arr_z[we]
    if(isEven = arr_z[we] % 2 === 0){
        console.log(`Виводимо число ${arr_z[we]}, тому що воно Парне`)
    }
}


console.log('----------замінити кожне число кратне 3 на слово "okten"-------зворотньо---');
// let arr_z = [2,17,13,6,22,31,45,66,100,-18]
console.log(arr_z);
let arr_z_zvor = [];
for (let rt = arr_z.length-1; rt > -1; rt--) {
    let is_on3 = arr_z[rt]
    if(is_on3 = arr_z[rt] % 3 === 0){
        console.log(`Змінюємо число ${arr_z[rt]} на 'OKTEN', тому що воно кратне 3`);
        arr_z_zvor[arr_z_zvor.length] = 'OKTEN';
    }else{
        arr_z_zvor[arr_z_zvor.length] = arr_z[rt];
    }
}
console.log(arr_z_zvor);

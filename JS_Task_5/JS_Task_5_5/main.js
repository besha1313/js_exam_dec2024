console.log(`----------Task_5_5----------`);
console.log(`-------створити функцію яка створює параграф з текстом та виводить його через document.write.-------`);
console.log(`-----------------Текст задати через аргумент---------------------`);

document.write(`----------Task_5_5----------`);

let buildP = (text) => {
    document.write(`
        <p>${text}</p>
    `)
    console.log(text);
}
let textP = buildP('divali - fertility festival')


//**********************************************************************************************************

console.log(`----------Task_5_6----------`);
console.log(`------створити функцію яка створює ul з трьома елементами li та виводить його через document.write.-------`);
console.log(`-----------------Текст li задати через аргумент всім однаковий---------------------`);

document.write(`----------Task_5_6----------`);

let buildUl = (howLi, textLi) => {
    document.write(`<ul>`)
        for (let i = howLi; i !== 0; i--) {
            document.write(`<li>${textLi}</li>`)
            console.log(textLi);
        }
    document.write(`</ul>`)
}

let ul = buildUl(3, 'okten - realy the best school!');


//**********************************************************************************************************


console.log(`----------Task_5_7----------`);
console.log(`------створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.-------`);
console.log(`------Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write--------------------`);

document.write(`----------Task_5_7----------`);
document.write('Виконуючи попереднє завдання вже застосував цикл для li, тому тут викликаю ту саму функцію.');



varLi = 7;
varTextLi = 'function is the cool';
let task_5_7 = buildUl(varLi, varTextLi);

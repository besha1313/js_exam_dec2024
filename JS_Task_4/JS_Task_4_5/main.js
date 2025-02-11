console.log(`----------Task_4_5----------`);
console.log(`-------створити функцію яка створює параграф з текстом та виводить його через document.write.-------`);
console.log(`-----------------Текст задати через аргумент---------------------`);

document.write(`----------Task_4_5----------`);
function buildP (text) {
    document.write(`
        <p>${text}</p>
    `)
    console.log(text);
}
let textP = buildP('divali - fertility festival')


//**********************************************************************************************************

console.log(`----------Task_4_6----------`);
console.log(`------створити функцію яка створює ul з трьома елементами li та виводить його через document.write.-------`);
console.log(`-----------------Текст li задати через аргумент всім однаковий---------------------`);

document.write(`----------Task_4_6----------`);
function buildUl (howLi, textLi) {

    document.write(`<ul>`)
            for (let i = howLi; i !== 0; i--){
                document.write(`<li>${textLi}</li>`)
                console.log(textLi)
            }
    document.write(`</ul>`)
}

let varLi = 3;
let varTextLi = 'okten - the best school!';
let ul = buildUl(varLi, varTextLi);


//**********************************************************************************************************


console.log(`----------Task_4_7----------`);
console.log(`------створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.-------`);
console.log(`------Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write--------------------`);

document.write(`----------Task_4_7----------`);
document.write('Виконуючи попереднє завдання вже застосував цикл для li, тому тут викликаю ту саму функцію. Вау - одразу відчуваємо користь від функцій та циклів.');


varLi = 5;
varTextLi = 'function is the cool';
let task_4_7 = buildUl(varLi, varTextLi);

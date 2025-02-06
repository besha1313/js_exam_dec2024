// Task 2_11
// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

console.log('----------Task_2_11----------');

// let x = 'okten';
// let x = 13;
// let x;                   //undefined false
// let x = NaN;            //false
let x = null;           //false
// let x = false;          //false
// let x = 0;              //false
// let x = true;

console.log(typeof x, x)

x = !!x;

if (x === false){
    x = 'default';
    console.log(`змінна x отримує значення "default", ${x}`)
}

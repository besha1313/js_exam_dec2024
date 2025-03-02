console.log('----------Task_10_4----------');
// є сторінка, на якій є блок, в якому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let startNumber = -5

let block = document.createElement('div');
let number = document.createElement('h1');
block.appendChild(number);

let clickNumber = +localStorage.getItem('num');
number.innerText = `${startNumber + clickNumber}`;
clickNumber++;

localStorage.setItem('num', clickNumber)

document.body.append(block);













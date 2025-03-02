console.log('----------Task_10_9----------');
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
// зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
// При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається


let startNumber = 90;

let block = document.createElement('div');
let number = document.createElement('h1');
let currency = document.createElement('h2');
currency.innerText = 'UAH';
let text = document.createElement('p');

block.append(number, currency);
text.innerText = '';
let nowTime = new Date();

if (localStorage.getItem('time') === null){
    number.innerText = `${startNumber + +localStorage.getItem('number') + 10}`;
    block.append(number, currency);
    localStorage.setItem('number', +localStorage.getItem('number') + 10);
    localStorage.setItem('time', nowTime.getTime());
}

if(nowTime.getTime() - localStorage.getItem('time') > 10000){
    // text.innerText = '';
    number.innerText = `${startNumber + +localStorage.getItem('number') + 10}`;
    block.append(number, currency);
    localStorage.setItem('number', +localStorage.getItem('number') + 10);
    localStorage.setItem('time', nowTime.getTime());
}
else {
    number.innerText = `${startNumber + +localStorage.getItem('number')}`;
    text.innerText = 'почекайте ще декілька секунд';
    block.append(text);

}

document.body.append(block);


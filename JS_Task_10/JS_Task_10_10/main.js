console.log('----------Task_10_10----------');

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let arr = [];
let x = 0;

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

let main = document.getElementById('main');

let msgDiv = document.createElement('h3');

let pagination = function (x) {
    // console.log(x);
    for (let i = x; i < x+10; i++) {
        arr.push(i+1);
        card = document.createElement('div');
        card.classList.add('card');
        card.innerText = arr[i];
        main.appendChild(card);
    }
}

// ------------------------вызов первых 10 элементов при первой загрузке страницы------------------------
let start = pagination(x);
// ------------------------кнопка prev------------------------
prevButton.onclick = function () {
    if (x === 0){
        msgDiv.innerHTML = '';
        msgDiv.classList.remove('endMsgBlock');
        msgDiv.classList.add('startMsgBlock');
        msgDiv.innerText = 'Це початок нашого каталогу. Тисніть іншу кнопку.';
        main.appendChild(msgDiv);
    }
    if (x >= 10) {
        x = x - 10;
        main.innerHTML = '';
        pagination(x);
        return x;
    }
}

// ------------------------кнопка next------------------------
nextButton.onclick = function () {
    if (x < 90){
        x = x + 10;
        main.innerHTML = '';
        pagination(x);
        return x;
    }
    if (x === 90){
        msgDiv.innerHTML = '';
        msgDiv.classList.remove('startMsgBlock');
        msgDiv.classList.add('endMsgBlock')
        msgDiv.innerText = 'Нажаль, це остання сторінка нашого каталогу. Поки що...'
        main.appendChild(msgDiv)
    }
}







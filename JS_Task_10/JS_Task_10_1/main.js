console.log('----------Task_10_1----------');
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".


let msg = document.createElement('h1');
msg.setAttribute('id', 'text')
msg.innerText = 'яка школа?'

let btn1 = document.createElement('button');
btn1.setAttribute('id', 'btn1')
btn1.innerText = 'тиць';

let msg2 = document.createElement('h2');
msg2.setAttribute('id', 'text2');
msg2.innerText = 'звісно ОКТЕN!!!'

btn1.onclick = function () {
    console.log('click')
    msg.style.background = 'none'
    msg.style.color = 'white'
    msg2.style.background = 'silver'
    msg2.style.color = 'blue'
}

document.body.append(msg, btn1, msg2)


console.log('----------Task_10_2----------');
// створити інпут, який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

let task = document.createElement('h2');
task.innerText = 'Task_10_2';

let form = document.createElement('form');
form.classList.add('id', 'form');
let inputAge = document.createElement('elemInput');

inputAge.innerHTML = '<input type="number" id="inputAge" placeholder="введіть свій вік" min="1" max="120">';
form.append(inputAge)

let btn2 = document.createElement('button')
btn2.setAttribute('id', 'btn2')
btn2.innerText = 'підтвердити';
let msg3 = document.createElement('h4');


btn2.onclick = function (event) {
    event.preventDefault()
    if(document.getElementById('inputAge').value > 18){
        msg3.innerText = `Вам ${document.getElementById('inputAge').value}. Вітаємо - Ви дорослі.`;
        msg3.style.background = 'lightgreen'
        document.body.appendChild(msg3)
    }
    else {
        msg3.innerText = `Вам ${document.getElementById('inputAge').value}. Ви молоді. Завітайте після 18 років.`;
        msg3.style.background = 'pink';
        document.body.appendChild(msg3)
    }
}

form.append(inputAge, btn2)

document.body.append(task, form)
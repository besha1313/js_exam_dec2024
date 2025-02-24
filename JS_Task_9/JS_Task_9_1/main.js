console.log('----------Task_9_1----------');
// console.log('-----створити блок-----');
// console.log('-----додати йому класи wrap, collapse, alpha, beta-----');
// console.log('-----додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту-----');
// console.log('-----додати цей блок в body-----');


let elDiv = document.createElement('div');

elDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');

elDiv.innerText = 'hello okten'

document.body.appendChild(elDiv)

console.log('-----клонувати його повністю, та додати клон в body-----');

let elClon = elDiv.cloneNode(true)

document.body.append(elClon)



console.log('----------Task_9_2----------');
console.log('----------Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)----------');

let arr = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul');

for (let item of arr) {
    let li = document.createElement('li');
    li.innerText = item;
    ul.append(li);
}

document.body.append(ul)



console.log('----------Task_9_3----------');
console.log('----------Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration----------');
//Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let h5 = document.createElement('h5')
h5.innerText = '----------Task_9_3----------';
document.body.appendChild(h5);

let div_93 = document.createElement('div');
div_93.classList.add('div_93');
document.body.appendChild(div_93);

for (let value of coursesAndDurationArray) {
    console.log(value)
    console.log(typeof value.title)
    let div = document.createElement('div');

    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');

    h2.innerText = value.title;
    h3.innerText = value.monthDuration;

    div.append(h2, h3);

    div_93.appendChild(div)

}











console.log('----------Task_10_3----------');

// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповнити форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let task = document.createElement('h1');
task.innerText = 'Task_10_3';

let form = document.createElement('form');
form.setAttribute('id', 'form');

let inputName = document.createElement('inputName');
inputName.innerHTML = '<input type="text" id="inputName" placeholder="введіть своє і`мя">';

let inputSurname = document.createElement('inputSurname');
inputSurname.innerHTML = '<input type="text" id="inputSurname" placeholder="введіть своє прізвище">';

let inputAge = document.createElement('inputAge');
inputAge.innerHTML = '<input type="number" id="inputAge" placeholder="введіть свій вік" min="1" max="120">';

let btnReset = document.createElement('btnReset')
btnReset.innerHTML = '<input type="reset" id="btnReset" value="Reset">';

let btnAddForm = document.createElement('btnAddForm')
btnAddForm.innerHTML = '<input type="button" id="btnAddForm" value="Підтвердити">';

form.append(inputName, inputSurname, inputAge, btnReset, btnAddForm);

let userDiv = document.createElement('div');
userDiv.setAttribute('id', 'userDiv');

let userName = document.createElement('h2');
let userSurname = document.createElement('h2');
let userAge = document.createElement('h2');

userDiv.append(userName, userSurname, userAge);

btnAddForm.onclick = function () {
    if(document.getElementById('inputName').value.length != 0 &&
        document.getElementById('inputSurname').value.length != 0 &&
        document.getElementById('inputAge').value.length != 0){

        userName.innerText = `Ім'я: ${(document.getElementById('inputName').value).toUpperCase()}`
        userName.style.color = 'green';
        userSurname.innerText = `Прізвище: ${(document.getElementById('inputSurname').value).toUpperCase()}`
        userAge.innerText = `Вік: ${(document.getElementById('inputAge').value).toUpperCase()}`
        userDiv.style.background = '#f6e590';
        document.body.appendChild(userDiv)

    }
    else {
        userName.innerText = 'заповніть усі поля';
        userName.style.color = 'red';
        userDiv.style.background = 'none';

        document.body.appendChild(userDiv)
    }

}

document.body.append(task, form)
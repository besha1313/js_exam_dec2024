console.log('----------Task_10_8----------');


// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let form = document.createElement('form')

form.innerHTML = `
    <form action="">
        <label for="inputTr" >Кількість рядків</label>
            <input type="number" name="" id="inputTr" min="0">
        <label for="inputTd">Кількість стовбчиків</label>
            <input type="number" name="" id="inputTd" min="0">
            
        <label for="inputText">Текст</label>
            <input type="text" name="" id="inputText">
        
        <input type="submit" id="button" value="будувати таблицю">
    </form>
`;

let table = document.createElement('table');

document.body.append(form)

form.onsubmit = function (event) {
    event.preventDefault();

    for (let i = 0; i < +inputTr.value ; i++) {
        let trTable = document.createElement('tr')
        table.appendChild(trTable)
        for (let j = 0; j < +inputTd.value; j++) {
            let columnTable = document.createElement('td')
            columnTable.innerText = inputText.value
            
            trTable.appendChild(columnTable)
        }

    document.body.append(table)
    }
}











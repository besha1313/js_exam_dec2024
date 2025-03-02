console.log('----------Task_10_6----------');


//створити конвертор ваги з кг в фунти. данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

let startKg = document.getElementById('startKg');
let rezult = document.getElementById('rezult');

startKg.oninput = function (){
        rezult.innerText = +startKg.value * 2.205;
};





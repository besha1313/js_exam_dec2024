// Task 2_8
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

console.log('----------Task_2_8----------');


let day = +prompt('Введіть число від 1 до 31');

if (day >= 1 && day <= 10){
    console.log(`Число ${day} знаходиться в І декаді місяця`)
}else if (day >= 11 && day <= 20){
    console.log(`Число ${day} знаходиться в ІI декаді місяця`)
}else if (day >= 21 && day <= 31){
    console.log(`Число ${day} знаходиться в ІII декаді місяця`)
}else {
    console.log(`Ваше число ${day} не належить діапазону від 1 до 31`)
}



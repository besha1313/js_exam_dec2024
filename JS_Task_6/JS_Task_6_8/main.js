console.log(`----------Task_6_8----------`);
console.log(`----------Є масив----------`);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);


console.log(`----------відсортувати його за спаданням за monthDuration----------`);

let arr_321 = []
for (const item of coursesAndDurationArray) {
    arr_321.push(item);
}

let sort = arr_321.sort((a, b) =>{
    return b.monthDuration - a.monthDuration
})
console.log(sort)



console.log(`----------відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців----------`);

let arrFilter67 = [];
for (const item of coursesAndDurationArray) {
    arrFilter67.push(item);
}

let arrFilter = arrFilter67.filter(item => item.monthDuration > 5)

console.log(arrFilter)



console.log(`----------за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}----------`);

let arrForMap = [];
for (const item of coursesAndDurationArray) {
    arrForMap.push(item);
}

let arrPastMap = arrForMap.map(function (value, index){
    let newUser = {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
    return newUser;

});

console.log(arrPastMap);








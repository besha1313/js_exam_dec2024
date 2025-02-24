console.log('----------Task_8_2----------');
console.log('-----за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}-----');
console.log('-----Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції-----');

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let newArr = coursesAndDurationArray.map((value, index, array) => {
    return {id: index+1, title: value.title, monthDuration: value.monthDuration}
});

console.log(newArr);












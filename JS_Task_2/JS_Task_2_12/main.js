// Task 2_12
// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

console.log('----------Task_2_12----------');

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log(`${coursesAndDurationArray[0].title} "СУПЕР"`)
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log(`${coursesAndDurationArray[1].title} "СУПЕР"`)
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log(`${coursesAndDurationArray[2].title} "СУПЕР"`)
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log(`${coursesAndDurationArray[3].title} "СУПЕР"`)
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log(`${coursesAndDurationArray[4].title} "СУПЕР"`)
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log(`${coursesAndDurationArray[5].title} "СУПЕР"`)
}

console.log('-----Когда понабираешь, как говорит Сергей, руцями - начинаешь понимать ценность циклов-----');

for (const topic of coursesAndDurationArray) {
    if (topic.monthDuration > 5){
        console.log(`${topic.title} "СУПЕР"`)
    }
}
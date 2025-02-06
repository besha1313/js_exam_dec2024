// Task 2_9
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

console.log('----------Task_2_9----------');

let schedule = ['Введено число НЕ від 1 до 7, або НЕ число',
                                {day: 'Monday', morning: 'Коктейль F-1', dinner: 'Томатний суп з базиліком', evening: 'Коктейль F-1 Вечірній'},
                                {day: 'Tuesday', morning: 'Рослинний напій Алое', dinner: 'Білковий Експресс F-1', evening: 'Коктейль F-1 Вечірній + Найтворкс'},
                                {day: 'Wednesday', morning: 'Напій ОЯН', dinner: 'Томатний суп з базиліком', evening: 'Коктейль F-1 Вечірній'},
                                {day: 'Thursday', morning: 'Коктейль F-1', dinner: 'Білковий Експресс F-1', evening: 'Коктейль F-1 Вечірній + Найтворкс'},
                                {day: 'Friday', morning: 'Рослинний напій Алое', dinner: 'Білковий Експресс F-1', evening: 'Коктейль F-1 Вечірній + Найтворкс'},
                                {day: 'Saturday', morning: 'Напій ОЯН', dinner: 'Томатний суп з базиліком', evening: 'Коктейль F-1 Вечірній'},
                                {day: 'Sunday', morning: 'Коктейль F-1', dinner: 'Білковий Експресс F-1', evening: 'Коктейль F-1 Вечірній + Найтворкс'}];

let day_number = +prompt('Введіть номер дня тижня від 1 до 7');
switch (day_number) {
    case 1:
        console.log(schedule[1]);
        break;
    case 2:
        console.log(schedule[2]);
        break;
    case 3:
        console.log(schedule[3]);
        break;
    case 4:
        console.log(schedule[4]);
        break;
    case 5:
        console.log(schedule[5]);
        break;
    case 6:
        console.log(schedule[6]);
        break;
    case 7:
        console.log(schedule[7]);
        break;
    default:
        console.log(schedule[0]);
}
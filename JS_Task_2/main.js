// Масиви та об'єкти
// Task_2_1
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
console.log('Task_2_1');
let arr = [1, 2, 'oleg', true, 13, 'book', 21, 'asd', false, 31];
console.log(arr[0]);
console.log(arr[9], arr[6], arr[3]);
console.log(arr);


// Task_2_2
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
console.log('Task_2_2');
let book1 = {title: 'A Game of Thrones', pageCount: 864, genre: 'fantasy'};
let book2 = {title: 'The Nightingale', pageCount: 464, genre: 'historical novel'};
let book3 = {title: 'Wonder', pageCount: 408, genre: 'novel'};
console.log(book1);
console.log(book2);
console.log(book3);

// Task_2_3
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
console.log('Task_2_3');
let book4 = {
    title: 'A Game of Thrones',
    pageCount: 864,
    genre: 'fantasy',
    authors: [{name: 'George R. R. Martin', age: 76},
            {name: 'George R. R. Martin', age: 76}
            ]
    };

let book5 = {
    title: 'The Nightingale',
    pageCount: 464,
    genre: 'historical novel',
    authors: [{name: 'Kristin Hannah', age: 64},
            {name: 'Kristin Hannah', age: 64}
            ]
    };

let book6 = {
    title: 'Wonder',
    pageCount: 408,
    genre: 'novel',
    authors: [{name:'Raquel Palacio', age: 62},
            {name:'Raquel Palacio', age: 62}
            ]
    };
console.log(book4);
console.log(book5);
console.log(book6);



// Task_2_4
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log('Task_2_4');
let arr_users = [];
arr_users[arr_users.length] = {name: 'viktor', username: 'snig', password: '11aa11'};
arr_users[arr_users.length] = {name: 'stepan', username: 'kray', password: '22bb22'};
arr_users[arr_users.length] = {name: 'olga', username: 'audi', password: '33cc33'};
arr_users[arr_users.length] = {name: 'marina', username: 'ford', password: '44dd44'};
arr_users[arr_users.length] = {name: 'sofiya', username: 'vw', password: '55ee55'};
arr_users[arr_users.length] = {name: 'mihail', username: 'shark', password: '66ff66'};
arr_users[arr_users.length] = {name: 'nikola', username: 'smetana', password: '77gg77'};
arr_users[arr_users.length] = {name: 'larisa', username: 'dobro', password: '131313'};
arr_users[arr_users.length] = {name: 'mariya', username: 'hlib', password: '101010'};
arr_users[arr_users.length] = {name: 'igor', username: '4eh', password: '99zz99'};
console.log(arr_users);

for (const arrUser of arr_users) {
    console.log(arrUser.password)
}



// Task_2_5
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
console.log('Task_2_5');




// Логічні розгалуження:

// Task_2_6
//  - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


// Task_2_7
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// Task_2_8
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// Task_2_9
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// Task_2_10
//  - Користувач вводить або має два числа.
//  Потрібно знайти та вивести максимальне число з тих двох .
//  Також потрібно врахувати коли введені рівні числа.


// Task_2_11
//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


// Task_2_12
//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
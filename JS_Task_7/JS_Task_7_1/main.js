console.log(`----------Task_7_1----------`);
console.log(`-----------Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone----------`);
//створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname, email, phone) {
    this.id = id,
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.phone = phone
}

let users = [];

let user1 = new User(17, 'oleksandr', 'kindyakov', 'kindya@gmail.com', 380646046450);
users.push(user1);
let user2 = new User(2, 'igor', 'aliev', 'aliev@gmail.com', 380503051897);
users.push(user2);
let user3 = new User(20, 'vitaliy', 'tkach', 'tkach@gmail.com', 380675013014);
users.push(user3);
let user4 = new User(25, 'marina', 'antonova', 'antonova@gmail.com', 380681235487);
users.push(user4);
let user5 = new User(15, 'igor', 'popovak', 'popovak@gmail.com', 380683658129);
users.push(user5);
let user6 = new User(30, 'anna', 'sava', 'sava@gmail.com', 380773458791);
users.push(user6);
let user7 = new User(77, 'vlad', 'vasilenko', 'vasilenko@gmail.com', 380685214890);
users.push(user7);
let user8 = new User(8, 'irina', 'lapina', 'lapina@gmail.com', 380685489797);
users.push(user8);
let user9 = new User(9, 'sveta', 'buga', 'buga@gmail.com', 380675117777);
users.push(user9);
let user10 = new User(10, 'volodya', 'babulin', 'babulin@gmail.com', 380501302587);
users.push(user10);

console.log(users);



console.log(`----------Task_7_2----------`);
console.log(`-----Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)-----`);

// просто завдання 7_2, без варіантів парні/непарні id
let filter = (arr) => arr.filter(value => value.id % 2 === 0)

console.log(filter(users));



console.log(`**********************************`);
//завдання 7_2, з варіантами фільтрування парні/непарні id
let filter_1 = (arr, isEvenOrOdd) => arr.filter(value => {
    if(isEvenOrOdd === 'even'){
        if (value.id % 2 === 0){
            return value
        }
    }
    if(isEvenOrOdd === 'odd'){
        if (value.id % 2 !== 0){
            return value
        }
    }
});

// console.log(filter_1(users, 'even'));    //вивести об'єкти з ПАрними id
console.log(filter_1(users, 'odd'));  //вивести об'єкти з НЕпарними id



console.log(`----------Task_7_3----------`);
console.log(`-----Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)-----`);
//добавил метод slice, чтобы не менялся исходный массив

console.log(users.slice().sort((x1, x2) => x1.id - x2.id))




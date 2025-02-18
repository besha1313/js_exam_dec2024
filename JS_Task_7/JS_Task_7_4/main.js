console.log(`----------Task_7_4----------`);
console.log(`-----------створити конструктор для об'єктів Client з полями id, name, surname , email, phone, order [зі списком товарів]----------`);
//створити пустий масив, наповнити його 10 об'єктами Client

class Client{

    constructor(id, name, surname , email, phone, order) {
        this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
        this.order = order
    }
}

let clients = [
    new Client(17, 'oleksandr', 'kindyakov', 'kindya@gmail.com', 380646046450, ['banan', 'apple', 'pineapple', 'paper', 'chair', 'juice', 'candy']),
    new Client(20, 'vitaliy', 'tkach', 'tkach@gmail.com', 380675013014, ['apple', 'socks', 'paper', 'window', 'candy']),
    new Client(25, 'marina', 'antonova', 'antonova@gmail.com', 380681235487, ['flower', 'orange', 'door', 'car', 'picture', 'notebook']),
    new Client(15, 'igor', 'popovak', 'popovak@gmail.com', 380683658129, ['candy', 'socks', 'orange', 'window', 'table']),
    new Client(2, 'igor', 'aliev', 'aliev@gmail.com', 380503051897, ['socks', 'window', 'pen', 'table']),
    new Client(30, 'anna', 'sava', 'sava@gmail.com', 380773458791, ['banan', 'apple', 'pineapple', 'paper', 'chair', 'juice', 'candy']),
    new Client(77, 'vlad', 'vasilenko', 'vasilenko@gmail.com', 380685214890, ['milk', 'ball', 'tea']),
    new Client(8, 'irina', 'lapina', 'lapina@gmail.com', 380685489797, ['pencil', 'sushi', 'basket', 'tea']),
    new Client(9, 'sveta', 'buga', 'buga@gmail.com', 380675117777, ['airplane', 'headphones', 'hammer', 'bread', 'board', 'brick', 'box']),
    new Client(10, 'volodya', 'babulin', 'babulin@gmail.com', 380501302587, ['banan', 'table', 'window', 'door', 'orange', 'milk', 'hammer', 'basket'])
];

console.log(clients);



console.log(`----------Task_7_5----------`);
console.log(`-----Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)-----`);

let forSort = clients.slice()

let sort = forSort.sort((x1, x2) => {
    if(x1.order.length > x2.order.length){
        return 1
    }
    if(x1.order.length < x2.order.length){
        return -1
    }
    if(x1.order.length === x2.order.length){
        return 0
    }
})

console.log(sort)



console.log('********************* 2 спосіб **************************************')

console.log(clients.slice().sort((a, b) => a.order.length-b.order.length))





// Task_3_7
// Циклом вивести: - зі статусом true, - зі статусом false, - що старші за 30 років.

console.log('----------Task_3_7----------');
console.log('Циклом вивести: - зі статусом true, - зі статусом false, - що старші за 30 років.');

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];


for (let user of users) {
    console.log(user.name, user.age, user.status);
}

console.log('-------------користувачі зі статусом true-------------');

for (let user of users) {
        if(user.status === true){
           console.log(user.name, user.status);
        }
}

console.log('-------------користувачі зі статусом false-------------');

for (let user of users) {
    if(user.status === false){
        console.log(user.name, user.status);
    }
}

console.log('-------------користувачі які старші за 30 років-------------');

for (let user of users) {
    if(user.age > 30){
        console.log(user.name, user.age);
    }
}









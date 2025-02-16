console.log(`----------Task_6_1----------`);
console.log(`----------Знайти та вивести довжину наступних стрінгових значень----------`);

let strings = ['hello world', 'lorem ipsum', 'javascript is cool', 'javascript'];

function lengthItem (arr){
    for (const item of strings) {
    console.log(item.length);
    }
};
lengthItem(strings);


console.log('************ те ж іншим кодом ***************************')

for (const item of strings) {
    console.log(item.length);
}



console.log(`----------Task_6_2----------`);
console.log(`-----Перевести до великого регістру наступні стрінг. знач. 'hello world', 'lorem ipsum', 'javascript is cool', 'javascript'-----`);

let strings_62 = ['hello world', 'lorem ipsum', 'javascript is cool', 'javascript'];

for (const item of strings_62) {
    console.log(item.toUpperCase())
}



console.log(`----------Task_6_3----------`);
console.log(`----------Перевести до нижнього регістру наступні стрінг. знач. 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'----------`);

let strings_63 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

for (const item of strings_63) {
    console.log(item.toLowerCase())
}



console.log(`----------Task_6_4----------`);
console.log(`----------Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.----------`);

let str = ' dirty string   '
console.log(`довжина "брудної" стрінги ${str.length}`)
let str2 = str.trim()
console.log(`${str2} (довжина "чистої" стрінги ${str2.length})`)



console.log(`----------Task_6_5----------`);
console.log(`----------Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.----------`);
['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str_6_5 = 'Ревуть воли як ясла повні';

let stringToarray = arr => str_6_5.split(' ');

console.log(stringToarray(str_6_5))



console.log(`----------Task_6_6----------`);
console.log(`----------є масив чисел. за допомоги map перетворити всі об'єкти в масиві на стрінгові----------`);

let arr_6_6 = [10,8,-7,55,987,-1011,0,1050,0];

console.log(arr_6_6);

function arrToString (arr) {
    let newArrStr = arr.map(function (value) {
        return value.toString()
    })
    return newArrStr
}

console.log(arrToString(arr_6_6))


console.log('************ те ж іншим кодом ***************************')


console.log(arr_6_6.map(value => (value.toString())));  //то же стрелочной функцией



console.log(`----------Task_6_7----------`);
console.log(`----------створити функцію , яка приймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.----------`);

let startArr = [11,21,3,-5,13];
console.log('масив до сортування');
console.log(startArr);
function sortNums(startArr,direction){

        if(direction === 'ascending') {
            console.log('сортування на збільшення');
            let arr_123 = startArr.sort((x1, x2) =>{
                return x1-x2;
            });
            return arr_123;
        }

        if(direction === 'descending'){
            console.log('сортування на зменшення');
            let arr_321 = startArr.sort((x1, x2) => {
                return x2 - x1;
            })
            return arr_321;
        }
}

console.log(sortNums(startArr,'ascending'));

console.log(sortNums(startArr,'descending')) ;


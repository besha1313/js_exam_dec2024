console.log(`----------Task_5_8----------`);
console.log(`------створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write-------`);


document.write(`----------Task_5_8----------`);

let buildUl = (arr) =>{

    document.write(`<ul>`)
    for (ar of arr){
        document.write(`<li>${ar}</li>`)
        console.log(ar)
    }
    document.write(`</ul>`)
}

let ul = buildUl([13, 'okten', false, -88, null]);


//**********************************************************************************************************


console.log(`----------Task_5_9----------`);
console.log(`------створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.-------`);


document.write(`----------Task_5_9----------`);

let buildObjDiv = (arrObj) => {
            // console.log(arrObj)
            document.write(`<div class="cards">`)

            for (let ar of arrObj) {
                // console.log(ar)
                document.write(`<div class="card">
                    <p>id: ${ar.id}</p>
                    <p>name: ${ar.name}</p>
                    <p>age: ${ar.age}</p>
                </div>`)
            }
            document.write(`</div>`)
}

let user = [
    {id: 1, name: 'okten', age: 13},
    {id: 2, name: 'asd', age: 1},
    {id: 3, name: 'lorik', age: 20},
    {id: 4, name: 'viktor', age: 37},
    {id: 5, name: 'stepan', age: 88}
    ];

let build_Div = buildObjDiv(user);




// Task_3_2
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

console.log('----------Task_3_2----------');
console.log('За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині');


document.write(`<h2> Task_3_2. 10 блоків div c довільним текстом і індексом всередині </h2>`);
document.write(`<h3><i>наведи курсор на блок, щоб дізнатися його index</i></h3>`);

document.write(`<div class="wrap">`)
for (let i = 0; i < 10; i++) {
                    console.log(`елемент ${i + 1} index дорівнюе ${i}`);
                    document.write(`<div class="block">
                                            <h4> Я номер ${i + 1}</h4>
                                            <p>Мій index ${i} </p>
                                   </div>`);
}

document.write(`</div>`)

//
// Task_3_3
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

console.log('----------Task_3_3----------');
console.log('За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.');


document.write(`<h2>Task_3_3. Циклом while вивести в документ 20 блоків h1 c довільним текстом всередині</h2>`);
// document.write(`<h3><i>наведи курсор на блок, щоб дізнатися його index</i></h3>`);

// for (let i = 0; i < 10; i++) {
//     console.log(`елемент ${i + 1} index дорівнюе ${i}`);
//     document.write(`<div class="block">
//                                             <h4> Я номер ${i + 1}</h4>
//                                             <p>Мій index ${i} </p>
//                                    </div>`);
// }

let i = 0;
while (i < 20){
    console.log(`елемент ${i + 1}`);

    document.write(`<div class="block">
                        <h4> Я номер ${i + 1}</h4>
<!--                        <p>Мій index ${i} </p>-->
                    </div>`);
    i++;
}
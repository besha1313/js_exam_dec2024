// Task_3_5
// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону.

console.log('----------Task_3_5----------');
console.log('Використовуючи данні з масиву, за допомогою document.write та циклу побудувати структуру по шаблону.');

document.write(`<h2>Task_3_5. Використовуючи данні з масиву, за допомогою document.write та циклу побудувати структуру по шаблону.</h2>`);

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<div>`);
for (let i = 0; i < listOfItems.length; i++) {
    console.log(listOfItems[i]);
    document.write(`
                    <ul>
                        <li>${listOfItems[i]}</li>
                    </ul>
                    `);
    }
document.write(`</div>`);


// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>

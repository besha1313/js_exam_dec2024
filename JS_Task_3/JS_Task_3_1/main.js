// Task_3_1
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

console.log('----------Task_3_1----------');
console.log('За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині');

for (let i = 0; i < 10; i++){
    console.log(`${i+1}`);
    document.write(`<div>
                        <p>${i+1}</p>
                    </div>`)
}
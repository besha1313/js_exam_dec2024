// Task_3_6
// з масиву, за допомоги document.write та циклу побудувати структуру по шаблону.

console.log('----------Task_3_6----------');
console.log('З масиву, за допомоги document.write та циклу побудувати структуру по шаблону.');

document.write(`<h2>Task_3_6. З масиву, за допомоги document.write та циклу побудувати структуру по шаблону.</h2>`);

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://coffeeok.com.ua/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/4/8/4820198879655.jpg'
    },
];

document.write(`<div class="wrap">`);

for (let product of products) {
    for (let productKey in product) {
        console.log(productKey, product[productKey]);
    }
    ;
    document.write(`<div class="card_product">
                        <h3>${product.title}. Price - ${product.price} UAH</h3>
                        <img src="${product.image}" alt="foto_product">
                     </div>
                   `);
    console.log('----------------------');
}

document.write(`</div>`);

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

console.log('----------Task_11_1----------');

// взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

let main = document.createElement('div');
main.setAttribute('id', 'main')

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(rez =>{
        let cart = rez.carts;
        for (let user of cart) {
            let userCart = document.createElement('div')
            userCart.setAttribute('id', 'userCart')
            userCart.innerHTML = `
                <h3>№ карточки ${user.id}</h3>
                <h3>ID покупця ${user.userId}</h3>
            `
            main.append(userCart)

            let table = document.createElement('table')
            table.setAttribute('id', 'table')
            userCart.appendChild(table)

            let trHead = document.createElement('tr')
            trHead.setAttribute('class', 'trHead')
            trHead.innerHTML = `
                        <th>id</th>
                        <th>foto</th>
                        <th>title</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th>discount</th>
                        <th>discountedTotal</th>
            `
            table.appendChild(trHead)

            let products = user.products
            console.log(user.products)
            for (const product of products) {
                let tr = document.createElement('tr')
                tr.innerHTML = `
                        <td>${product.id}</td>
                        <td><img class="img" src="${product.thumbnail}" alt=""/></td>
                        <td>${product.title}</td>
                        <td>${product.price.toFixed(2)}</td>
                        <td>${product.quantity}</td>
                        <td>${product.total.toFixed(2)}</td>
                        <td>${product.discountPercentage}</td>
                        <td>${product.discountedTotal.toFixed(2)}</td>
                `
                table.append(tr);
            };

            let trFooter = document.createElement('tr');
            trHead.setAttribute('class', 'trFooter');
            trFooter.innerHTML = `
                        <th></th>
                        <th></th>
                        <th>${user.totalProducts}</th>
                        <th></th>
                        <th>${user.totalQuantity}</th>
                        <th>${user.total.toFixed(2)}</th>
                        <th></th>
                        <th>${user.discountedTotal.toFixed(2)}</th>
            `
            table.appendChild(trFooter);
        };
    });
document.body.append(main);







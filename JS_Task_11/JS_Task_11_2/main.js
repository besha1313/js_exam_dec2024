console.log('----------Task_11_2----------');

// /взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути список під час відображення.
let main = document.createElement('main');
main.innerHTML = `<h1>${'книга рецептів'.toUpperCase()}</h1>`;

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(rez => {
        let recipes = rez.recipes;
        // console.log(recipes);
        for (let recip of recipes) {
            let dish = document.createElement('div');
            dish.setAttribute('class', 'dish');

            let divHeader = document.createElement('div');
            divHeader.setAttribute('class', 'divHeader');
            divHeader.innerHTML = `<h3>id: ${recip.id}</h3>
                                   <h3>userId: ${recip.userId}</h3>`;

            let divName = document.createElement('div');
            divName.setAttribute('class', 'divName');
            divName.innerHTML = `<h3>name: ${recip.name}</h3> 
                                 <img class="img" src="${recip.image}" alt="image dish"/>`;

            let divInfo = document.createElement('div');
            divInfo.setAttribute('class', 'divInfo');
            divInfo.innerHTML = `<h4>difficulty: ${recip.difficulty}</h4>
                                <h4>cuisine: ${recip.cuisine}</h4>
                                <h4>prepTimeMinutes: ${recip.prepTimeMinutes}</h4>
                                <h4>servings: ${recip.servings}</h4>`;
            dish.append(divHeader, divName, divInfo);

            for (const dishKey in recip){
                if (Array.isArray(recip[dishKey])){
                    let divOl = document.createElement('ol');
                    divOl.innerText = dishKey;
                    for (const elem of recip[dishKey]){
                        let li = document.createElement('li');
                        li.innerText = elem;
                        divOl.appendChild(li);
                    }
                dish.append(divOl);
                }
            }
            let divInfo2 = document.createElement('div');
            divInfo2.setAttribute('class', 'divInfo2');
            divInfo2.innerHTML = `<p>cookTimeMinutes: ${recip.cookTimeMinutes}</p>
                                <p>caloriesPerServing: ${recip.caloriesPerServing}</p>
                                <p>rating: ${recip.rating}</p>
                                <p>reviewCount: ${recip.reviewCount}</p>`;
            dish.append(divInfo2);

            main.append(dish);
        }
    });

document.body.append(main);






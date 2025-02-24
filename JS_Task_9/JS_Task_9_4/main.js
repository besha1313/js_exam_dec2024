console.log('----------Task_9_4----------');
// console.log('----------                    ----------');

// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const value of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h2 = document.createElement('h2');
    h2.classList.add('heading');
    h2.innerText = value.title;

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = value.monthDuration;

    div.append(h2, p);
    document.body.appendChild(div);
}



















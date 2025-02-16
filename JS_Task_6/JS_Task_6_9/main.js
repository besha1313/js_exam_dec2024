console.log(`----------Task_6_9----------`);
console.log(`-----------описати колоду карт (від 6 до туза без джокерів)----------`);


let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace']
let cardSuits = ['heart', 'diamond', 'clubs', 'spade']
let colors = ['red', 'black']


let cards = [];

    for (let item of values) {
        for (let suit of cardSuits) {
            if(suit === 'heart' || suit === 'diamond'){
                cards.push({
                        value: item,
                        cardSuit: suit,
                        color: 'red'
                })
            }
            if(suit === 'clubs' || suit === 'spade'){
                cards.push({
                         value: item,
                         cardSuit: suit,
                         color: 'black'
                })
            }
        }
    }

console.log(cards);


console.log(`-----------знайти піковий туз 'ace' 'spade' ----------`);

console.log(cards.find(card => card.value === 'ace' && card.cardSuit === 'spade' ))

console.log(`-----------всі шістки----------`);

let all_6 = [];
for (let card of cards){
    if(card.value === 6){
       all_6.push(card)
    }
}
console.log(all_6);


console.log(`-----------всі червоні карти----------`);

let all_Red = [];
for (let card of cards){
    if(card.color === 'red'){
        all_Red.push(card)
    }
}
console.log(all_Red);


console.log(`-----------всі буби 'diamond'----------`);

let all_Diamond = [];
for (let card of cards){
    if(card.cardSuit === 'diamond'){
        all_Diamond.push(card)
    }
}
console.log(all_Diamond);


console.log(`-----------всі трефи 'clubs' від 9 та більше----------`);

let all_Clubs = [];

for (let card of cards){
    if(card.value < 9){
       //убираем все карты меньше 9
    }
    else if (card.cardSuit === 'clubs'){
        all_Clubs.push(card)
    }
}
console.log(all_Clubs);



console.log(`----------Task_6_10----------`);
console.log(`-----------Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт----------`);

console.log(cards);

let sortSuits = cards.reduce((accumulator, card) => {

    if(card.cardSuit === 'heart'){
        accumulator.hearts.push(card);
    }
    if(card.cardSuit === 'spade'){
        accumulator.spades.push(card);
    }
    if(card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card);
    }
    if(card.cardSuit === 'clubs'){
        accumulator.clubs.push(card);
    }
    return accumulator

}, {spades:[], diamonds:[], hearts:[], clubs:[]});

console.log(sortSuits)




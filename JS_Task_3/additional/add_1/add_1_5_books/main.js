console.log('----------add_1_16----------');
console.log('---створити масив книжок (назва, кількість сторінок, автори , жанри).---');


let library = [
        {
            title: 'A Game of Thrones 17',
            pageCount: 888,
            genre: ['fantasy'],
            authors: [{name: 'George Martin', age: 76}, {name: 'Piter Stepan', age: 43}]
        },

        {
            title: 'A Game of Thrones 17 OOOOO',
            pageCount: 864,
            genre: ['fantasy'],
            authors: [{name: 'George Martin', age: 76}, {name: 'Piter Stepan', age: 43}]
        },

        {
            title: 'A Game of Thrones 00 *****',
            pageCount: 888,
            genre: ['fantasy'],
            authors: [{name: 'George Martin', age: 76}, {name: 'Piter Stepan', age: 43}]
        },

        {
            title: 'The Nightingale 15',
            pageCount: 464,
            genre: ['historical novel'],
            authors: [{name: 'Kristin Hannah', age: 64}, {name: 'Igor Gann', age: 54}]
        },

        {
            title: 'Wonder 6',
            pageCount: 408,
            genre: ['novel'],
            authors: [{name:'Raquel Palacio', age: 62}]
        },

        {
            title: 'James 5',
            pageCount: 304,
            genre: ['novel', 'suitable literature'],
            authors: [{name: 'Percival Everett', age: 68}]
        },

        {
            title: 'Drive To Kill 13',
            pageCount: 362,
            genre: ['thriller', 'action'],
            authors: [{name: 'Sam Jones', age: 44}]
        },

        {
            title: 'Drive To Kill',
            pageCount: 1013,
            genre: ['thriller', 'action'],
            authors: [{name: 'Sam Jones', age: 44}]
        },

        {
            title: 'A Game of Thrones 00 88888',
            pageCount: 1013,
            genre: ['fantasy'],
            authors: [{name: 'George Martin', age: 76}, {name: 'Piter Stepan', age: 43}]
        }
];

console.log(library);
console.log('--------------знайти книжку/ки з найдовшою назвою-------maxTitle------------');
let maxBook = library[0];
let arrMaxBook = [maxBook];
for (let i = 1; i < library.length; i++) {

        if(maxBook.title.length < library[i].title.length){
            arrMaxBook.length = 0;
            arrMaxBook.push(library[i]);
            maxBook = library[i];
        }else if(maxBook.title.length === library[i].title.length){
            arrMaxBook.push(library[i]);
        }
}
console.log(arrMaxBook);


console.log('--------------знайти Найбільшу книжку/ки-------maxPage-----------------');


// - знайти книжку/ки з найдовшою назвою--------------------maxPage---------------------
// console.log(library);
let maxPageBook = library[0];
let arrMaxPageBook = [maxPageBook];

for (let i = 1; i < library.length; i++) {

    if(maxPageBook.pageCount < library[i].pageCount){

        arrMaxPageBook.length = 0;
        arrMaxPageBook.push(library[i]);
        maxPageBook = library[i]
    }else if(maxPageBook.pageCount === library[i].pageCount){
        arrMaxPageBook.push(library[i]);
    }

}
console.log(arrMaxPageBook);

console.log('---------знайти книжку/ки з найбільшою кількістю жанрів-----maxGenre------')


let maxGenreBook = library[0];
let arrMaxGenre = [maxGenreBook];
for (let i = 1; i < library.length; i++) {

    if(maxGenreBook.genre.length < library[i].genre.length){
        arrMaxGenre.length = 0;
        arrMaxGenre.push(library[i]);
        maxGenreBook = library[i];
    }else if(maxGenreBook.genre.length === library[i].genre.length){
        arrMaxGenre.push(library[i]);
    }
}
console.log(arrMaxGenre);


console.log('---------знайти книжку/ки які писали 2 автори -----twoAuthors------')


let arrTwoAuthors = [];
for (const book of library) {
    if(book.authors.length === 2){
        arrTwoAuthors.push(book);
    }

}
console.log(arrTwoAuthors);

console.log('---------знайти книжку/ки які писали 1 автори ----- oneAuthors------')


let arrOneAuthors = [];
for (const book of library) {
    if(book.authors.length === 1){
        arrOneAuthors.push(book);
    }

}
console.log(arrOneAuthors);




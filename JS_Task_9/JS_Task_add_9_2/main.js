console.log('----------Task_add_9_2----------');

console.log('----------створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.----------');


let div = document.getElementsByTagName('div');

let maxHeight = 0;                          //находим самое большое значение высоты блока
for (let item of div) {
    if(item.clientHeight > maxHeight){
        maxHeight = item.clientHeight
    }
}
for (let item of div) {                      //присваиваем всем блокам максимальную высоту
    item.style.height = maxHeight + 'px'
}





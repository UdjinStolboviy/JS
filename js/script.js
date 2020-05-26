'use strict'


let many = prompt("Ваш бюджет на месяц ?"),
    time = prompt("Введите дату в формате YYYY - MM - DD ");


let appData = {
    manyAll: many,
    dataTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
// let expenses: {
//     "ответ на первый вопрос": "ответ на второй вопрос"
// }




























































































    
    
    

function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});
'use strict'


let many = prompt("Ваш бюджет на месяц ?", ''),
    time = prompt("Введите дату в формате YYYY - MM - DD ", '');


let appData = {
    manyAll: many,
    dataTime: time,
    expenses: { 
        anw1: 'ответ на первый вопрос',
        anw2: 'ответ на второй вопрос'
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется?", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется?", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);

let num = 50;

if (num < 49) {
    console.log('Неверно!')
} else if (num > 100) {
    console.log('Много!')
} else {
    console.log ('Верно!')
};

(num == 50) ? console.log('Верно!') : console.log('НЕверно!');

switcw (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
    console.log('Много!');
    break;
    case num > 80:
    console.log('Все ещо много!');
    break;
    case 50;
    console.log('Верно!');
    break;
    default:
    console.log('Что то пошло не  так!');

};
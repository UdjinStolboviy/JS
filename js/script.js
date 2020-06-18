'use strict'

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = +prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

                console.log("done");

                appData.expenses[a] = b;
            } else {
                console.log("bad result");
                i--;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "грн.");
    },
    detectDayLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("под какой процент?");

             appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необезательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function () {
        // let items = prompt("Что принесет дополнительный доход? (перечслите через зяпятую)", "");
        for (let i = 0; i < 2; i++) {
            let items = prompt("Что принесет дополнительный доход? (перечслите через зяпятую)", "");

            if (typeof (items) === 'string' && typeof (items) != null && items) {

                console.log("done");

                appData.income = items.split(', ');
                appData.income = items.split(', '); // преводит  страку  в  масив split
                appData.income.push(prompt('МОжет что то еще?')); // добавляем  в конец масива  елемент полученый  от пользователя.
                appData.income.sort(); // метод сортует  масив  по  алфовиту.
                appData.income.forEach(function (item, a, mass) { // forEach метод для перебора  масива
                    let b = a + 1;
                    console.log("Способ доп. зароботка: " + b +"." + item)
                });
            } else {
                console.log("bad result");
                i--;
            }
        }
    }
};

for (let property in appData) {
    console.log("Наша программа включает в себя данные:" + `${property}: ${appData[property]}`);
}












































// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//             b = prompt("Во сколько обойдется?", "");

//         if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

//             console.log("done");

//             appData.expenses[a] = b;
//         } else {
//             console.log("bad result");
//             i--;
//         }
//     };
// }

// chooseExpenses();

// function detectDayBudget() {
//     appData.moneyPerDay = (appData.budget / 30).toFixed();

//     alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "грн.");
// }

// detectDayBudget();

// function detectDayLevel() {
//     if (appData.moneyPerDay < 100) {
//         console.log("Это минимальный уровень достатка!");
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Это средний уровень достатка!");
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("Это высокий уровень достатка!");
//     } else {
//         console.log("Произошла ошибка");
//     }

// }

// detectDayLevel();


// function checkSavings(){
//     if (appData.savings == true) {
//         let save = +prompt("Какова сумма накоплений?"),
//             percent = +prompt("под какой процент?");

//         appData.monthIncome = save / 100 / 12 * percent;
//         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
//     }
// }

// checkSavings();

// function chooseOptExpenses() {
//     for (let i = 1; i < 3; i++){
//         let opt = prompt("Статья необезательных расходов?", "");
//         appData.optionalExpenses[i] = opt;
//     }
// }
// chooseOptExpenses();



















































































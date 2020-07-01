

let startBtn = document.getElementById("start"), //- Получить кнопку "Начать расчет" через id
    budgetValue = document.getElementsByClassName('budget-value')[0], //Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div> )
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0], //Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div> )
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0], //Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div> )


    expensesItem = document.getElementsByClassName('expenses-item'), //- Получить поля (input) c обязательными расходами через класс (class=”expenses-item”)
    expensesBtn = document.getElementsByTagName('button')[0], //- Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
    optionalExpensesBtn = document.getElementsByTagName('button')[1], //- Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
    countBtn = document.getElementsByTagName('button')[2], //- Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'), //- Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
    incomeItem = document.querySelector('.choose-income'), //- Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    checkSavings = document.querySelector('#savings'), //id- Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


console.log(optionalExpensesItem);
console.log(checkSavings);










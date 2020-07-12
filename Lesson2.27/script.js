let startBtn = document.getElementById("btn_main-calc"),
    budgetValue = document.getElementsByClassName('income-value')[0],
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),

    expensesBtn = document.getElementsByTagName('button')[0],
    expensesItem = document.getElementsByClassName('expenses-item');


let money, time;



startBtn.addEventListener('click', function () {
    time = prompt("Ведите дату в флрмате YYYY-MM-DD", '');
    money = +prompt(" Вашь бюджет на месяц?", '');
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?', "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++){
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        
        if ((typeof (a)) != null && (typeof (b)) != null && a != '' && a.length < 50){
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
        expensesValue.textContent = sum;
    }
});

const appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    timeData: time

};


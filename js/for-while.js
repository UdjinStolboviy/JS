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

};



// Используем цикл WHILE

let i = 0;
while (i < 2) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt ("Во сколько обойдется?", "");

    if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        console.log ("done");

        appData.expenses[a] = b;
    } else {
         console.log ("bad result");
         i--;
    }

    i++;
};



// Используем цикл DO...WHILE

let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

        console.log("done");

        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }

    i++;
}
while(i < 2);
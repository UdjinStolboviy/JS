// Тибы даных

2 3 6 7 // числа 

'string', "string", `string`; // Строки

true / false //Булиневые значения   правда или лож

let a;
console.log(a); // undefined  значения  не нашлось

const obj = {   //Обекты 
    name: 'Alex'
}
const arr = [1, 2, 3, 5]; // Обекты- МАсивы

// Динамическая типизация  приобразование  одных  даниз  в тип  другой 

// Приобразование  в строку to String

1) 

String(null)
console.log(typeof (String(null)));

2)

console.log("ww" + "err");
console.log(typeof ("q" + false));
console.log(typeof ("" + false));
console.log('https://vk.com/catalog/' + 5);
console.log(typeof (5 + +'5'));

3)

console.log(typeof (Number('5')));
console.log(typeof (parseInt('15px', 10)));
let ans = +prompt("Hello", '');

0, '', null, undefined, NaN  //Всегда  возвращает лож.false

let switcher = null;

if (switcher) {
    console.log("Working..")// выводит лож
}

let switcher = 1;
if (switcher) {
    console.log("Working..")// выводит  правда
}

console.log(typeof (Boolean('5')));

console.log(typeof (!!'5'));
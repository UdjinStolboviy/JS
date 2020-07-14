// new RegExp('pattern', 'flags');  производит  поиск  и  обработку  в строке работа  со  строками 
// /pattern/

let ans = prompt('Ведите ваше имя');

let reg = /n/;// ищем  букве n  в слове  которром  вел пользователь
console.log(ans.search(reg));

//i - флаг регистра  большая  буква  и  или маленькая 
//g -  флаг глобальность  флаг что мы ищем  везде  глобально 
//m - флаг многострочносте 

//match -  метот совпадения 
let reg = /n/ig;
console.log(ans.match(reg));

 //   /./ - любые символы которые попадут  

let pass = prompt('Введите пароль');
console.log(pass.replace(/./g, "*"));

alert('12-34-56'.replace(/-/g, ':'));


let ert = /n/ig;
console.log(ert.test(ans)); //Тестирует  строку  если  есть совпадение  выводит  тру правда.


\d - найди цифру   , \D

\w - найди букву    ,\W

\s - найди пробелы   ,\S

\D - сесли хотин искать не число  ивертирует  верхнюю команду.

let ans = prompt('Вериде число');
let reg = /\d/g;
console.log(ans.match(reg));


let str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i));


let str = 'My name is / R2D2';
console.log(str.match(/\//i)); // находим касой слешь./.

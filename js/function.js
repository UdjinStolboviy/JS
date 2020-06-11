let num = 20

function showFirstMessage(text) {
    alert(text);
    console.log(num);
}

showFirstMessage("Hellow world");
console.log(num);



console.log(calc(3, 4));

console.log(calc(8, 4));

function calc(a, b) {
    return (a + b);
}

let calc = function (a, b) {
    return (a + b);
}

let calc = (a, b) => { a + b }

function retVar() {
    let num = 50;
    return num;
};

let anotherNum = retVar();
console.log(anotherNum);

// Свойство  вспомагательные значеня

let str = "test";
console.log(str.length);

// позволят посчитать количество символов length


// Методы вспомагательные  функции

console.log(str.toUpperCase());

// функция делает  все буквы заглавные toUpperCase

console.log(str.toLowerCase());

// функция делает  все буквы  маленкие toLowerCase

// ДЛя чисел

let twelve = "12.2";

console.log(Math.random(twelve));

// Math.random() ета функция окркгляет значеня 

let twelve = "12.2px";
console.log(parseInt(twelve));

// функция преобразоввыет  в  другое   исчесление  из  строки  в число до ,  parseInt()

let twelve = "12.2px";
console.log(parseFloat(twelve));
// функция  преобразоввыет  12.2 отбрасывает  буквы parseFloat()




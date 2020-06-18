let arr = [1, 2, 3, 4, 5];

arr.unshift("5");//добавляет  в начало масива  значение
arr.shift();//удалят первый елемент  в масиве arr
arr.push("5");//добавляет  в конец масива значения 
arr.pop();//удаляет  с конца масива елемент
console.log(arr);

let arr = [1, 2, 3, 3, 5];
for (let i = 0; i < arr.length; i++){ // length свойство которрое считает  сколько ииндекс елемента +1  в масиве
    console.log(arr[i]);
}
console.log(arr);



let arr = ["first", 2, 3, "four", 5];
arr.forEach(function (item, i, mass) { // forEach метод для перебора  масива
    console.log(i + ': ' + item +"(масив: "+ mass + ')')
});

// 0: first(масив: first, 2, 3, four, 5)
// 1: 2(масив: first, 2, 3, four, 5)
// 2: 3(масив: first, 2, 3, four, 5)
// 3: four(масив: first, 2, 3, four, 5)
// 4: 5(масив: first, 2, 3, four, 5)

let mass = [1, 3, 5, 7, 8, 7];
for (let key in mass) { // for  in  работает цикол  в масиве  и  переберает масив  о  номеру ячейки  интедефикатор
    console.log(key);
}


let mass = [1, 3, 5, 7, 8, 7];
for (let key of mass) { // for  of  работает цикол  в масиве  и  переберает масив  по  внутренему содежанию
    console.log(key);
}

// дз  ознакомиться  фильтер  ес  и редюс  в масивах

let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');
console.log(arr);


// (4)["ddfdf", "dhdhdgh", "5667677", "1234ww"]
// 0: "ddfdf"
// 1: "dhdhdgh"
// 2: "5667677"
// 3: "1234ww"
// length: 4
// __proto__: Array(0)


let arr = ['awe', 'hhh', 'ww', '333'],
    i = arr.join(',');
console.log(i);


// awe, hhh, ww, 333


let arr = ['awe', 'hhh', 'ww', '333'],
    i = arr.sort(); // sort сортирует  масив  по  алфавиту
console.log(arr);

// ['333', 'awe', 'hhh', 'ww']

let arr = [1, 777, 15, 333],
    i = arr.sort(compareNun);

function compareNun(a, b) {
    return a - b;
}
console.log(arr);

// [1, 15, 333, 777]
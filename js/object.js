let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false; //добовлят в обек  новой биливое  значение  по имени бул.
options.colors = { //добовляет  в  обект  опшион  другой  обект  колор.
    border: "black",
    bg: "red"
};


delete options.bool; // удаляет  из  обекта  свойство.

console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

// test {
//     width: 1024,
//     height: 1024,
//     name: 'test',
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// }
// Свойство width имеет значение 1024
// Свойство height имеет значение 1024
// Свойство name имеет значение test
// Свойство colors имеет значение[object Object]

console.log(Object.keys(options).length); // запись  показывает сколько  количество  свойст  в даном  обекте опшион  (4)


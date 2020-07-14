setTimeout(sayHello, 3000);

function sayHello() {
    alert('Hellow World!');
}


let timerId = setTimeout(sayHello, 3000);
clearTimeout(timerId);
function sayHello() {
    alert('Hellow World!');
}



let timerId = setInterval(sayHello, 3000); // будет повторяться функция каждые 3 сек.
clearTimeout(timerId);

function sayHello() {
    console.log('Hellow World!');
}


let timerId = setTimeout(function log() {
    console.log('Hello');
    setTimeout(log, 2000);
});

//Мобильне собырие
// touchstart - аналаг клика 

// Touchmove - Когда  водим по екрану  то  вызываем это событие 

// touchend - когда  убераем палец  от екрана  возникает ето событие 

//touchenter -  вознекает когда  нашь палец заходит  наелемент на  странице

// touchleave - возникает когда  нашь палец покинул  елемент на  странице

// tochcancel - возникает когда  нашь  палец  выходит   за  пределы преложения на екране  когда  наше косание  не  регестрируеться браузером 

window.addEventListener('DOMContentLoaded', function () {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function (e) {
        e.preventDefault(); //Для удоления  стандартного поведения брузера 
        console.log("Red box: touchstart");
    });

    box.addEventListener('touchmove', function (e) {
        e.preventDefault(); //Для удоления  стандартного поведения брузера 
        console.log("Red box: Touchmove");
    });

    box.addEventListener('touchend', function (e) {
        e.preventDefault(); //Для удоления  стандартного поведения брузера 
        console.log("Red box: touchend");
    });

    box.addEventListener('touchmove', function (e) {
         e.preventDefault(); //Для удоления  стандартного поведения брузера 
        console.log("Red box: Touchmove");
        console.log(e.touches); // Получаем  полную  регестрацию  всех пальцев  которые коснулись дисплея
        console.log(e.changedTouches);// анологично  верхнему 
        console.log(e.targetTouches);// регестрируем те  пальцы которые  взаемодействуют  с елементом.
    });

box.addEventListener('touchmove', function (e) {
    e.preventDefault(); //Для удоления  стандартного поведения брузера 
    console.log("Red box: Touchmove");
    console.log(e.touches[0].targe); // Получаем  полную  регестрацию  всех пальцев  которые коснулись дисплея
    console.log(e.changedTouches); // анологично  верхнему 
    console.log(e.targetTouches); // регестрируем те  пальцы которые  взаемодействуют  с елементом.
});
    
    box.addEventListener('touchmove', function (e) {
        e.preventDefault(); //Для удоления  стандартного поведения брузера 
        console.log("Red box:" + e.touches[0].pageX); // Показывает  при нажатии  кординаты
    });

});


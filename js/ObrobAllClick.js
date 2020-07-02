let btn = document.getElementsByTagName('button');

btn[0].onclick = function () {
    alert('Вы нажали на  первую кнопк');
};

btn[0].addEventListener('click', function () {
    alert('Perv nuzj');
    alert('btoroe naj');
});

// let btn = document.getElementsByTagName('button'),
let btn = document.querySelectorAll('button'), // Возращает   псевдо масив 
    wrep = document.querySelector('.wrapper'),
    link = document.querySelector('a');

btn[0].onclick = function () {
    alert('Вы нажали на  первую кнопк');
};

btn[0].addEventListener('click', function () {
    alert('Perv nuzj');
    // alert('btoroe naj');
});

btn[0].addEventListener('click', function () {

    alert('btoroe naj');
});

btn[0].addEventListener('mouseenter', function () {

    alert('ПРивет ');
});

// Получения даных  про событие

btn[0].addEventListener('click', function (event) {
    console.log(`ПРоизошло собитие: ${event.type} на елементе ${event.target}`);
});

btn[0].addEventListener('click', function (event) {
    let target = event.target;
    target.style.display = 'none';
    console.log(event);
});

wrep.addEventListener('click', function () {
    console.log(`ПРоизошло собитие: ${event.type} на елементе ${event.target}`);
});

link.addEventListener('click', function (event) {
    event.preventDefault(); // ОТмена  стандартных  действий браузера 
    console.log(`ПРоизошло собитие: ${event.type} на елементе ${event.target}`);

});

btn.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log('ВЫшли');
    });
});
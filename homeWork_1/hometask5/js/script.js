'use strict';

let menu = document.getElementsByClassName('menu')[0],
    menuItem = document.getElementsByClassName("menu-item"),
    menuItemLi = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName("adv")[0],
    // answer = prompt('Ваше отношение  к технике Appl?'),
    // prompto = document.getElementById('prompt');
    promptforApple = document.querySelector("#prompt"),
    yourOpinion = prompt("Ваше отношение к технике Apple?");


// Поменяли местами два элемента
menu.insertBefore(menuItem[2], menuItem[1]);

// Добавляем новый li, с классом и текстом
menuItemLi.classList.add("menu-item");
menuItemLi.innerHTML = 'Пятый елемент';
menu.appendChild(menuItemLi);

// Меняем фон
document.body.style.background = "url('img/apple_true.jpg')";

//Поменять заголовок, добавить слово "подлинную"

title.textContent = "Мы продаем только подлинную технику Apple";

//Удалить рекламу со страницы
adv.remove();

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

// prompto.innerHTML = answer;
promptforApple.textContent = yourOpinion;




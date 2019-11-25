var menu =  document.getElementsByClassName('menu')[0];
var item = document.getElementsByClassName('menu-item');
var adv = document.querySelector('.adv');
var prompts = document.querySelector('.prompt');
var menuItemLi = document.createElement('li');
var title = document.getElementById("title");
var promptforApple = document.querySelector("#prompt");

adv.remove();

menu.insertBefore(item[2], item[1]);
menuItemLi.classList.add('menu-item');
menuItemLi.textContent = 'Пятый элемент';
menu.appendChild(menuItemLi);
document.body.style.background = 'url(img/apple_true.jpg)';
title.textContent = 'Мы продаем только подлинную технику Apple';
var quest = prompt('Ваше мнение о технике Apple?', '');
promptforApple.textContent = quest;




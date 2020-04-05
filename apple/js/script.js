var per = document.getElementsByClassName("column")[1];
var child = document.getElementsByClassName("adv")[0];
per.removeChild(child);

var menu = document.getElementsByClassName("menu")[0];
var menuItemThree = document.getElementsByClassName("menu-item")[1];
var menuItemTwo = document.getElementsByClassName("menu-item")[2];
menu.insertBefore(menuItemTwo,menuItemThree);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";

var title = document.getElementsByClassName("title")[0];
title.textContent = "Мы продаем только подлинную технику Apple";

var promptforApple = document.getElementById("prompt");
let yourOpinion = prompt("Tell me your opinion");
promptforApple.textContent = yourOpinion;

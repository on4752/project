"use strict";

let money = prompt("Ваш бюджет на месяц?", '');
let time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
  money: money,
  time: time
};

console.log(appData.money);
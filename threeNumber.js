var originalNumber = Number(prompt("Введите трехзначное число:"));

var units = originalNumber % 10;
var tens = Math.floor((originalNumber % 100) / 10);
var hundreds = Math.floor(originalNumber / 100);
var newNumber = units * 100 + tens * 10 + hundreds;

alert("Новое число: " + newNumber);

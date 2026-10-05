const prompt = require('prompt-sync')();
var num1 = prompt('Inserta un número: ');
var num2 = prompt('Ahora otro: ');
var num3 = prompt('Y un último: ');
var concat = '' + num1 + num2 + num3;
console.log(concat);
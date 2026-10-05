const prompt = require('prompt-sync')();
var base = prompt('Dime la medida de la base: ');
var altura = prompt('Dime la medida de la altura: ');
var area = base * altura;
console.log(area);
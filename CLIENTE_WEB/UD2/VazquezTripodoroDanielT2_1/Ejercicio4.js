const prompt = require('prompt-sync')();
var horas = prompt('Ingresa una cantidad en horas: ');
var segundos = horas * 3600;
console.log(segundos);
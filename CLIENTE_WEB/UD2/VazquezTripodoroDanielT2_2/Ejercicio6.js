const prompt = require('prompt-sync')();

var pase = prompt('¿Tienes pase anual?: ');
var entrada = prompt('¿Compraste entrada?: ');

var resultado = (pase == 'No' && entrada == 'No')? 'No puedes entrar al parque' : 'Puedes entrar al parque';
console.log(resultado);
const prompt = require('prompt-sync')();

var coche1 = prompt('Dame la velocidad de un coche: ');
var coche2 = prompt('Ahora de otro: ');

var comparador = (coche1 > coche2)? 'El coche más rápido es el coche 1' : 'El coche más rápido es el coche 2';
var resultado = (coche1 == coche2)? 'ERROR' : comparador;

console.log(resultado);
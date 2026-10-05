const prompt = require('prompt-sync')();
var precio = prompt('Inserta el precio: ');
var descuento = prompt('Inserta el descuento: ');
var precioFinal = precio - (precio * descuento/100);
console.log(precioFinal);
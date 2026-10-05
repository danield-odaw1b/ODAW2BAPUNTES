const prompt = require('prompt-sync')();

console.log('¿Estás a punto de comprar el Smartphone Galaxy Z Flip 8 por 1150 euros, quieres configurar algún extra?');
var precio = 1150;

var memoria = prompt('¿Más memoria? (Si/No): ');
var camara = prompt('¿Mejor cámara? (Si/No): ');
var funda = prompt('¿Funda protectora? (si/No): ');

var precio = (memoria == 'Si')? precio + 100 : precio;
var precio = (camara == 'Si')? precio + 50 : precio;
var precio = (funda == 'Si')? precio + 30 : precio;

console.log(precio);
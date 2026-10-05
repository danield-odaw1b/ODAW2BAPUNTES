const prompt = require('prompt-sync')();
var largoCont = prompt('Inserta el largo de un contenedor: ');
var altoCont = prompt('Ahora el alto: ');
var anchoCont = prompt('Por último el ancho: ');

var largoOb = prompt('Inserta el largo de un objeto: ');
var altoOb = prompt('Ahora el alto: ');
var anchoOb = prompt('Por último el ancho: ');

console.log(largoCont >= largoOb && altoCont >= altoOb && anchoCont >= anchoOb);
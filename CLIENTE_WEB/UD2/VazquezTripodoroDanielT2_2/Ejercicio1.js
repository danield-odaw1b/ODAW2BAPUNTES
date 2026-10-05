const prompt = require('prompt-sync')();
var arbol1 = prompt('Inserta la altura de un árbol: ');
var arbol2 = prompt('Ahora la de otro: ');
var arbol3 = prompt('Y el último: ');
console.log(arbol1>10||arbol2>10||arbol3>10);
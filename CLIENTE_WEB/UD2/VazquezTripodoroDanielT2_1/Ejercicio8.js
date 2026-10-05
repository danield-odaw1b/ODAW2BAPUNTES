const prompt = require('prompt-sync')();
var num1 = prompt('Inserta un número: ');
var num2 = prompt('Inserta un segundo número: ');
var aux = 1;
var condicion = true;
if (num1%num2 != 0){
    condicion = false;
}
console.log(condicion);
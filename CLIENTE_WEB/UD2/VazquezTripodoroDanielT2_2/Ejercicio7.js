const prompt = require('prompt-sync')();

var car1 = prompt('¿Puntuación de la 1ª carrera?: ');
var car2 = prompt('¿Puntuación de la 2ª carrera?: ');
var car3 = prompt('¿Puntuación de la 3ª carrera?: ');

var res1 = (car1 < 5 || car2 < 5 || car3 < 5)? false : true;
var res2 = (car1 >= 8 && car2 >= 8 || car1 >= 8 && car3 >= 8 || car2 >= 8 && car3 >= 8)? true : false;
console.log(res1 && res2);
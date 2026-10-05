const prompt = require('prompt-sync')();
console.log('¡Bienvenido al concurso!');

var pre1 = prompt('Presentador ¿Cuál es la respuesta correcta a la primera pregunta, Si o No?: ');
var pre2 = prompt('¿Y a la segunda?: ');
var pre3 = prompt ('Y, por último ¿A la tercera?: ');

var res1 = prompt('Concursante, responda la primera pregunta (Si/No): ');
var res2 = prompt('Ahora la segunda (Si/No): ');
var res3 = prompt('Y para acabar, la tercera (Si/No): ');

var comprobacion = (pre1 == res1 && pre2 == res2 && pre3 == res3)? 'Enhorabuena, has ganado' : 'Vaya, has perdido';
var comp2 = (comprobacion == 'Enhorabuena, has ganado' && pre1 == 'Si' && pre2 == 'Si' && pre3 == 'Si')? 'Si, si, enhorabuena, has ganado' : comprobacion;
var comp3 = (comprobacion == 'Enhorabuena, has ganado' && pre1 == 'No' && pre2 == 'No' && pre3 == 'No')? 'No, no, pero enhorabuena, has ganado' : comp2;

console.log(comp3);
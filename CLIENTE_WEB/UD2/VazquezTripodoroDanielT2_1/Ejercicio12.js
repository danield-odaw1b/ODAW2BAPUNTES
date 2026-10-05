const prompt = require('prompt-sync')();
var es1 = prompt('Inserta la distancia a la que está la primera estación: ');
var es2 = prompt('Ahora a la segunda: ');
var es3 = prompt('Por último, a la tercera: ');
var vel = prompt('Inserta la distancia en Km/h a la que va el tren: ');

var par1 = es1/vel * 60;
var par2 = par1 + es2/vel * 60;
var par3 = par2 + es3/vel * 60;

console.log(`Si el tren viaja a ${vel} km/h, tardaría en llegar ${par1} minutos a la primera estación, ${par2} minutos a la segunda y ${par3} minutos en completar el recorrido completo.`)
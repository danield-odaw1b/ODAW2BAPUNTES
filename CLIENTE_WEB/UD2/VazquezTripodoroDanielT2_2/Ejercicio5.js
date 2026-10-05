const prompt = require('prompt-sync')();

var frenos = prompt('¿Los frenos son funcionales?: ');
var ruedas = prompt('¿Las ruedas están infladas?: ');
var accidente = prompt('¿Ha tenido algún accidente?: ');

var res = (frenos == 'No' || ruedas == 'No' || accidente == 'Si')? 'Mantenimiento necesario' : 'A la carrera';
console.log(res);
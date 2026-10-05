const prompt = require('prompt-sync')();
var registro = prompt('¿Te has registrado?: ');
var entrada = prompt('¿Ha pagado la entrada?: ');
var id = prompt('¿Tiene una identificación válida?: ')

var res = (registro=='Si'&&entrada=='Si'&&id=='Si')?'Torno abierto' : 'Torno cerrado';
console.log(res);
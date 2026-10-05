const prompt = require('prompt-sync')();
var user = 'admin';
var contra = '1234';

var userTry = prompt('Inserta tu usuario: ');
var contraTry = prompt('Inserta tu contraseña: ');

var res = (user == userTry && contra == contraTry)? 'Usuario autorizado' : 'Usuario sin acceso';
console.log(res);
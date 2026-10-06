const prompt = require('prompt-sync')();
var usuarios = prompt('¿Qué usuario(s) se van a conectar?: ');

var arr = new Array();
arr = usuarios.split('@');

if (arr.length == 1) {
    
} else {
    if (arr.length == 2) {
        console.log('@' + arr[1] + ' está online');
    } else if (arr.length == 3) {
        console.log('@' + arr[2] + ' y ' + '@' + arr[1] + 'están online');
    } else {
        console.log('@' + arr[(arr.length-1)] + ', @'  + arr[(arr.length-2)] + ' y ' + (arr.length-3) + ' persona(s) más están online');
    }
}

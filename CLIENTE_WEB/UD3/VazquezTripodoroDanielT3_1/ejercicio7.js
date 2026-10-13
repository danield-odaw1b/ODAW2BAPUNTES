const prompt = require('prompt-sync')();
var usuarios = prompt('¿Qué usuario(s) se van a conectar?: ');

var arr = new Array();
arr = usuarios.split(' ');
arrAux = new Array();

for(let i = 0; i < arr.length; i++){
    if(arr[i].charAt(0) == '@'){
        arrAux.unshift(arr[i]);
    }
}

if (arrAux.length == 1) {
    console.log(arrAux[0] + ' está online');
} else if(arrAux.length == 2){
    console.log(arrAux[0] + ' y ' + arrAux[1] + ' están online');
} else if(arrAux.length > 2) {
    console.log(arrAux[0] + ', ' + arrAux[1] + ' y ' + (Number) (arrAux.length-2)  + ' persona(s) más están online');
}

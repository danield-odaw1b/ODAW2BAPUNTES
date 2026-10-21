const prompt = require('prompt-sync')();

var mapa = new Map();
var puntMax = -Infinity;
var ganador = '';
var empate = false;

while(mapa.size < 5){
    let texto = prompt('Introduce un usuario y su puntuación: ');
    let usuario = texto.split(' ');
    let aux = Number(usuario[1]);

    if(usuario.length != 2  || usuario[0] == '' || usuario[1] == '' || Number.isNaN(aux) || mapa.has(usuario[0])){
        console.log('Entrada inválida');
    } else {
        if (aux > puntMax) {
            puntMax = aux;
            ganador = usuario[0];
            empate = false;
        } else if (aux == puntMax){
            empate = true;
        }
        mapa.set(usuario[0],aux);
    }
}
if (empate){
    console.log('Empate entre jugadores');
} else {
    console.log(ganador);
}


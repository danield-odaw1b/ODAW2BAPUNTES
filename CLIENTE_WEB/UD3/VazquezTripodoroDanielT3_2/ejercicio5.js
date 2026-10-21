const prompt = require('prompt-sync')();

var mapa = new Map();
var cont = 0;
while (cont < 5) {
    let user = prompt('Introduce un alumno y su nota: ');
    let array = user.split(' ');
    let nota = Number(array[array.length-1]);

    let flag = false;
    for (let i = 0; i < array.length; i++){
        if (array[i] == ''){
            flag = true;
            break;
        }
    }

    if (array.length < 2 || Number.isNaN(nota) || flag){
        console.log('Entrada inválida');
    } else {
        let nombre = '';
        for (let i = 0; i < array.length-1; i++){
            nombre += array[i] + ' ';
        }
        mapa.set(nombre, nota);
        cont++;
    }
}

var media = 0;
for (const [nombre, nota] of mapa) {
    media += nota;
}
console.log(media / mapa.size);
const prompt = require('prompt-sync')();

var mapa = new Map();
var frase = prompt('Introduce una frase: ');
var array = frase.split(' ');

for (const palabra of array){
    if(palabra != '') {
        if (!mapa.has(palabra)){
            mapa.set(palabra, 1);
        } else {
            mapa.set(palabra, mapa.get(palabra)+1);
        }
    } 
}

for (const [palabra, frecuencia] of mapa){
    console.log(`${palabra} aparece ${frecuencia} veces`);
}
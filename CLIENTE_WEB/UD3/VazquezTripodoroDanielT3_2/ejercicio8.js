const prompt = require('prompt-sync')();

var mapa = new Map();

var texto = prompt('Introduce un texto: ');
texto = texto.toLowerCase();

var signos = ['.' , ',' , ';' , ':' , '!' , '?' , '¡' , '¿' , '"' ,  "'"  , '(' , ')' , '-'];
for(const signo of signos){
    texto = texto.replaceAll(signo, '');
}

var set = new Set();
set = texto.split(' ');

for (let i = 0; i < set.length; i++){
    if(set[i] != ''){
        if(!mapa.has(set[i])){
            mapa.set(set[i], 1);
        } else {
            mapa.set(set[i], mapa.get(set[i])+1);
        }
    }
}
for([palabra, repes] of mapa){
    console.log(palabra + ': ' + repes);
}

var anagramas = new Map();
for ([palabra , repes] of mapa) {
    let mezcla = palabra.split('').sort().join('');
    if(!anagramas.has(mezcla)){
        anagramas.set(mezcla, 1);
    } else {
        anagramas.set(mezcla, anagramas.get(mezcla) + 1);
    }
}

var superSet = new Set();
for ([mezcla , repes] of anagramas){
    let array = new Array();
    if(repes > 1){
        for ([palabra, valor] of mapa){
            if(palabra.split('').sort().join('') == mezcla){
                array.push(palabra);
            }
        }
    }
    superSet.add(array);
}

for(array of superSet){
    let res = 'Anagramas: ';
    if(array.length > 0){
        for(let j = 0; j < array.length; j++){
            if (j == array.length-1){
                res += array[j];
            } else {
                res += array[j] + ', ';
            }
        }
        console.log(res);
    }
}
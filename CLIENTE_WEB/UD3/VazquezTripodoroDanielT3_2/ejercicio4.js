const prompt = require('prompt-sync')();

var asistentes = new Set();
var bool = true;
while (bool){
    let nombre = prompt('Introduce una persona que asistió: ');
    if(nombre == 'fin'){
        bool = false;
    } else {
        asistentes.add(nombre);
    }
}

let comp = prompt('¿A quién buscas?: ');
if (asistentes.has(comp)){
    console.log('Asistió');
} else {
    console.log('No asistió');
}
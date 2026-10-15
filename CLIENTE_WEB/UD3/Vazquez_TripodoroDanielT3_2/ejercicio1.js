const prompt = require('prompt-sync')();

var conjunto = new Set();
for (let i = 0; i < 5; i++){
    let palabra = prompt('Introduce palabra: ');
    conjunto.add(palabra);
}

console.log(conjunto.size);
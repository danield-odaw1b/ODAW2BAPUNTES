const prompt = require('prompt-sync')();
var seg = prompt('Inserta una cantidad en segundos: ');
var horas = 0;
while(seg >= 3600){
    seg = seg - 3600;
    horas++;
}
var minutos = 0;
while (seg >= 60){
    seg = seg - 60;
    minutos++;
}

console.log(`${horas} horas, ${minutos} minutos y ${seg} segundos`);
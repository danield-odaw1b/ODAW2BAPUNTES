const prompt = require('prompt-sync')();

var seg = prompt('¿Cuántos segundos llevas en el semáforo?: ');

var semaforo = 'verde';
var aux = 29;

if(seg > 0){
    for(var i = 0; i < seg; i++){
        if (i > aux && semaforo == 'verde'){
            semaforo = 'amarillo';
            aux = i + 4;
            continue;
        } else if (i > aux && semaforo == 'amarillo'){
            semaforo = 'rojo';
            aux = i + 24;
            continue;
        } else if (i > aux && semaforo == 'rojo'){
            semaforo = 'verde';
            aux = i + 29;
            continue;
        }
    }
    console.log(semaforo);
} else {
    console.log('Error de formato');
}
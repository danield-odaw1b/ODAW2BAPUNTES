const prompt = require('prompt-sync')();
var num = prompt('Inserta un número: ');


if (!(num <= 0 || num >=0)) {
    console.log('Error de formato');
} else {
    if(num <= 100 && num >= 90){
        console.log('A');
    } else if(num <= 89 && num >= 80){
        console.log('B');
    } else if (num <= 79 && num >= 70) {
        console.log('C');
    } else if (num <= 69 && num >= 60) {
        console.log('D');
    } else if (num <= 59 && num >= 0) {
        console.log('F');
        if (num < 50) {
            console.log('suspenso');
        }
    } else {
        console.log('ERROR');
    }
}

const prompt = require('prompt-sync')();

var num = (Number)(prompt('Introduce un número: '));
var aux = 0;


if (!(num <= 0 || num >= 0)) {
    console.log('Error de formato');
} else {
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            aux++;
        }
    }
    if (num == 1 || aux <= 1 && num > 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
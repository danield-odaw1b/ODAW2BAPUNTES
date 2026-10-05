const prompt = require('prompt-sync')();

var num1 = (Number) (prompt('Introduce un número: '));
var num2 = (Number) (prompt('Ahora otro: '));
if (!(num1 <= 0 || num1 >= 0) || !(num2 <= 0 || num2 >= 0)) {
    console.log('Error de formato');
} else {
    var operacion = prompt('Ahora ¿Qué operación se desea realizar?: ');
    switch (operacion) {
        case 'suma':
            console.log(num1 + num2);
            break;
        case 'resta':
            console.log(num1 - num2);
            break;
        case 'multiplicacion':
            console.log(num1 * num2);
            break;
        case 'division':
            if (num1 == 0 || num2 == 0) {
                console.log('ERROR');
            } else {
                console.log(num1 / num2);
            }
            break;
        default:
            console.log('Operación no permitida');
    }
}

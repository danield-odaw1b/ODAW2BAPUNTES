const prompt = require('prompt-sync')();

var num = (Number) (prompt('Inserta un número entero: '));
var menu = (Number) (prompt('¿A qué quieres convertir el número? [1] Binario [2] Octal [3] Hexadecimal: '));
var res = '';
if ((num < 0 || num >= 0) && menu >= 1 && menu <= 3){
    switch(menu){
        case 1:
            while(num >= 2){
                res = num%2 + res;
                num = num / 2;
                num = parseInt(num, 10);
            }
            if (num == 1){
                res = 1 + res;
            }
            break;
        case 2:
            while(num >= 2){
                res = num%8 + res;
                num = num / 8;
                num = parseInt(num, 10);
            }
            if (num == 1){
                res = 1 + res;
            }
            break;
        case 3:
           res = num.toString(16);
           break;
        default:
            console.log('Operación no permitida');
    }
    console.log(res);
} else {
    console.log('Error de formato');
}
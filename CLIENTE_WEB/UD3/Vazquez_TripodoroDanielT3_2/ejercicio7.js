const prompt = require('prompt-sync')();

var mapa = new Map();
var bloqueados = new Map();
var blocks = 0;

var cond1 = 0;
while (cond1 < 3) {
    let texto = prompt('Crea un usuario y contraseña: ');
    let array = texto.split(' ');

    if (array.length != 2 || array[0] == '' || array[1] == '') {
        console.log('Entrada inválida');
    } else {
        mapa.set(array[0], array[1]);
        cond1++;
    }
}

var cond2 = true;
while (cond2) {
    let intento = prompt('Intento de login: ');
    let login = intento.split(' ');

    if (login.length != 2 || login[0] == '' || login[1] == '' && login[0] != '0' && login[1] != '0') {
        console.log('Entrada inválida');
    } else {
        if (bloqueados.get(login[0]) >= 3) {
            console.log('Cuenta bloqueada'); 
        } else if (mapa.has(login[0]) && mapa.get(login[0]) != login[1]) {
            if (bloqueados.has(login[0])) {
                bloqueados.set(login[0], bloqueados.get(login[0]) + 1);
            } else {
                bloqueados.set(login[0], 1);
            }
            if (bloqueados.get(login[0]) >= 3){
                console.log('Cuenta bloqueada');
                blocks++;
            } else {
                console.log('Usuario o contraseña incorrecta');
            }
        } else if ((mapa.has(login[0]) && login[1] == mapa.get(login[0])) && (bloqueados.get(login[0]) < 3 || !bloqueados.has(login[0]))) {
            console.log('Usuario logeado');
            cond2 = false;
        } else {
            console.log('Usuario o contraseña incorrecta');
        }
    }
    if (blocks >= mapa.size) {
        console.log('Todos los usuarios están bloqueados');
        cond2 = false;
    }

}
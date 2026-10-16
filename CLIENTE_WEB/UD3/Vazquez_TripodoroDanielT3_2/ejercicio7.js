const prompt = require('prompt-sync')();

var mapa = new Map();
var bloqueados = new Map();
var blocks = 0;

var cond1 = 0;
while (cond1 < 3){
    let texto = prompt('Crea un usuario y contraseña: ');
    let array = texto.split(' ');

    if(array.length != 2 || array[0] == '' || array[1] == ''){
        console.log('Entrada inválida');
    } else {
        mapa.set(array[0],array[1]);
        cond1++;
    }
}

var cond2 = true;
while (cond2) {
    let intento = prompt('Intengo de login: ');
    let login = intento.split(' ');

    if(login.length != 2 || login[0] == '' || login[1] == ''){
        console.log('Entrada inválida');
    } else {
        for (const [user, pass] of mapa){

            if(bloqueados.get(user) >= 3) {
                console.log('Cuenta bloqueada');
            }else if(login[0] == user && login[1] != pass){
                if (bloqueados.has(user)){
                    bloqueados.set(user, bloqueados.get(user)+1);
                } else {
                    bloqueados.set(user, 1);
                }
                console.log('Usuario o contraseña incorrecta');
                if (bloqueados.get(user) >= 3){blocks++;}
                break;
            } else if((login[0] == user && login[1] == pass) && bloqueados.get(user) < 3){
                console.log('Usuario logeado');
                cond2 = false;
                break;
            } else {
                console.log('Usuario o contraseña incorrecta');
            }
        }
        if (blocks >= mapa.size){
            console.log('Todos los usuarios están bloqueados');
            cond2 = false;
        }
    }
}
const prompt = require('prompt-sync')();

var menu = true;
var usuarios = new Array();
var dnis = new Array();
var nuevoUser = new Array();
var nuevoDni;

var letra = 'TRWAGMYFPDXBNJZSQVHLCKE';
var letraArr = letra.split('');

while (menu) {
    var opcion = prompt('=== INSERTAR USUARIO === [Nombre] [Apellido1] [Apellido2] [DNI]: ');
    if(opcion == 'exit'){
        menu = false;
        break;
    }
    nuevoUser = opcion.split(" ");
    nuevoDni = nuevoUser[3];
    var dniNum = nuevoDni.split(nuevoDni.charAt(8));

    var dniValido = 0;
    if(dnis.includes(nuevoDni)){
        dniValido = 2;
    } else if(!(letraArr.includes(nuevoDni.charAt(8)))){
        dniValido = 1;
    } else if(nuevoDni.length != 9){
        dniValido = 1;
    } else if (letraArr[(Number) (dniNum[0]) % 23] != nuevoDni.charAt(8)){
        dniValido = 1;
    }
    
    switch(dniValido) {
        case 0:
            usuarios.push(nuevoUser);
            dnis.push(nuevoDni);
            console.log(usuarios);
            break;
        case 1:
            console.log('Error DNI');
            break;
        case 2:
            console.log('DNI ya existe');
            break;
    }
}
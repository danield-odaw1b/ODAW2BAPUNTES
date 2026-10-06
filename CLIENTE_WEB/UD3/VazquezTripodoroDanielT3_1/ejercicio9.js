const prompt = require('prompt-sync')();

var menu = true;
var usuarios = new Array();
var dnis = new Array();
var nuevoUser = new Array();
var nuevoDni;

var letra = 'TRWAGMYFPDXBNJZSQVHLCKE';
var letraArr = letra.split('');


while (menu) {
    var opcion = prompt('=== INSERTAR USUARIO === \n' +
        '[Nombre] [Apellido1] [Apellido2] [DNI] \n');
        if(opcion == 'exit'){
            menu = false;
            break;
        }
    nuevoUser = opcion.split(" ");
    nuevoDni = nuevoUser[3];

    var dniValido = true;
    for (let i = 0; i < dnis.length; i++){
        if(nuevoDni == dnis[i]){
            dniValido = false;
        }
    }
    for (let i = 0; i < letraArr.length; i++){
        if(nuevoDni.charAt(9) == letraArr[i]){
            break;
        } else if (i == letraArr.length-1){
            dniValido = false;
        }
    }
    if(nuevoDni.length != 9){
        dniValido = false;
    }


    if(dniValido){
        console.log(nuevoUser);
        usuarios.push(opcion);
    } else{
        console.log('Error en el DNI');
    }
}
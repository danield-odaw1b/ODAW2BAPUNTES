const prompt = require('prompt-sync')();
var lista = [];

var bool = true;
while (bool) {
    console.log('[1] AGREGAR TAREA');
    console.log('[2] ELIMINAR TAREA');
    console.log('[3] MARCAR COMPLETADA');
    console.log('[4] MOSTRAR TAREAS COMPLETADAS');
    console.log('[5] SALIR DEL PROGRAMA');
    var opcion = (Number)(prompt('Elige una opción (1-5): '));

    switch (opcion) {
        case 1:
            var tituloRepe = false;
            var nuevoTitulo = prompt('Introduce un título: ');
            if (nuevoTitulo == '') {
                nuevoTitulo = 'error';
            }
            for (let i = 0; i < lista.length; i++) {
                if (lista[i][0] == nuevoTitulo) {
                    tituloRepe = true;
                    break;
                }
            }
            if (tituloRepe) {
                console.log('Error. Título duplicado');
            } else {
                var nuevaDesc = prompt('Introduce la descripción: ');
                if (nuevaDesc == '') {
                    nuevaDesc = 'error';
                }
                var nuevaTarea = [nuevoTitulo, nuevaDesc, false];
                lista.push(nuevaTarea);
            }
            break;

        case 2:
            if (lista.length == 0) {
                console.log('No hay tareas para eliminar');
            } else {
                var res = '';
                var cont = 1;
                for (let i = 0; i < lista.length; i++) {
                    for (let j = 0; j < lista[i].length; j++) {
                        if (j == 0) {
                            res += lista[i][j] + ' ';
                        } else if (j == 2) {
                            res += lista[i][j];
                        }
                    }
                    console.log(cont + ' ' + res);
                    res = '';
                    cont++;
                }
                var borrar = (Number)(prompt('¿Qué tarea desea borrar?: '));
                if (borrar < 1 || borrar > lista.length) {
                    console.log('Error de rango');
                } else {
                    var tituloBorrado = lista[borrar - 1][0];
                    if (lista.splice(borrar - 1, 1)) {
                        console.log('Tarea ' + tituloBorrado + ' eliminada');
                    }
                }
            }
            break;

        case 3:
            if (lista.length == 0) {
                console.log('No hay tareas para marcar como completadas');
            } else {
                var res = '';
                var cont = 1;
                for (let i = 0; i < lista.length; i++) {
                    for (let j = 0; j < lista[i].length; j++) {
                        if (j == 0) {
                            res += lista[i][j] + ' ';
                        } else if (j == 2) {
                            res += lista[i][j];
                        }
                    }
                    console.log(cont + ' ' + res);
                    res = '';
                    cont++;
                }
                var marcar = (Number)(prompt('¿Qué tarea se ha completado?: '));
                if (marcar < 1 || marcar > lista.length) {
                    console.log('Tarea inexistente');
                } else {
                    if (lista[marcar - 1][2]) {
                        console.log('Tarea ' + lista[marcar - 1][0] + ' ya completada');
                    } else {
                        lista[marcar - 1][2] = true;

                    }
                }
            }
            break;

        case 4:
            var cont = 0;
            for (let i = 0; i < lista.length; i++) {
                if (lista[i][2]) {
                    console.log(lista[i]);
                    cont++;
                }
            }
            if (cont == 0) {
                console.log('No existen tareas completadas');
            }
            break;

        case 5:
            console.log('Hasta pronto');
            bool = false;
            break;

        default:
            console.log('error');

    }
}
const plan = {
    nombre: 'Plan de fuerza',
    ejercicios: [
        { nombre: 'Sentadillas', duracion: 15, intensidad: 7 },
        { nombre: 'Dominadas', duracion: 10, intensidad: 5 },
    ],
}


function crearEjercicio(nombre, duracion, intensidad) {
    if (Number(nombre) == '' || Number.isNaN(Number(duracion)) || duracion < 1 || Number.isNaN(Number(intensidad)) || intensidad < 1 || intensidad > 10) {
        return null;
    } else {
        return nuevoEj = { nombre, duracion, intensidad };
    }
}


function crearplan(nombre) {
    return planNuevo = { nombre: nombre, ejercicios: [] }
}


function agregarEjercicio(plan, ejercicio) {
    return planNuevo = {
        ...plan, ejercicios: [...plan.ejercicios, ejercicio]
    }
}


function eliminarEjercicio(plan, nombreEjercicio) {
    return planNuevo = {
        ...plan,
        ejercicios: [...plan.ejercicios.filter((ej) => ej.nombre != nombreEjercicio)]
    }

}


function listarEjercicios(plan) { /* UNDEFINED ERROR */
    if (plan.ejercicios == null) {
        console.log('El plan no tiene ejercicios.');
    } else {
        for (const ej of plan.ejercicios) {
            console.log(ej.nombre + ': ' + ej.duracion + ' minutos');
        }
    }
}


function filtrarEjercicios(plan, intensidad) {
    var resultado = new Array();
    for (const ej of plan.ejercicios) {
        if (ej.intensidad <= intensidad) {
            resultado.push(ej);
        }
    }
    return resultado;
}


function calcularDuracionTotal(plan) {
    var suma = 0;
    for (const ej of plan.ejercicios) {
        suma += ej.duracion;
    }
    return suma;
}


function actualizarEjercicio(plan, nombreEjercicio, duracion, intensidad) {
    var auxBusqueda = false;
    var intensidadNueva;
    for (const ej of plan.ejercicios) {
        if (ej.nombre == nombreEjercicio) {
            auxBusqueda = true;
            if (intensidad != undefined) {
                intensidadNueva = intensidad;
            } else {
                intensidadNueva = ej.intensidad;
            }
            break;
        }
    }
    if (auxBusqueda) {

        var planNuevo = {
            nombre: plan.nombre,
            ejercicios: [
                ...plan.ejercicios.filter((ej) => ej.nombre != nombreEjercicio),
                { nombre: nombreEjercicio, duracion: duracion, intensidad: intensidadNueva },
            ],
        }
        return planNuevo;
    }
    return plan;
}


function buscarEjercicioRecursivo(plan, nombreEjercicio, posicion = 0) {
    if (posicion >= plan.ejercicios.length) {
        return null;
    } else {
        if (plan.ejercicios[posicion].nombre === nombreEjercicio) {
            return plan.ejercicios[posicion];
        } else {
            return buscarEjercicioRecursivo(plan, nombreEjercicio, (posicion + 1));
        }
    }
}


function multiplicarDuracionesEjercicios(...duraciones) {
    var resultado = 1;
    if (duraciones.length >= 1) {
        for (const duracion of duraciones[0]) {
            console.log(duracion);
            resultado = resultado * duracion;
        }
    }
    return resultado;
}


function ordenarEjercicios(plan, criterio) {
    var ordenCriterio = new Array();
    var ejerciciosOrd = new Array();
    switch (criterio) {
        case 'nombre':
            for (const ej of plan.ejercicios) {
                ordenCriterio.push(ej.nombre);
            }
            ordenCriterio.sort((a, b) => a.localeCompare(b, 'es'));
            for(const nombre of ordenCriterio) {
                for (const ej of plan.ejercicios){
                    if (ej.nombre == nombre){
                        ejerciciosOrd.push(ej);
                    }
                }
            }
            break;
        case 'duracion':
            for (const ej of plan.ejercicios) {
                ordenCriterio.push(ej.duracion);
            }
            ordenCriterio.sort((a, b) => b - a);
            for(const duracion of ordenCriterio) {
                for (const ej of plan.ejercicios){
                    if (ej.duracion == duracion){
                        ejerciciosOrd.push(ej);
                    }
                }
            }
            break;
        case 'intensidad':
            for (const ej of plan.ejercicios) {
                ordenCriterio.push(ej.intensidad);
            }
            ordenCriterio.sort((a, b) => b - a);
            for(const intensidad of ordenCriterio) {
                for (const ej of plan.ejercicios){
                    if (ej.intensidad == intensidad){
                        ejerciciosOrd.push(ej);
                    }
                }
            }
            break;
        default:
            return plan;
    }
    var nuevoPlan = {
        nombre: plan.nombre,
        ejericios: ejerciciosOrd,
    };
    return nuevoPlan;
}


function contienePalabra(texto, palabra){
    var res = false;
    let dividido = texto.split(' ');
    for (const div of dividido){
        if (palabra == div){
            res = true;
            break;
        }
    }
    return res;
}
function buscarEjerciciosPorNombre(plan, nombreParcial) {
    return ejerciciosFiltrados = plan.ejercicios.filter((a) => contienePalabra(a.nombre, nombreParcial));
}

const {
    contienePalabra
} = require('./funcionesUtiles');


function crearEjercicio(nombre, duracion, intensidad) {
    if (Number(nombre) == '' || Number.isNaN(Number(duracion)) || duracion < 1 || Number.isNaN(Number(intensidad)) || intensidad < 1 || intensidad > 10) {
        return null;
    } else {
        return nuevoEj = { nombre: nombre, duracion: duracion, intensidad: intensidad };
    }
}


function crearPlan(nombre) {
    return planNuevo = { nombre: nombre, ejercicios: [] }
}


function agregarEjercicio(plan, ejercicio) {
    return planNuevo = {
        nombre: plan.nombre, 
        ejercicios: [...plan.ejercicios, ejercicio]
    }
}


function eliminarEjercicio(plan, nombreEjercicio) {
    return planNuevo = {
        ...plan,
        ejercicios: [...plan.ejercicios.filter((ej) => ej.nombre != nombreEjercicio)]
    }
}


function listarEjercicios(plan) {
    if (plan.ejercicios.length < 1) {
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


function buscarEjerciciosPorNombre(plan, nombreParcial) {
    return ejerciciosFiltrados = plan.ejercicios.filter((a) => contienePalabra(a.nombre, nombreParcial));
}


function combinarPlanes(plan1, plan2){
    var nombreNuevo = plan1.nombre + ' + ' + plan2.nombre;
    
    var ejerNuevos = new Array()
    var contNombres = new Map();

    for(const ej of plan1.ejercicios){
        if (!contNombres.has(ej.nombre)){
            ejerNuevos.push(ej);
            contNombres.set(ej.nombre, 1);
        } else {
            let ejNuevo = {
                nombre: ej.nombre + '' + (contNombres.get(ej.nombre) + 1),
                duracion: ej.duracion,
                intensidad: ej.intensidad
            };
            ejerNuevos.push(ejNuevo);
            contNombres.set(ej, contNombres.get(ej.nombre) + 1);
        }
    }
    for(const ej of plan2.ejercicios){
        if (!contNombres.has(ej.nombre)){
            ejerNuevos.push(ej);
            contNombres.set(ej.nombre, 1);
        } else {
            let ejNuevo = {
                nombre: ej.nombre + '' + (contNombres.get(ej.nombre) + 1),
                duracion: ej.duracion,
                intensidad: ej.intensidad
            };
            contNombres.set(ej.nombre, contNombres.get(ej.nombre) + 1);
            ejerNuevos.push(ejNuevo);
        }
    }

    return planNuevo = {
        nombre: nombreNuevo,
        ejercicios: ejerNuevos,
    };
}


module.exports = {
    crearEjercicio,
    crearPlan,
    agregarEjercicio,
    eliminarEjercicio,
    listarEjercicios,
    filtrarEjercicios,
    actualizarEjercicio,
    buscarEjercicioRecursivo,
    ordenarEjercicios,
    buscarEjerciciosPorNombre,
    combinarPlanes
}
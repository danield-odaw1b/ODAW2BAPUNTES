
function crearEjercicio(nombre, duracion, intensidad) {
    if(Number(nombre) == '' || Number.isNaN(Number(duracion)) || duracion < 1 || Number.isNaN(Number(intensidad)) || intensidad < 1 || intensidad > 10){
        return null;
    } else {
        return nuevoEj = {nombre, duracion, intensidad}; 
    }
}


function crearplan(nombre) {
    return planNuevo = {nombre: nombre, ejercicios: []}
}


function agregarEjercicio(plan, ejercicio) {
    return planNuevo = {
        ...plan, ejercicios: [...plan.ejercicios, ejercicio]}
}


function eliminarEjercicio(plan, nombreEjercicio) {
    return planNuevo = {
        ...plan,
            ejercicios: [...plan.ejercicios.filter((ej) => ej.nombre != nombreEjercicio)]
    }
        
}


function listarEjercicios(plan) {
    for (ej of plan.ejercicios){
        console.log();
    }
}
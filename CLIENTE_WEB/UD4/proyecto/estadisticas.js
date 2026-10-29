function calcularDuracionTotal(plan) {
    var suma = 0;
    for (const ej of plan.ejercicios) {
        suma += ej.duracion;
    }
    return suma;
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


function estadisticasPlan(plan) {
    var duracionPromedio = 0;
    var intensidadPromedio = 0;
    var totalEjercicios;

    if(plan.ejercicios.length > 0){
        totalEjercicios = 0;
        for (const ej of plan.ejercicios){
            duracionPromedio += ej.duracion;
            intensidadPromedio += ej.intensidad;
            totalEjercicios++;
        }
        duracionPromedio = duracionPromedio / totalEjercicios;
        intensidadPromedio = intensidadPromedio / totalEjercicios;
    }
    
    return res = {
        duracionPromedio: duracionPromedio,
        intensidadPromedio: intensidadPromedio,
        totalEjercicios: totalEjercicios,
    };
}
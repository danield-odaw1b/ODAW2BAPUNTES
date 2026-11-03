const prompt = require('prompt-sync')();

const {
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
} = require('./datos');

const {
    calcularDuracionTotal,
    multiplicarDuracionesEjercicios,
    estadisticasPlan
} = require('./estadisticas');



function menuPrincipal() {

    var listaPlanes = new Map();
    var bool = true;
    
    while(bool){
        console.log('--- Menú Principal ---');
        console.log('1. Crear un nuevo plan');
        console.log('2. Gestionar un plan existente');
        console.log('3. Salir');
        var res = Number (prompt());

        switch(res){
            case 1:
                let nombrePlan = prompt('Nombre del nuevo plan: ');
                let nuevoPlan = crearPlan(nombrePlan);
                listaPlanes.set(nuevoPlan.nombre, nuevoPlan);
                console.log('Plan creado.');
                break;
            case 2:
                if(listaPlanes.size < 1){
                    console.log('No hay planes disponibles.');
                } else {
                    console.log('Planes disponibles:');
                    let indice = 1;
                    for (const [nombre, plan] of listaPlanes){
                        console.log(indice + '. ' + nombre);
                        indice++;
                    }
                    let planEleg = Number (prompt());
                    if(planEleg < 0 || planEleg > listaPlanes.size || Number.isNaN(planEleg)){
                        console.log('Plan no válido.');
                    } else {
                        let cont = 1;
                        for ([nombre, plan] of listaPlanes){
                            if (cont == planEleg){
                               listaPlanes = menuPlanes(plan, listaPlanes);
                            }
                            cont++;
                        }
                    }
                }
                break;
            case 3:
                console.log('¡Hasta pronto!');
                bool = false;
                break;
            default:
                console.log('Opción no válida.');
                break;
        }
    }  
}

function menuPlanes(plan, listaPlanes){
    var bool = true;
    while (bool){
        console.log('--- Gestionando: ' + plan.nombre + ' ---');
        console.log('1. Agregar ejercicio');
        console.log('2. Eliminar ejercicio');
        console.log('3. Listar ejercicios');
        console.log('4. Filtrar ejercicios por intensidad');
        console.log('5. Actualizar ejercicio');
        console.log('6. Calcular duración total del plan');
        console.log('7. Buscar ejercicio recursivamente');
        console.log('8. Multiplicar duraciones de ejercicios');
        console.log('9. Ordenar ejercicios');
        console.log('10. Buscar ejercicios por nombre parcial');
        console.log('11. Ver estadísticas del plan');
        console.log('12. Combinar con otro plan');
        console.log('13. Volver al menú principal');
        var eleccion = Number (prompt());

        switch(eleccion){
            case 1:
                let nombreEj = prompt('Nombre del ejercicio: ');
                let duracionEj = Number (prompt('Duración del ejercicio: '));
                let intensidadEj = Number (prompt('Intensidad del ejercicio: '));
                let nuevoEj = crearEjercicio(nombreEj, duracionEj, intensidadEj);
                if(nuevoEj == null){
                    console.log('Datos no válidos.');
                } else {
                    var nuevoPlan = agregarEjercicio(listaPlanes.get(plan.nombre), nuevoEj);
                    listaPlanes.set(nuevoPlan.nombre, nuevoPlan);
                    console.log('Ejercicio agregado.');
                }
                break;
            case 2:
                let nombreBorrar = prompt('Nombre del ejercicio a eliminar: ');
                let existe = false;
                for (const ej of listaPlanes.get(plan.nombre).ejercicios){
                    if (ej.nombre == nombreBorrar){
                        existe = true;
                        break;
                    }
                }
                if (!existe){
                    console.log('No existe ningún ejercicio con ese nombre.');
                } else {
                    let nuevoPlan = eliminarEjercicio(listaPlanes.get(plan.nombre), nombreBorrar);
                    listaPlanes.set(nuevoPlan.nombre, nuevoPlan);
                    console.log('Ejercicio eliminado.');
                }
                break;
            case 3:
                listarEjercicios(listaPlanes.get(plan.nombre));
                break;
            case 4:
                let maxima = Number (prompt('Introduce la intensidad máxima: '));
                let resultado = filtrarEjercicios(listaPlanes.get(plan.nombre), maxima);
                if (resultado.length < 1){
                    console.log('Ningún ejercicio cumple el filtro.');
                } else {
                    console.log(resultado);
                }
                break;
            case 5:
                let nombreAct = prompt('Introduce el nombre del ejercicio a actualizar: ');
                let existeAct = false;
                for (const ej of listaPlanes.get(plan.nombre).ejercicios){
                    if (ej.nombre == nombreAct){
                        existeAct = true;
                        break;
                    }
                }
                if (!existeAct){
                    console.log('No existe ningún ejercicio con ese nombre.');
                } else {
                    let durAct = Number(prompt('Introduce la nueva duración: '));
                    let intAct = Number(prompt('Introduce la nueva intensidad: '));
                    if (durAct < 1 || intAct < 1 || intAct > 10){
                        console.log('Datos no válidos.');
                    } else {
                        let planActualizado = actualizarEjercicio(listaPlanes.get(plan.nombre), nombreAct, durAct, intAct);
                        listaPlanes.set(planActualizado.nombre, planActualizado);
                        console.log('Ejercicio actualizado.');
                    }
                }
                break;
            case 6:
                let sumaTotal = calcularDuracionTotal(listaPlanes.get(plan.nombre));
                console.log('Duración total: ' + sumaTotal + ' minutos');
                break;
            case 7:
                let nombreBusq = prompt('Nombre del ejercicio a buscar: ');
                let ejResult = buscarEjercicioRecursivo(listaPlanes.get(plan.nombre), nombreBusq);
                if (ejResult != null){
                    console.log(ejResult);
                } else {
                    console.log('Ejercicio no encontrado.');
                }
                break;
            case 8:
                let duraciones = listaPlanes.get(plan.nombre).ejercicios.map((ej) => ej.duracion);
                let resMult = multiplicarDuracionesEjercicios(...duraciones);
                console.log('Producto de las duraciones: ' + resMult);
                break;
            case 9:
                let criterio = String(prompt('Introduce el criterio para ordenar: '));
                if (criterio == 'nombre' || criterio == 'duracion' || criterio == 'intensidad'){
                    let planOrdenado = ordenarEjercicios(listaPlanes.get(plan.nombre), criterio);
                    listaPlanes.set(plan.nombre, planOrdenado);
                    console.log('Ejercicios ordenados.');
                } else {
                    console.log('Criterio no válido.');
                }
                break;
            case 10:
                let nombreParcial = prompt('Introduce el nombre parcial del ejercicio: ');
                let ejerciciosFiltrados = buscarEjerciciosPorNombre(listaPlanes.get(plan.nombre), nombreParcial);
                if (ejerciciosFiltrados.length < 1){
                    console.log('No se han encontrado ejercicios.');
                } else {
                   console.log(ejerciciosFiltrados); 
                }
                break;
            case 11:
                let arrayProm = estadisticasPlan(listaPlanes.get(plan.nombre));
                console.log('Duración promedio: ' + arrayProm.duracionPromedio + ' minutos');
                console.log('Intensidad promedio: ' + arrayProm.intensidadPromedio);
                console.log('Total de ejercicios: ' + arrayProm.totalEjercicios);
                break;
            case 12:
                if (listaPlanes.size < 2) {
                    console.log('No hay otros planes para combinar.');
                } else {
                    console.log('Planes disponibles: ');
                    let cont = 1;
                    let mapaCombinados = new Map();
                    for (const [nombreLista, planLista] of listaPlanes){
                        if(!(nombreLista == plan.nombre)) {
                            console.log(cont + '. ' + nombreLista);
                            mapaCombinados.set(cont, planLista);
                            cont++;
                        }
                    }
                    let posCombinar = Number (prompt('Escoge el número del a combinar: '));
                    if (mapaCombinados.has(posCombinar)){
                        let planCombinado = combinarPlanes(listaPlanes.get(plan.nombre), mapaCombinados.get(posCombinar));
                        listaPlanes.set(planCombinado.nombre, planCombinado);
                        console.log('Plan combinado creado: ' + plan.nombre + ' + ' + mapaCombinados.get(posCombinar).nombre);
                    } else {
                        console.log('Plan no válido.');
                    }
                }
                break;
            case 13:
                bool = false;
                break;
            default:
                console.log('Opción no válida.');
                break;
        }
    }
    return listaPlanes;
}


module.exports = {
    menuPrincipal
}
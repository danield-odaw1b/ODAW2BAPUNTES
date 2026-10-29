const prompt = require('prompt-sync')();

const {
    crearPlan
} = require('./datos');

menuPrincipal(); // BORRAR (Recuerda datos.js error undefined)


function menuPrincipal() {

    var listaPlanes = new Set();
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
                let nuevoPlan = {
                    nombre: nombrePlan,
                    ejercicios: [],
                };
                listaPlanes.add(nuevoPlan);
                console.log('Plan creado.');
                break;
            case 2:
                if(listaPlanes.size < 1){
                    console.log('No hay planes disponibles.');
                } else {
                    console.log('Planes disponibles:');
                    let indice = 1;
                    for (const plan of listaPlanes){
                        console.log(indice + '. ' + plan.nombre);
                        indice++;
                    }
                    let planEleg = Number (prompt());
                    if(planEleg < 0 || planEleg > listaPlanes.size || Number.isNaN(planEleg)){
                        console.log('Plan no válido.');
                    } else {
                        let cont = 1;
                        for (plan of listaPlanes){
                            if (cont == planEleg){
                                menuPlanes(plan);
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

function menuPlanes(plan){
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
            console.log('Miau');
            break;
        case 13:
            



    }
}



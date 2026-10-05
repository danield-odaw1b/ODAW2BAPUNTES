const prompt = require('prompt-sync')();

var mes = prompt('Dame un mes en minúsculas: ');
var dia = prompt('Ahora un día: ');

if(!(dia <= 0 || dia > 0)){
    console.log('Error de formato');
} else {
    if(dia < 1 || dia > 31){
        console.log('Día inexistente');
    } else {
        switch(mes){
        case 'enero': case 'mayo': case 'noviembre':
            if(dia == 1){
                console.log('Fiesta');
            } else{
                console.log('Día normal');
            }
            break;
        case 'febrero':
            if(dia <= 29){
                console.log('Día normal');
            } else{
                console.log('Día inexistente');
            }
            break;
        case 'marzo':
            if(dia == 29){
                console.log('Fiesta');
            } else{
            console.log('Día normal');
            }
            break;
        case 'julio':
            console.log('Día normal');
            break;
        case 'octubre':
            if(dia == 12){
                console.log('Fiesta');
            } else{
                console.log('Día normal');
            }
            break;
        case 'diciembre':
            if(dia == 6 || dia == 25){
                console.log('Fiesta');
            } else{
                console.log('Día normal');
            }
            break;      
        case 'abril': case 'junio': case 'septiembre':
            if(dia > 30){
                console.log('Día inexistente');
            } else {
                console.log('Día normal');
            }
            break;
        default: 
            console.log('Error de formato');
        }
    }
}
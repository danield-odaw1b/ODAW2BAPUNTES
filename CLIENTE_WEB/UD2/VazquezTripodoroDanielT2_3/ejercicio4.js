const prompt = require('prompt-sync')();

var coste = 0;

var nac = prompt('¿El billete es nacional o internacional?: ');
if (nac == 'nacional' || nac == 'internacional'){
    var edad = (Number) (prompt('Introduce la edad del pasajero (Solo el número): '));
    if(edad >= 0) {
        var dia =  (Number) (prompt('¿Qué día es el vuelo?(1-30): '));
        if(dia >= 1 && dia <= 30){
            var reserva =  (Number) (prompt('¿Qué día se hizo la reserva? (1-30): '));
            if(reserva >= 1 && reserva <= 30 && dia > reserva){
                coste = 100;
                if(nac == 'internacional'){coste = coste + (coste*0.20);}
                if((dia - reserva) < 7){coste = coste + (coste*0.15);}
                if(edad > 65){coste = coste - (coste * 0.65);}
                if(edad < 12){coste = coste - (coste*0.05);}
            }
        }
    }
}
if(!(edad <= 0 || edad > 0) || !(dia <= 0 || dia > 0) || !(reserva <= 0 || reserva > 0)){
    console.log('Error de formato');
} else{
  console.log(coste);  
}

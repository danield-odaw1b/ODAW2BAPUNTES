const prompt = require('prompt-sync')();

var tablero = new Array();
for (let i = 0; i < 10; i++) {
    var fila = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    tablero.push(fila);
}
var mina = prompt('¿En qué casilla está la mina(x,y)?: ');

var posMina = mina.split(',');

if(posMina[0] > 9 || posMina[0] < 0 || posMina[1] > 9 || posMina[1] < 0){
    console.log('Error de juego');
} else {
    var bool = true;
    var cont = 0;
    while(bool) {
        if(cont == 99){
            console.log('Has ganado, enhorabuena!');
            bool = false;
            break;
        }
        var casilla = prompt('Selecciona una casilla: ');
        var posCasilla = casilla.split(',');
        var casilla1 = (Number) (posCasilla[0]);
        var casilla2 = (Number) (posCasilla[1]);
        var mina1 = (Number) (posMina[0]);
        var mina2 = (Number) (posMina[1]);

        if(posCasilla[0] > 9 || posCasilla[0] < 0 || posCasilla[1] > 9 || posCasilla[1] < 0){
            console.log('Error de juego');
            bool = false;
        } else if(posCasilla[0] == posMina[0] && posCasilla[1] == posMina[1]){
            console.log('Game over');
            bool = false;
        } else {
            if(tablero[casilla1][casilla2] != 1){
                tablero[casilla1][casilla2] = 1;
                cont++;
                if(casilla1 >= mina1-1 && casilla1 <= mina1+1 
                    && casilla2 >= mina2-1 && casilla2 <= mina2+1){
                        console.log('Caliente, caliente');
                } else {
                    console.log('Frío, frío');
                }
            }
        }
    }
}
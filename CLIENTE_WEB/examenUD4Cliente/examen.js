function crearTablero(columnas, filas){
    if (!Number.isInteger(Number(columnas)) || !Number.isInteger(Number(filas))
           || columnas > 26 || columnas < 1 || filas > 26 || filas < 1) {
                return 'Error';
    } else {
        let abecedario = 'abcdefghijklmnopqrstuvwxyz';
        let abecedarioArray = abecedario.split('');

        let arrayTablero = new Array();
        for (let i = 0; i < columnas; i++) {
            let arrayFilas = new Array();

            for (let j = 1; j <= filas; j++){
                arrayFilas.push(abecedarioArray[i] + j);
            }

            arrayTablero.push(arrayFilas);
        }
        return arrayTablero;
    }
}

function colocarCaballo(casilla, tablero) {
    if (!casillaEnRango(casilla, tablero)){
        return 'Fuera de rango';
    } else {
        let abecedario = 'abcdefghijklmnopqrstuvwxyz';
        let abecedarioArray = abecedario.split('');
        let columnaCaballo = Number(abecedarioArray.indexOf(casilla.charAt(0)));
        let filaCaballo = Number(casilla.charAt(1));

        let arrayMovimientos = new Array();
        for (let i = 0; i < tablero.length; i++){
            for (const posicion of tablero[i]){
                let columna = Number(abecedarioArray.indexOf(posicion.charAt(0)));
                let fila = Number(posicion.charAt(1));
                if (fila == (filaCaballo + 2) || fila == (filaCaballo - 2)){
                    if (columna == (columnaCaballo + 1) || columna == (columnaCaballo -1)){
                        if (casillaEnRango(posicion, tablero)){
                            arrayMovimientos.push(posicion);
                            continue;
                        }
                    }
                }
                if (columna == (columnaCaballo +2) || columna == (columnaCaballo -2)) {
                    if(fila == (filaCaballo + 1) || fila == (filaCaballo - 1)){
                        if (casillaEnRango(posicion, tablero)){
                            arrayMovimientos.push(posicion);
                            continue;
                        }
                    }
                }
            }
        }
        return arrayMovimientos;
    }

}

function casillaEnRango(casilla, tablero){
    for (let i = 0; i < tablero.length; i++){
        for (const posicion of tablero[i]){
            if (casilla == posicion){
                return true;
            }
        }
    }
    return false;
}
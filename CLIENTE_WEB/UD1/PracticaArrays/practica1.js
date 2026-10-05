function sumaMatriz(matriz) {
    let suma = 0;
    for(let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[i].length; j++) {
           suma += matriz[i][j]
        }
    }
    return suma;
}
console.log(sumaMatriz([[1, 2, 3], [4, 5, 6]]));
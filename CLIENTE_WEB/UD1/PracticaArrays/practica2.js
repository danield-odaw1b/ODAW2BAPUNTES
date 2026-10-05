function quitarDesde(lista, posicion, cantidad) {
    var lista2 = lista.splice(posicion,cantidad);
    return lista2;
}
const colores = ['rojo', 'verde', 'azul', 'negro'];
console.log(quitarDesde(colores, 1, 2));
console.log(colores);
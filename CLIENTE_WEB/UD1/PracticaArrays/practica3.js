function posiciones(lista, valor) {
  const encontradas = [];
  var aux = 0;
  for (const i of lista){
    if (i == valor) {
        encontradas.push(lista.indexOf(i, aux));
    }
    aux++;
  }
  return encontradas;
}
console.log(posiciones(['a', 'b', 'a', 'c', 'a'], 'a'));
const prompt = require('prompt-sync')();

cajas = prompt('Introduce el peso de tres cajas: ');

caja1 = cajas.substring(0,2);
caja2 = cajas.substring(3,5);
caja3 = cajas.substring(6,8);

comparador = (caja1 > caja2 && caja1 > caja3)? 'La caja más pesada es la 1' : 'x';
comparador2 = (comparador == 'x' && caja2 > caja3)? 'La caja más pesada 2' : 'La caja más pesada es la 3';
resultado = (comparador == 'x')? comparador2 : comparador;
console.log(resultado);

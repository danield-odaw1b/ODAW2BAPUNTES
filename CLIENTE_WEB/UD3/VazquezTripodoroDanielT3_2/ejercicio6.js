const prompt = require('prompt-sync')();

var bool = true;
var conj = new Set();
var res = '';
var aux = 0;


while (bool){
    let texto = prompt('Introduce un número: ');
    let num = Number(texto);

    if(!Number.isInteger(Number(texto)) || (num == '' && texto != '0')) {
        console.log('Entrada inválida');
    } else if (conj.has(num)){
        bool = false;
    } else {
        if(aux > 0){
            res += ', ';
        }
        conj.add(num);
        aux++;
        res += num;
    }
}

console.log(res);
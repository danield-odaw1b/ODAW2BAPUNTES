const prompt = require('prompt-sync')();

var res = '';
var aux3 = 0;
var aux = 1;
var aux2 = 0;
for (var i = 0; i <= 18; i++){
    if(aux2 < 9){
        res += aux;
        aux++; aux2++;
    } else{
        res += aux3;
        aux--;
        aux3 = aux;
    }
    console.log(res);
}
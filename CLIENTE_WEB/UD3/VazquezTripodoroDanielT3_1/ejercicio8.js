const prompt = require('prompt-sync')();

var arr = new Array();
var cont = 0;
var aux = 0;
for (let i = 1; i < 38; i++){
    if(i > 9 && i < 20) {
        arr.push(aux);
        aux = cont;
        cont --;
    } else if(i > 19){
        arr.shift();
    } else {
        arr.push(i);
        cont++;
    }
    console.log(JSON.stringify(arr));
}


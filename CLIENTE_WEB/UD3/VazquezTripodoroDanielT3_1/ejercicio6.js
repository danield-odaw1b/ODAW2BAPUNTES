const prompt = require('prompt-sync')();

var arr = new Array(10);
for (let i = 0; i < 10; i++){
    arr[i] = prompt('Introduce un número en ' + i + ': ');
}


var arrRep = new Array();
var aux = true;
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arrRep.length; j++){
        if(arr[i] == arrRep[j]) {
            aux = false;
        }
    }
    if(aux) {
        arrRep.unshift(arr[i]);
    }
    aux = true;
}

console.log(arrRep);
const prompt = require('prompt-sync')();

var arr = new Array(10);
for (let i = 0; i < 10; i++){
    arr[i] = prompt('Introduce un número en ' + i + ': ');
}

var arrRep = new Array();
var aux = true;
for (let i = arr.length; i >= 0; i--){
    for (let j = arr.length; j >= 0; j--){
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
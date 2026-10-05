const prompt = require('prompt-sync')();

var arr = [prompt('Número 1: '), prompt('Número 2: '),
    prompt('Número 3: '), prompt('Número 4: '),
    prompt('Número 5: '), prompt('Número 6: '),
    prompt('Número 7: '), prompt('Número 8: '),
    prompt('Número 9: '), prompt('Número 10: ')
];

var aux = 0;
var arr2 = new Array(10);
for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr2.length; j++){
        if(arr[i] == arr[j]){
            aux ++;
        }
    }
    arr2[i] = aux;
    aux = 0;
}

var res = 0;
var valorRep = 0;
var contador = false;
for (let i = 0; i < arr2.length; i++){
    if(arr2[i] > valorRep) {
        res = arr[i];
        contador = false;
    }
    if (arr2[i] == valorRep && arr[i] != res){
        contador = true;
    }
}
if(contador){
    console.log('ERROR');
} else {
    console.log(res);
}

/*
var res = -1;
var multi = 0;
var contIgual = 0;
for (let i = 0; i < arr2.length; i++){
    if(arr2[i] > multi){
        res = arr[i];
        contIgual = 0;
        multi = arr2[i];
    } else if (arr2[i] == multi && arr2[i] != res){
        contIgual++;
    }
} 
if (contIgual > 1){
    console.log('ERROR');
} else {
    console.log(res);
} */
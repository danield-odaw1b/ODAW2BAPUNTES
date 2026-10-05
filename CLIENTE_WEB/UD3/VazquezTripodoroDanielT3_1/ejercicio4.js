const prompt = require('prompt-sync')();

var arr = [prompt('Número 1: '), prompt('Número 2: '),
    prompt('Número 3: '), prompt('Número 4: '),
    prompt('Número 5: '), prompt('Número 6: '),
    prompt('Número 7: '), prompt('Número 8: '),
    prompt('Número 9: '), prompt('Número 10: ')
];

var res = 0;
var aux = 0;
var arr2 = arr;
for (let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr2.length; j++){
    if(arr[i] == arr2[j]) {
      aux++;
    }
  }
  if (aux == 1){
    res += aux-1;
  } else {
    res += aux-(aux-1);
  }
  aux = 0;
}
console.log(res);



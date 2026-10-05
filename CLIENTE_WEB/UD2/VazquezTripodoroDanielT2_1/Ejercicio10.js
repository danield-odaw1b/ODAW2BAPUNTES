const prompt = require('prompt-sync')();
var texto = prompt('Inserta un texto: ');
var i = 0;
var cont = 1;
if(texto.length == 0){
    console.log(0); 
} else{
    while(i <= texto.length) {
        if(texto.charAt(i) == ' '){
            cont++;
        }
        i++;
    }
    console.log(cont);
}
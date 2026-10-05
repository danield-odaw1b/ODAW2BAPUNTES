const prompt = require('prompt-sync')();

let num1 = (Number)(prompt('FILA 1 COLUMNA 1: '));
let num2 = (Number)(prompt('FILA 1 COLUMNA 2: '));
let num3 = (Number)(prompt('FILA 1 COLUMNA 3: '));
let num4 = (Number)(prompt('FILA 2 COLUMNA 1: '));
let num5 = (Number)(prompt('FILA 2 COLUMNA 2: '));
let num6 = (Number)(prompt('FILA 2 COLUMNA 3: '));
let num7 = (Number)(prompt('FILA 3 COLUMNA 1: '));
let num8 = (Number)(prompt('FILA 3 COLUMNA 2: '));
let num9 = (Number)(prompt('FILA 3 COLUMNA 3: '));

var arr = [
    [num1, num2, num3],
    [num4, num5, num6],
    [num7, num8, num9]
];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i == j) {
            console.log(arr[i][j]);
        }
    }
}
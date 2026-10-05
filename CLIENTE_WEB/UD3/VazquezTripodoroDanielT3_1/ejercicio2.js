const prompt = require('prompt-sync')();

var bool0 = prompt('Boolean 0: ')=="true";
var bool1 = prompt('Boolean 1: ')=="true";
var bool2 = prompt('Boolean 2: ')=="true";
var bool3 = prompt('Boolean 3: ')=="true";
var bool4 = prompt('Boolean 4: ')=="true";
var bool5 = prompt('Boolean 5: ')=="true";
var bool6 = prompt('Boolean 6: ')=="true";
var bool7 = prompt('Boolean 7: ')=="true";
var bool8 = prompt('Boolean 8: ')=="true";
var bool9 = prompt('Boolean 9: ')=="true";
var arr = [bool0, bool1, bool2, bool3, bool4, bool5, bool6, bool7, 
    bool8, bool9
];

for (let i = 0; i < arr.length; i++){
    if(arr[i] == true){
        console.log(i);
    }
}


const  arr = ["a", "a", "i", "a", "e", "i", "a"];
var res = "[";
var aux = 0;
var i = 0;
while (i < arr.length) {
    if(i < 4){
        res += arr.indexOf("a", i)+1 +",";
        aux = arr.indexOf("a", i);
        i = aux+1;
    } else {
        res += arr.indexOf("a", i)+1;
        aux = arr.indexOf("a", i);
        i = aux+1;
    }
}
res +="]"
console.log(res);
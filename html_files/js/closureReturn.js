function closureReturn(y){
    var m = 26;
return (x) => x+m+y;

}
var closure = closureReturn(2);
console.log(closure(4));

array = [1,2,3,4,5];
singleVal = 0;
var singleVal = array.reduce(function(oldVal, newVal){
    return newVal + oldVal;
});
console.log(singleVal);

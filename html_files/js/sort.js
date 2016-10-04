array = [1,4,2,8,5,4,3];
// sort from smallest to largest
array.sort(function(a,b){
    return a - b;
});
console.log(array);
// sort from largest to smallest
array.sort(function(a,b){
    return b -a;
});
console.log(array);

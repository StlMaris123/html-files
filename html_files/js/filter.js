array = [1,2,3,4,5,6,7,8,9,10];
var newArray = 0;
newArray = array.filter(function(value){
    return value > 5;
});
console.log(newArray);

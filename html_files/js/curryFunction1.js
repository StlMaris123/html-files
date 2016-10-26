 // arrange the arguments of the returned function in the appropriate order
functin curry(fn){
     // slice enables all arguments to be called after the first one
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
         // Array is created to contain all the arguments that were passed in
        var innerArgs = Array.prototype.slice.call(arguments);
         // concat is used to combine them into final array
        var finalArgs = args.concat(innerArgs);
         // apply is used to pass the result to the function
        return fn.apply(null, finalArgs)
    };
}
function add(num1, num2){
    return num1 + num2;
}
var curriedAdd = curry(add, 5);
console.log(curriedAdd(3));

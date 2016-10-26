// the first argument is the function to be carried, all other arguments are the values to pass in
var curryIt = function(uncarried){
    // slice is used to get all the qruments after the first one
    // returned array's first argument should be the second one,
    // indicated by passing an argument of one
    var parameters = Array.prototype.slice.call(arguments, 1);
    // the array is created to contain all the arguments that were passed in
    return function() {
        // apply is used to pass the final result into the fxn
        return uncurried.apply(this, parameters.concat(
            Array.prototype.slice.call(arguments, 0)
        ));
    };
};
var greeter = function(greeting, separator, emphasis, name) {
     console.log(greeting + separator + name + emphasis);
};

var greetHello = curryIt(greeter, "Hello");
greetHello(" Stella");

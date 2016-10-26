var greetCurried = function(greeting) {
    return function(name){
        console.log(greeting + ", " + name);
    };
};
var greetHello = greetCurried("Hello");
greetHello("Magwa");

greetCurried("Hi there")("Stella");

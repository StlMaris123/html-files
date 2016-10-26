var deeplyCurried = function(greeting) {
    return function(separator){
        return function(emphasis){
            return function(name){
                console.log(greeting + separator + name + emphasis);
            };
        };
    };
};
var greetPeople = deeplyCurried("hello")("?")(" heeelooo");
greetPeople(" stella");

deeplyCurried("hi")(",")(" how are u")(" swee");

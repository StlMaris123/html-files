var greetCurried = function(greeting) {
    return function(name){
        console.log(greeting + ", " + name);
    };
};

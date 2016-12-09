var setVisitor;
function hujambo(greeting) {
    var name = 'makali';
    setVisitor = function (newVisitor){
        name = newVisitor;
    }
    return function (){
        console.log(greeting + ' ' + name);
    }}
    var greetVisitor = hujambo('good morning');
    greetVisitor();
    setVisitor('makamba');
    greetVisitor();
    greetVisitor = hujambo('good night');
    greetVisitor();



function myFunction(){
    var name = "Stella";
    function myName(){
        return (name);
    }
    return myName;
}

var myFunc = myFunction();
console.log(myFunc());

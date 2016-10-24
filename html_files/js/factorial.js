function factorialize(num){
    factorial = 1;
    for (var n = 2; n <= num; n++ ){
        factorial = factorial * n;
    }
    return factorial;

}
console.log(factorialize(5));

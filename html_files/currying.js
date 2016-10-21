function summation(a){
    return (b,c,d) => a+b+c+d
}
function summation(a){
    return (b) => { return (c,d) => a+b+c+d }
}
function summation(a){
    return (b) => { return (c) => { return(d) => a+b+c+d } }
}
console.log(summation(3),(4),(5),(6));

function testElseIf(value){
    if(value > 10){
        console.log("value is greater than 10");
    }else if(value <= 5){
        console.log("value is less than or equal to five");
    }else{
        console.log("outside the range");
    }
}
testElseIf(20);

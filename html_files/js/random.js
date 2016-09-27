// generates random decimal number
function randomNumber(){
   return Math.random();
}
// Generate random whole numbers
function wholeNumber(){
    return Math.floor(Math.random() * 20);
}

// Random number between two specific numbers
function rangeNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1 )) + min
}
var myRandom = rangeNumber(5, 20);

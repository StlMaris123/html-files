var counter = 10;
function countdown(value) {
    if ( value > 0 ) {
        console.log(value);
        return countdown(value - 2);
    }
    else {
        return value;
    }
};
countdown(20);
console.log(counter);

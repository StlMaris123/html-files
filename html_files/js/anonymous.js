function createComparison(propName){
    return function(object1, object2){
        // access variable propName from the outer function
        var value1 = object1[propName];
        var value2 = object2[propName];

        if( value < value2 ){
           console.log (-1);
        }else if (value1 > value2){
            console.log (1);
            return 1;
        }else {
           console.log (0);
        }
    };
}

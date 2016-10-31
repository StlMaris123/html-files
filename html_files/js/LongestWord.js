function longestWord(str){
    var words = str.split(' ');
    var maxLength = 0;

    for ( i = 0; i < words.length; i++ ){
        if (words[i].length > maxLength){
            maxLength = words[i].length;
        }
    }
    console.log(maxLength);
}
longestWord(" boy girl woman man");

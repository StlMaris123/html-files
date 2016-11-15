function celebName(firstName){
    var nameIntro = "This celeb is "
    function secondName(lastName){
        return nameIntro + firstName + " " + lastName;
    }
    return secondName;
}
var myName = celebName("Stella");
myName = ("Njage");

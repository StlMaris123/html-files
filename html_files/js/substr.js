function myString(str, target){
   return (str.substr(-target.length) === target);
}
console.log(myString('stella', 'a'));

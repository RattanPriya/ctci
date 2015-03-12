(function rotateString(str,amt) {
    
    var newString = str.substr((amt%str.length+str.length)%str.length,str.length)+str.substr(0, ((amt%str.length+str.length)%str.length));  
    console.log(newString);
    return newString;
})()


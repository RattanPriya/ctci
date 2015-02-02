function printPermutations(str) {
    
    permute("",str);
}
function permute(prefix,str) {
    var n = str.length,i;
    if(n===0) {
        console.log(prefix);
    }
    else {
        for(i=0;i<str.length;i++) {
            permute(prefix+str.charAt(i),     str.substring(0,i)+str.substring(i+1,n));
        }
    }
}


console.log(printPermutations("abc"));

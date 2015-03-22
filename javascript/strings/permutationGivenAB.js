var n = 5;
function generateAllStrings(str) {
    if (str.length == n) {
        console.log(str + i++);
        return;
    } else {
        str += 'a';
        generateAllStrings(str);
        str = str.substring(0,str.length-1)
        str += 'b';
        generateAllStrings(str);
        str = str.substring(0,str.length-1)
    }
    return;
};
generateAllStrings('');

var val = 0;
function sumOfHexDigitsFromStr( digits, i) {
    debugger;
    if(digits.length === 0) {
        throw "String undefined";
    } else if(digits.length ===1) {
        return parseInt(digits, 16);
    } else if(i >= digits.length) {
        return val;
    } else {
        val += parseInt(digits.charAt(i), 16);
        sumOfHexDigitsFromStr(digits, i+1);
    }
    return val;
};
var x = sumOfHexDigitsFromStr("1C",0)
alert(x);
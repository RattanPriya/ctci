n findLongstPal(str) {
    debugger;
    var n = str.length,
        i, j,
        substr, isPalin, maxLen = 0,
        strLen,
        len = 0,
        result;

    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            substr = str.substring(i, j);
            isPalin = isPalindrome(substr);
            if (isPalin) {
                strLen = substr.length;
                if (strLen >= maxLen) {
                    maxLen = strLen;
                    result = substr;
                }

            }

        }
    }
    return result;
}

function isPalindrome(substr) {
    var n = substr.length;
    for (i = 0; i < n / 2 + 1; i++) {
        if (substr.charAt(i) !== substr.charAt(n - i - 1)) {
            return false;
        }
    }
    return true;
}
findLongstPal('affaptbbcracecarf');

//(n ^ 2) Solution 
(function () {
    var expandAroundCenter = function expandAroundCenter(str, lIndex, rIndex) {
        var leftIndex = lIndex,
            rightIndex = rIndex,
            len = str.length;
        while (leftIndex >= 0 && rightIndex <= len - 1 && str[leftIndex] == str[rightIndex]) {
            leftIndex--;
            rightIndex++;
        }
        return str.substr(leftIndex + 1, rightIndex - leftIndex - 1);
    };

    var longestPalindromeSimple = function longestPalindromeSimple(str) {
        var len = str.length, longest;
        if (len == 0) {
            return '';
        }

        longest = str[0];  / / a single char itself is a palindrome
for (var i = 0; i < len - 1; i++) {
    var singleCharPalindrome = expandAroundCenter(s, i, i);
    if (singleCharPalindrome.length > longest.length) {
        longest = singleCharPalindrome;
    }


    var strPalindromeFromNextChar = expandAroundCenter(str, i, i + 1);
    if (strPalindromeFromNextChar.length > longest.length) {
        longest = strPalindromeFromNextChar;
    }

}
return longest;
};

longestPalindromeSimple('bananad'); // => anana

})();

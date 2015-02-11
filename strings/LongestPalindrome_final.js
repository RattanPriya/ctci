(n^2) Solution
 *
 * We observe that a palindrome mirrors around its center.
 * Therefore, a palindrome can be expanded from its center, and there are only 2N-1 such centers.
 * You might be asking why there are 2N-1 but not N centers?
 * The reason is the center of a palindrome can be in between two letters.
 * Such palindromes have even number of letters (such as “abba”) and its center are between the two ‘b’s.
 */
(function () {
    var expandAroundCenter = function expandAroundCenter(s, c1, c2) {
        var l = c1,
            r = c2,
            n = s.length;
        while (l >= 0 && r <= n - 1 && s[l] == s[r]) {
            l--;
            r++;
        }
        return s.substr(l + 1, r - l - 1);
    };

    var longestPalindromeSimple = function longestPalindromeSimple(s) {
        var n = s.length;
        if (n == 0) {
            return '';
        }

        var longest = s[0];  // a single char itself is a palindrome
        for (var i = 0; i < n - 1; i++) {
            var p1 = expandAroundCenter(s, i, i);
            if (p1.length > longest.length) {
                longest = p1;
            }


            var p2 = expandAroundCenter(s, i, i + 1);
            if (p2.length > longest.length) {
                longest = p2;
            }

        }
        return longest;
    };

    longestPalindromeSimple('bananad'); // => anana
    // such as Tragedy @@
})();



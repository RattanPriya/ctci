function longestPalindrom(str) {
    var cache, i = 0,
        j = 0,
        k = 0,
        max = 0,
        len = str.length;
    cache = create2Darray(len);

    for (i = 1; i < len; i++) {
        cache[i][i] = 1;
        max = 2;
        if (str[i] === str[i + 1]) {
            cache[i][i + 1] = 1;
            max = 2;
        }

    }
    for (k = 3; k <= len; k++) {
        for (i = 1; i <= len - k + 1; i++) {
            j = i + k - 1;
            if (str.charAt(i) === str.charAt(j) && cache[i + 1][j - 1]) {
                cache[i][j] = 1;
                max = k;
            } else {
            	cache[i][j] = 0;
            }
        }
    }

    return max;
}

function create2Darray(rows) {
    var arr = [];

    for (var i = 0; i < rows; i++) {
        arr[i] = [];

    }
    return arr;
}
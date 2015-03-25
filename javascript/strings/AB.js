
//Solution to top coder problem 
//Generate a string comprising of A and B 
//Input will be n,k where n is the length of string and k is a 
//number pair in the string of length n where str[i] !== str[j]
function generateRanges(n) {
    var i = 1,
        j = n - 1,
        arr = [];
    while (i < n / 2 && j >= n / 2) {
        arr.push(i * j);
        i++;
        j--;
    }
    return arr;
}

function generateString(n, k) {
    var ranges = generateRanges(n),
        numberOfBInString = [],
        i = 0,
        str = '';

    if ( k > (n * n-1 )/4) {
		return '';
	}

    numberOfBInString = k < n ? [1, n - k] : binarySearch(ranges, k);
	j = 0;
	

	for (i = 0 ; i < n - numberOfBInString[0] ;i++) {
		if (i === n - numberOfBInString[1] - numberOfBInString[0]) {
			str += 'b';	
		}
		str += 'a';
	}
	i = str.length;
	while ( i < n) {
		str +='b';
		i++;
	}
	
    return str;
}

function binarySearch(arr, k) {
    var first = 0,
        last = arr.length - 1;

    while (first >= 0 && last < arr.length) {
        mid = (last - first) / 2;
        if (k > arr[mid]) {
            if (k < arr[mid + 1]) {
                return [mid + 2, arr[mid + 1] - k];
            }
            first = mid + 1;
        } else if (k < arr[mid]) {
            if (k > arr[mid - 1]) {
                return [mid+1, arr[mid] - k];
            }
            last = mid - 1;
        } else {
		     return [mid, arr[mid] - k];
        }
    }
}

//var str1 = generateString(7,2);
var str2 = generateString(7,8);
var str3 = generateString(7,11);
var str4 = generateString(7,13);
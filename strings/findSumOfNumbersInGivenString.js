function findSum(str){ 
 var sum =0, regEx = /[0-9]/;
 for( i=0;i<str.length; i++) {
 	var num = 0; var isNeg
 	if(regEx.test(str.charAt(i))) {
 	 	var j = i;
 	 	if(str.charAt(i-1) && str.charAt(i-1) === "-") {
 	 		isNeg = true;
 	 	}
 	 	while(regEx.test(str.charAt(j)) && j < str.length) {
 	 		num = num * 10 + parseInt(str.charAt(j));
 	 		j++;

 	 	}
 	 	if(isNeg) {
 	 		num = -num;

 	 	}
 	 	sum +=num;
 		i = j;
 	}
 
 }
 	return sum;
}
alert(findSum("-213567abcd-%$235--12++56"))
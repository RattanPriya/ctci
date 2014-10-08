function compressString(str) {
	var i=1, result="", count=1;
	debugger;
	while(i < str.length){
		while(str.charAt(i-1)===str.charAt(i)) {
			count++;
			i++;

		}
		result += str.charAt(i-1) + count.toString();
		count =1;
		i++;
	}
	if(result.length > str.length)
	{
		console.log(str);
	}else{
	console.log(result);}
}
compressString("abcd");
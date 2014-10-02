function removeDups(str) {
	var cache =[], s="";
	if(str) {
		for(i=0; i < str.length; i++) {
			curChar = str.charAt(i);
			if(!cache[curChar]) {
				cache[curChar] = 1;
				s += curChar
			}
		}
	}

}
removeDups("hellooo");
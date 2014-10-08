/*Write a method to sort an array of strings so that all the anagrams are next to each
other.*/

function sortAnagrams(anagramsArr){
	var map = {}, sortedWord;
 	for(key in anagramsArr) {
 		sortedWord = anagramsArr[key].split("").sort().join("");
 		if (map.hasOwnProperty(sortedWord)) {
 			map[sortedWord] += ','+ anagramsArr[key];
 		}
 		else {
 			map[sortedWord] = anagramsArr[key];
 		}
 	}

}
sortAnagrams(["glean","god","angel","dog","abcd","bcda"]);
def bucketizeAnagrams(input):
	map = {}
	for i in input:
		key = ''.join(sorted(i))

		if key not in map:
			map[key] = []
	
		map[key].append(i) 

	output = []
	for key in map.keys():
		output.append(map[key])
	return output

if __name__ == '__main__':
	input =  ["star", "rats", "car", "arc", "arts", "stars"] 
	print bucketizeAnagrams(input)


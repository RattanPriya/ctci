import time

def generateRanges(n):
	i  = 1
	j = n - 1
	arr = []
	while i <= j:
		arr.append( i * j)
		i = i + 1
		j = j -1
	print arr
	return arr


def generateString(n, k ):
	numberOfBInString = []
	str = ''
	j = 0
	i = 0
	
	if n < 2 or n > 50 or k > (n * n+1)/2:
		return ''

	if k == 0:
		return 'A'*n

	ranges = generateRanges(n)	
	
	if k < n:
		numberOfBInString = [1, n - k]
	else:
		numberOfBInString = linearSearch(ranges, k) 	

	if numberOfBInString is None:
		return ''

	while i < n - numberOfBInString[0]:
		if i == n - numberOfBInString[1] - numberOfBInString[0]:
			str  = str + 'B'
		str = str + 'A'
		i = i + 1

	slen = len(str)
	
	while slen < n:
		str  = str + 'B'
		slen = slen + 1

	return str


def linearSearch(ranges, k):
	if len(ranges) >= 2:
		i = 1
		if k > ranges[i-1]  and k <= ranges[i]:
			print [i+1, ranges[i] - k]
			return [i+1, ranges[i] - k]

def testSuit(str):
	positionOfBIndex = []
	sum = 0
	i = 0
	while i < len(str):
		if str[i] == 'B':
			positionOfBIndex.append(i)
		i = i +1

	for i in range(positionOfBIndex):
		sum = sum + positionOfBIndex[i] - i

	return sum

start_time = time.time()

print generateString(50,400)
print("--- %s seconds ---" % (time.time() - start_time))

#print generateString(10, 12)
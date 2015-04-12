def binarySearch(arr, key, first, last):
	mid = (first + last) // 2
	print (arr[mid])
	
	if first > last:
		return
	else:
		if arr[mid] == key:
			return mid
		elif arr[mid] > key:
			return binarySearch(arr, key, first, mid -1 )
		else:
			return binarySearch(arr, key, mid + 1, last )
	
		

arr = [2,4,5,7,8,9,12,14,17,19,22,25,27,28,33, 37]
binarySearch(arr, 25, 0, len(arr)-1)		







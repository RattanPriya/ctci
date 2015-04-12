def inserttionSort(arr):
	for i in range(1, len(arr)):
		curr = arr[i]
		j = i
		while arr[j-1] > arr[i] and j > 0:
			arr[j] = arr[j-1]
			j = j -1
			a[j] = curr
	print arr

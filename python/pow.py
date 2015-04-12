def pow(x ,n):
	if n == 0:
		return 1
	else:
		partial = pow(x, n//2)

	if n % 2 == 1:
		print  partial * partial * x
		return partial * partial * x
	else:
		print partial * partial
		return partial * partial


def reverse(S, start, stop):
	if start < stop -1 :
		S[start], S[stop-1] = S [stop-1],S[start]
		reverse(S, start + 1, stop -1)
	print S	
reverse([1,2,3,4,5], 0, 5)	


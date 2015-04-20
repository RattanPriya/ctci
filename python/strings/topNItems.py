class sortNItems:
	def __init__(self):
		self.min = None

	def mymin(self, store):
		if self.min is None: 
			self.min = store[0]

		for i in range(len(store)):
			if store[i] < store[self.min]:
				self.min = i
		print self.min

	def sortTopItems(self, arr, n):
		dataStore = arr[0:n]
		self.min = dataStore.index(min(dataStore))
		#print self.min
		#print dataStore
		for i in range(n, len(arr)):
			if arr[i] > dataStore[self.min]:
				print dataStore
				self.min = dataStore.index(min(dataStore))
				dataStore[self.min] = arr[i]
				
		return dataStore				

	
if __name__ == '__main__':
	s = sortNItems()
	#print s.min
	print s.sortTopItems([1,2,3,4,5,6,7,8,9], 3)

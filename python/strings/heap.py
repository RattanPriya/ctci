class heap:
	def __init__(self):
		self.heap = []
		self.size = None

#Exchange key in parent with key in largert child
	def sink(self, k):
		while 2*k < self.size:
			j = 2 * k
			if ( j < self.size and less(j, j+1)):
				j +=1
			if not less(k, j):
				break;
			exch(k, j)
			k = j

	def trickleUp(self, k):
		while k > 1 and self.heap[k/2] < self.heap[k]:
			self.heap[k/2], self.heap[k] = self.heap[k], self.heap[k/2]
			k = k/2


	def insert(self, item):
		self.heap.append(item)
		self.trickleUp()

	def delMax():
		item = self.heap[1]
		exch(1, N-1)
		sink(1)
		self.heap[N+1] = None
		return item
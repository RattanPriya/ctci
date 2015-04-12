class Queue:
	DEFAULT_CAPACITY = 10
	def __init__(self):
		self._data = [None] * Queue.DEFAULT_CAPACITY
		self.front = 0
		self.size = 0

	def enqueue(self, elem):
		if self.size == len(self._data):
			self._resize(self.size * 2)

		avail = (self.front + self.size) % len(self._data)	
		self._data[avail] = elem
		self.size += 1
		
		

	def isempty():
		return self.size == 0
	
	def dequeue(self):
		if self.isempty():
			raise Empty('Queue is empty')
		
		item = self._data[self.front]
		self.front = (self.front + 1 ) % len(self._data)	
		self.size -= 1
		return answer

	def _resize(self, cap):
		old = self._data
		self._data = [None] * cap
		walk = self._front
		for k in range(self.size):
			self._data[k] = old[walk]
			walk = (walk+1) % len(old)
		self._front = 0

	

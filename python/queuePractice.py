class Queue:
	DEFAULT_CAPACITY = 10
	def __init__(self):
		self._data = [None] * 1 
		self._front = 0
		self._size = 0

	def enqueue(self, item):
		if self._size == len(self._data):
			self._resize(self._size * 2)
		position = (self._front + self._size) % len(self._data)
		self._data[position] = item
		self._size += 1

	def dequeue(self):
		if self.is_empty():
			raise Empty('Queue is empty')
		if self._size < len(self._data)//4:
			self._resize(self._size/2)

		item = self._data[self._front]
		self._data[self._front] = None
		self._front = (self._front + 1) % len(self._data)
		return item

	def _resize(self, size):
		old = self._data
		walk = self._front
		self._data = [None] * size

		for k in range(size):
			self._data[k] = old[walk]
			walk = (walk + 1 ) % len(old)
	
		self._front = 0
	def is_empty(self):
		return self._size == 0

if __name__ == '__main__':	
	queue = Queue()
	queue.enqueue(1)
	print queue._data
	queue.enqueue(2)
	print queue._data
	queue.enqueue(3)
	print queue._data
	queue.enqueue(4)
	print queue._data
	queue.dequeue()
	print queue._data
	queue.dequeue()
	print queue._data
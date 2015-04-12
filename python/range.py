class Range:

	def __init__(self, start, stop=None, step=1):
		
		if step is None:
			raise ValueError('step cannot be 0')

		if stop is None:
			start, stop = 0, start

		self.length = max( 0, (stop - start + step - 1))
		self._start = start
		self._stop = stop

	
	def len(self):
		return self._lenth

	def __getitem(self, k):
		if k < 0:
			k += len(self)

		if not k <=0 < self.length:
			raise IndexError('index out of range')

		return self._start + k * self._step

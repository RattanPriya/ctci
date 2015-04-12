class Stack:
	def __init__(self):
		self._data = []

	def push(self, item):
		self._data.append(item)

	def pop(self):
		if self._isempty():
			raise Empty('stack is empty')
		
		item = self._data.pop()
		return item

	def top(self):
		return self._data[-1]

	def _isempty(self):
		return len(self._data) == 0
def matchingParenthesis(expression):
	stack = Stack()
	left = '{[('
	right = ')]}'
	
	expr = list(expression)
	for i in expr:
		if i in left:
			stack.push(i)
			print stack._data
		elif i in right:
			if stack._isempty():
				return 'FALSE'
			if right.index(i) != left.index(stack.pop()):
				return 'FALSE'
	return stack._isempty()


if __name__ == '__main__':
	s = Stack()
	s.push(1)
	s.push(2)
	s.pop()
	print matchingParenthesis('[(5+x)-(y+z]')



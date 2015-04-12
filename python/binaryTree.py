class Node:
	def __init__(self, data, parent = None, left=None, right=None):
		self._data = data
		self._right = right
		self._left = left
		self._parent = parent
		
class binaryTree:
	def __int__(self):
		self.root = Node()
	
	def insert(self, data):
		if self.root is None:
			self.root = Node(data)
		elif 


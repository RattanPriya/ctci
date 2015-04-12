class Node:
	def __init__(self, data):
		self.data = data
		self.next = None

class LinkedList:
	def __init__(self):
		self.root = None
		self.len = 0
		self.tail = None

	def insert(self, data):
		if self.root is None:
			self.root = Node(data)
			self.root.next = None
			self.tail = self.root
		else:
			node = Node(data)
			self.tail.next = node
			self.tail = node
	
	def delete(self, data):
		if self.root is None:
			raise Empty('List is empty')		
		else:
			curr = self.root
			if curr.data == data:
				self.root = curr.next
				curr = None

			while curr is not None and curr.next is not None:
				if curr.next.next is None and curr.next.data == data:
					curr.next = None
					tail = curr
				elif curr.next.data == data:
					curr.next = curr.next.next					
				curr = curr.next

	def traverse(self):
		curr = self.root
		while curr is not None:
			print curr.data
			curr = curr.next

if __name__ == '__main__' :
	ll = LinkedList()
	ll.insert(1)
	ll.insert(2)
	ll.insert(3)
	ll.insert(4)
	#ll.traverse()
	ll.delete(1)
	#ll.traverse()
	ll.delete(2)
	#ll.traverse()
	ll.delete(4)
	ll.delete(3)
	ll.traverse()

#	ll.traverse()






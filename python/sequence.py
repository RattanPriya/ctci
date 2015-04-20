class Sequence:
    def __init__(self, s1):
        self.str = s1
        self.current = 0

    def next(self):
    	item = self.str[self.current]
        print item
        self.current += 1
        return item

if __name__ == '__main__':
	s1 = Sequence("1234566")
	print s1.next()
	print s1.next()
	print s1.next()
	print s1.next()
	
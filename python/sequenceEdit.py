"""
Given a class representing a sequence, write a function that takes two sequences and
returns true if the sequences are identical or differ in exactly one way: one has an added
value, one has a removed value, or the same position in both sequences is different.
You can only ask for the next value of a sequence once, cannot backtrack, and don't have
enough memory to buffer either sequence. It is valid to track current and previous values.
"""

class MagicSequence(object):
	def checkSequence(sequence1, sequence2):
	
		currChar1 = sequence1.next()
		currChar2 = sequence2.next()	
		
		editDistance = 0

		prevChar1 = '-1'
		prevChar2 = '-1'

		while currChar1 && currChar2:
			if currChar1 != currChar2 && editDistance !=0:
				return False
			elif currChar1 != currChar2 && editDistance == 0:
				prevChar1 = currChar1
				prevChar2 = currChar2
				currChar1 = s1.next()
				currChar2 = s2.next()
				editDistance = editDistance + 1
				if prevChar1 == currChar2:
					prevChar2 = currChar2
					currChar2 = s2.next()
					
				elif prevChar2 == currChar1:
					prevChar1 = currChar1
					currChar1 = s1.next()
			else: 
				prevChar1 = currChar1 
				prevChar2 = currChar2 
				currChar1 = s1.next()
				currChar2 = s2.next()
				

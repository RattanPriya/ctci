"""
Given a class representing a sequence, write a function that takes two sequences and
returns true if the sequences are identical or differ in exactly one way: one has an added
value, one has a removed value, or the same position in both sequences is different.
You can only ask for the next value of a sequence once, cannot backtrack, and don't have
enough memory to buffer either sequence. It is valid to track current and previous values.
"""

class MagicSequence:
    def __init__(self, s1, s2):
        self.s1 =  s1
        self.s2 =  s2

    def checkSequence(self, sequence1, sequence2):

        currChar1 = sequence1.next()
        currChar2 = sequence2.next()

        editDistance = 0

        prevChar1 = '-1'
        prevChar2 = '-1'
        while currChar1 and currChar2:
            print currChar1
            print currChar2
            if currChar1 != currChar2 and editDistance !=0:
                return False
            elif currChar1 != currChar2 and editDistance == 0:
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

class Sequence:
    def __init__(self, s1):
        self.str = s1
        self.current = 0

    def next(self):
        if self.current < len(self.str):
            item = self.str[self.current]
            self.current += 1
            return item

if __name__ == '__main__':
    s1 = Sequence("1230")
    s2 = Sequence("1240")
    m = MagicSequence(s1, s2)
    print m.checkSequence(s1, s2)


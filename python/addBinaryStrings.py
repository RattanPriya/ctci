def addBinaryString(s1, s2):
	
	if len(s1) <= len(s2):
		s1 = [0]* len(s2) - len(s1) + s1
	else:
		s2 = [0]* len(s1) - len(s2) + s2

	

class CaesarCipher:
	def __init__(self, shift):
		encoder = [None] * 26
		decoder = [None] * 26
		for k in range(len(encoder)):
			encoder[k] = chr(k + shift) % 26 + ord('A')
			decoder[k] = chr(k - shift) % 26 + ord('A')
		self._forward = ''.join(encoder)
		self._backward = ''.join(decoder)

	def encrypt(self, message):
		return self._transform(message, self._forward)

	def decrypt(self, message):
		return self._transform(message, self._backward)

	def transform(self, code):
		msg = list(message)
		for i in range(0, len(msg)):
			if msg[i].isupper():
				index = ord(msg[i]) - ord('A')
				msg[i] = code[index]
		return ''.join(msg)				

if __name__ == "__main__":
	cipher = CaesarCipher(3)
	message = "The EAGLE IS IN PLAY; MEET AT JOE'S"
	coded = cipher.encrypt(message)
	print('Secret: ', coded)
	answer = cipher.decrypt(coded)
	print('message:', answer)

	
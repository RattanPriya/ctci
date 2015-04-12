class CreditCard:
	""" A consumer credit card """

	def __init__(self, customer, bank, acnt, limit):
		""" Creates new credit card instance"""

		self._customer = customer
		self.bank = bank
		self.acnt = acnt
		self.limit = limit
		self.balance = 0

	def get_customer(self):
		return self._customer

	def get_bank(self):
		return self._bank

	def get_account(self):
		return self._account

	def get_limit(self):
		return self._limit

	def get_balance(self):
		return self._balance

	def charge(self, price):
		if price + self._balance > self.limit:
			return False
		else:
			self._balance += price
			return True

	def make_payment(self, amount):
		self._balance -= amount

cc = CreditCard('Priya', '1st Bank', '4785692384975', '1000')

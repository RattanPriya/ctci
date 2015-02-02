//push and pop takes O(1) however storing next pointers adds space overheads

function Node(data) {
	this.data = data;
	this.next = null;
}
var Stack = function() {
	this.top = null;
}
Stack.prototype = {
	pop: function pop() {
		var n;
		if (this.top) {
			n = this.top;
			this.top = this.top.next;
		}
		return n.data;
	},
	push: function push(data) {
		var n = new Node(data);
		n.next = this.top;
		this.top = n;
	},

	seek: function seek() {
		return this.top.data;
	}
}
var Tester = function() {};
Tester.prototype = {
	test: function test(actual, desired) {
		if (actual === desired) {
			console.log("TEST SUCCESSFUL");
		} else {
			console.log("TEST FAIL");
		}
	}
}

var t = new Tester();
var stack = new Stack();

stack.push(1);
t.test(stack.seek(), 1);

stack.push(2);
t.test(stack.seek(), 2);

stack.push(3);
t.test(stack.seek(), 3);

stack.push(4);
t.test(stack.seek(), 4);

stack.pop();
t.test(stack.seek(), 4);
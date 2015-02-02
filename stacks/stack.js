function Stack() {
	this.top = 0;
	this.s = [];
};

Stack.prototype = {

	push: function(data) {
		var s = this.s;
		if (s) {
			s[this.top++] = data;
		}
	},
	pop: function() {
		var s = this.s;
		if (s && s.length >= 0) {
			item = s[this.top--];
			return item;
		}
	},
	seek: function() {
		var s = this.s;
		var t = this. top;
		if (s && s.length > 0) {
			return s[this.top - 1];
		}
	}
}

var Tester = function() {};
	Tester.prototype = {
		test: function test(actual, desired) {
			if(actual === desired) {
				console.log("TEST SUCCESSFUL"); 
			} else {
				console.log("TEST FAIL"); 
			}
		}
	}
var t = new Tester();
var stack = new Stack();

stack.push(1);
t.test(stack.seek(),1);

stack.push(2);
t.test(stack.seek(),2);

stack.push(3);
t.test(stack.seek(),3);

stack.push(4);
t.test(stack.seek(),4);

stack.pop(4);
t.test(stack.seek(),3);
function Node(data) {
	this.data = data;
	this.next = null;
};
function List() {
	this.start = null;
	this.end = null;
	this.length = 0;
};

List.prototype = {

	add: function(data) {
		var list = new Node(data),
			_this = this;
			_this.length++;
		if(this.start) {
			_this.end.next = list;
			_this.end = list;
		} else {
			_this.start = list;
			_this.end = list;
		}
	},

	delete : function(index) {
		var currNode = this.start;
		if(index === 0 ) {
			if(currNode.next) {
				this.start = currNode.next; 
			}
			else {
				this.start = null;
				this.end = null;
			}
			return;
		}

		while(--index) {
			currNode = currNode.next;
		}

		currNode.next = currNode.next.next;
		if(index === this.length-1) {
			this.end = currNode.next;
		}
		this.length--;

	},

	reverse: function () {
	    var curr = this.start,
	        save = curr.next,
	        prev = null;
	        
	    while(curr.next) {
	      save = curr.next;
	      curr.next = prev;
	      prev = curr;
	      curr = save;
	    }
	    curr.next = prev;
	    this.start = curr;
	}
}

var list = new List();
list.add(0);
list.add(1);
list.add(2);
list.add(3);

list.reverse();


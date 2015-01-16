function Node(data) {
  this.data = data;
  this.next =  null;
}

function List(beginningNode) {
  this.start = beginningNode || null;
  this.end = this.start;
  this.length = beginningNode ? 1 : 0;
}

List.prototype = {
  add: function add(node) {
    if (node)  {
      this.length++;
      if (this.start === null) {
        this.start = node;
        this.end = node;
      } else {
        this.end.next = node;
        this.end = node;
      }
    }
  },

  remove: function remove(index) {
    if (this.length > 0 && index <= this.length-1) {
      var prev = this.start;
      this.length--;
      if (index === 0) {
        this.start = this.start.next;
      } else {
        while (--index) {
          prev = prev.next;
        }
        prev.next = prev.next.next;
      }
    }
  },

  print: function print() {
    var currentNode = this.start;
    var result = [];
    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return '[' + result.join(',') + ']';
  }
};

var firstNode = new Node(1);
var secondNode = new Node(2);
var thirdNode = new Node(3);
var list = new List(firstNode);
list.add(secondNode);
list.add(thirdNode);

function assert(actual, desired) {
    if ( actual === desired ) {
        console.log("SUCCESS");
    } else {
        console.log("FAILURE");
    }
}

assert(list.print(),'[1,2,3]');
list.remove(0);
assert(list.print(),'[2,3]');
list.remove(1);
assert(list.print(),'[2]');

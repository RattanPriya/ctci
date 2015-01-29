function Node(data) {
  this.data = data;
  this.next = null;
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
      this.length--;
      if (index === 0) {
        if(!this.start.next) {
          this.start = null;
          this.end = null;
        } else {
          this.start = this.start.next; 
        }
      } else {
        var prev = this.start;
        while (--index) {
          prev = prev.next;
        }
        prev.next = prev.next.next;
      }
    }
  },

  reverse: function reverse() {
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
  },

  arrayify: function arrayify() {
    var currentNode = this.start;
    var result = [];
    while (currentNode) {
      result.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return result;
  }

};

function Tester() {};

Tester.prototype = {
  assertArrayEquality: function assertArrayEquality(actual, desired) {
      var len  = actual.length;
      while(len--) {
        if (actual[len] !== desired[len]) {
          console.log("FAILURE");
          return;
        }
      }
      console.log("SUCCESS");
  }
}

// Link List Creation
var tester = new Tester();
var firstNode = new Node(1);
var secondNode = new Node(2);
var thirdNode = new Node(3);
var list = new List(firstNode);
list.add(secondNode);
list.add(thirdNode);

list.reverse();
tester.assertArrayEquality(list.arrayify(),[3,2,1])
list.reverse();

// Tests
tester.assertArrayEquality(list.arrayify(),[1,2,3]);
list.remove(0);
tester.assertArrayEquality(list.arrayify(),[2,3]);
list.remove(1);
tester.assertArrayEquality(list.arrayify(),[2]);

//reverse tests


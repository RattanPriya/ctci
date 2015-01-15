function List() {
    this.start = null,
    this.end = null;

    this.makeNode = function() {
        return {
            data: null,
            next: null
        };
    }
    this.add = function(data) {
        if (this.start === null) {
            this.start = this.makeNode();
            this.start.data = data;
            this.end = this.start;
        } else {
            this.end.next = this.makeNode();
            this.end.next.data = data;
            this.end = this.end.next;
        }
    },
    this.length = function() {
        var currNode = this.start;
        var len = 0;
        while (currNode.next) {
            currNode = currNode.next;
            len++;
        }
        return len+1;
    },

    this.delete = function(index) {
        debugger;
        var currNode = this.start;
        var currIndex = 0;
        var length = this.length();
        currNode = this.start;
        if (index === 0) {
            currNode.data = null;
            this.start = currNode.next;
            return;
        }
        else if(index-1 === length-1) {
            while(currNode.next.next) {
                currNode = currNode.next;
            }
            currNode.next.data = null;
            this.end = currNode;
            return;
        }

        currNode = currNode.next;

        for (i = 1; i < length; i++) {
            if (index-1 === i+1) {
                currNode.next.data = null;
                currNode.next = currNode.next.next;
                return;
            }
            else {
                currNode = currNode.next;
            }
        }

    }
};

var list = new List();
for (var i = 1; i <= 10; i++) {
    list.add(i);

}


list.delete(1);

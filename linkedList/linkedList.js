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
    }
};

var list = new List();
for (var i = 1; i <= 10; i++) {
    debugger;
    list.add(i);
}

function Node(data) {
    this.left = null;
    this.right = null;
    this.data = data;
}

function Tree(data) {
    this.root = null;
}

Tree.prototype = {
    add: function(data) {
        var node = new Node(data),
            currNode = this.root;
        if (!currNode) {
            this.root = node;
        } else {
            while (true) {

                if (data < currNode.data) {
                    if (!currNode.left) {
                        currNode.left = node;
                        break;
                    } else {
                        currNode = currNode.left;
                    }
                } else {
                    if (!currNode.right) {
                        currNode.right = node;
                        break;
                    } else {
                        currNode = currNode.right;
                    }
                }
            }
        }
    },

    traverseInOrder: function(node) {
        var currNode = node;
        if (currNode) {
            this.traverseInOrder(currNode.left);

            console.log(currNode.data);

            this.traverseInOrder(currNode.right);
        }
    }
}

var tree = new Tree();
tree.add(4);
tree.add(1);
tree.add(2);
tree.add(8);
tree.add(5);
tree.add(3);
tree.traverseInOrder(tree.root);

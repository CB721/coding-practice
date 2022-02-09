// implement a Node class to create a binary search tree
// the constructor should initialize values 'data', 'left' and 'right'
// implement the 'insert' method for the node class
// the insert should accept an argument 'data' and then insert a new node at the appropriate location in the tree
// implement the 'contains' method for the node class
// contains should accept a 'data' argument and return the node in the tree with the same value
// if the value isn't in the tree, return null

class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
    insert(data) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (this.data > data) {
            this.left = new Node(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (this.data < data) {
            this.right = new Node(data);
        }
    }
    contains(data) {
        if (data === this.data) {
            return this;
        } else if (data < this.data && this.left) {
            return this.left.contains(data);
        } else if (data < this.data) {
            return null;
        } else if (data > this.data && this.right) {
            return this.right.contains(data);
        } else if (data > this.data) {
            return null
        }
    }
}

module.exports = { Node };

const node = new Node("n");
node.insert("i");
node.insert("c");
node.insert("l");
node.insert("t");

// console.log(node);
// console.log(node.contains("c"))
// Node { data: 'c', right: null, left: null }
// console.log(node.contains("i"));
// Node {
//     data: 'i',
//     right: Node { data: 'l', right: null, left: null },
//     left: Node { data: 'c', right: null, left: null } }
// console.log(node.contains("z"));
// null

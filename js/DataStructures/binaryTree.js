// implement a Node class to create a binary search tree
// the constructo should initialize values 'data', 'left' and 'right'
// implement the 'insert' method for the node class
// the insert should accept an argument 'data' and then insert a new node at the appropriate location in the tree

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
}

const node = new Node("n");
node.insert("i");
node.insert("c");
node.insert("l");
node.insert("t");

console.log(node);

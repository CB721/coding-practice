// create a node class
// the node constructor should accept an argument that gets assigned to the data property and initialize an empty array for storing children
// the node class should have methods 'add' and 'remove'
// create a tree class
// the tree constructor should initialize a 'root' property to null
// implement 'traverseBFS' and 'traverseDFS' on the tree class

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
    add(data) {
        this.children.push(new Node(data));
    }
    remove(data) {
        this.children = this.children.filter(child => child.data !== data);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    // breadth first search
    
    // depth first search

}

module.exports = { Tree, Node };
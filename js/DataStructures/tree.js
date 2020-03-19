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
    traverseBF(action) {
        const tempArr = [this.root];
        // iterate until all of the nodes have been processed
        while (tempArr.length > 0) {
            // remove first node in the array
            const currNode = tempArr.shift();
            // push a copy of the current elements children array into the temp array
            tempArr.push(...currNode.children)
            // perform whichever action(function) was passed into this function
            action(currElement);
        }
    }
    // depth first search
    traverseDFS(action) {

    }
}

module.exports = { Tree, Node };
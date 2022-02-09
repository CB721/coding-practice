// given a node, validate the binary search tree 
// ensure that every node's left hand child is less than the parent node's value
// ensure that every node's right hand child is greater than the parent node's value

const { Node } = require("../DataStructures/binaryTree");

function validate(node, max = null, min = null) {
    console.log("node: ", node);
    console.log("max: ", max);
    console.log("min: ", min);
    if (max !== null && node.data > max) {
        return false;
    }
    if (min !== null && node.data < min) {
        return false;
    }
    if (node.left && !validate(node.left, node.data, min)) {
        return false;
    }
    if (node.right && !validate(node.right, max, node.data)) {
        return false;
    }
    return true;
}

const three = new Node(3);
three.insert(5);
three.insert(105);
three.insert(-30);
three.insert(17);
three.insert(9);
three.insert(2);
three.insert(0);
three.insert(-25);
three.insert(7);
three.insert(16);
three.insert(99);
three.insert(-10);

console.log(validate(three)); // true


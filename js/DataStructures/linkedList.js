// create a class instance to represent a node
    // it should have two properites: "data" and "next"
    // accept both as arguments to the "node" constructor and assign them to the instance as properties
    // if next is not provided, its default value should be null
// create a class instance to represent a linked list
    // it should not have a head node associated with it
    // it will have one property "head" which is a reference to the first node in the list
    // by default, the head should be null
// create a new node from argument "data"
    // assign the resulting node to the head property
    // make sure to handle the case in which the linked list already has a node assigned to the head property
 
// implement classes Node and Linked Lists

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // the head will be changed to the first node of the list
        this.head = null;
    }
    insertFirst(data) {
        // pass in the head, and change the first node, to the second node
        const node = new Node(data, this.head);
        // repair the head reference
        this.head = node;
    }
}
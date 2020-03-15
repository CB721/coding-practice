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
    size() {
        // total of nodes in linked list
        let counter = 0;
        // get reference to first node in the linked list
        let node = this.head;
        // if there is no node, the while node will not be run
        while (node) {
            counter++;
            // go to the next node
            // if the no node after this, than the value will be null and the next attempt to iterate won't happen
            node = node.next;
        }
        return counter;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        let node = this.head;
        let lastNode = null;
        while (node) {
            node = node.next;
            if (node && !node.next) {
                lastNode = node;
            }
        }
        return lastNode;
    }
    clear() {
        // removing the head disconnects all of the nodes from the list
        this.head = null;
    }
    removeFirst() {
        // check if there is head node
        if (this.head) {
            // grab a reference to the first node
            let node = this.head;
            // set the head to be the next node
            // if there is not another, than we are at the end of the list and are removing the final node
            let nextNode = node.next;
            this.head = nextNode;
        } else {
            return;
        }
    }
    removeLast() {
        if (!this.head) {
            return;
        }
        // if there is only one node in the list
        if (!this.head.next) {
            this.head = null;
            return;
        }
        let currNode = this.head.next;
        let prevNode = this.head;
        // while there is a next value
        while (currNode.next) {
            // the last node will not have a next value
            if (!currNode.next) {
                // remove reference to last node
                prevNode.next = null;
            } else {
                // update previous to current
                prevNode = currNode;
                // update current to next
                currNode = currNode.next;
            }
        }
    }
    insertLast(data) {
        const lastNode = this.getLast();
        if (lastNode) {
            lastNode.next = new Node(data);
        } else {
            this.head = new Node(data);
        }
    }
    getAt(index) {
        if (!this.head) {
            return null;
        }
        let i = 0;
        let node = this.head;
        // while we haven't reached the specified index and there is a next node
        while (node) {
            if (i === index) {
                return node;
            } else {
                node = node.next;
                i++;
            }
        }
        return null;
    }
    removeAt(index) {
        if (!this.head) {
            return null;
        }
        let prevNode;
        // check that the index passed is a valid index
        if (index - 1 >= 0) {
            // get the node before the target
            prevNode = this.getAt(index - 1);
        } else if (index === 0) {
            // if the specified index is 0 remove the first node
            this.removeFirst();
            return;
        }
        // if the node before the target is null, than the target is also null
        if (!prevNode) {
            return;
        }
        // if the index that was passed in is a valid node
        if (prevNode.next) {
            const targetNode = prevNode.next
            // check if there is a node after the specified index
            if (targetNode.next) {
                // set the previous node to link to the node after the specified index
                prevNode.next = targetNode.next;
            } else {
                // otherwise just remove the reference to the target node
                prevNode.next = null;
            }
        }
        return;
    }
}

const list = new LinkedList();
// console.log(list);
list.insertFirst("b");
list.insertFirst("a");
list.insertFirst("c");
list.insertFirst("d");
// console.log(list.size());
// console.log(list.getFirst());
// console.log(list.getLast());
list.removeFirst();
// console.log(list.size());
// console.log(list.getFirst());
list.removeLast();
// console.log(list.size());
// console.log(list.getLast());
list.insertLast("e");
// console.log(list.getLast());
// list.clear();
// console.log(list);
// console.log(list.head.next.next);
console.log(list.getAt(3));
list.removeAt(3);
console.log(list.getAt(3));
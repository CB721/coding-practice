// create a stack data structure
// it should be a class with methods 'add', 'remove' and 'peek'
// adding to the queue should store an element until it is removed

class Stack {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.push(record);
    }
    remove() {
        return this.data.pop();
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}
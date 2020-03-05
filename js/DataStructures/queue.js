// create a queue data structure
// it should be a class with methods 'add' and 'remove'
// adding to the queue should store an element until it is removed

// create a class to use as a template
class Queue {
    constructor() {
        // use an array to hold the data
        this.data = [];
    }
    // method to add to queue
    add(record) {
        // add to the beginning of the data array
        this.data.unshift(record);
    }
    // method to remove from queue
    remove() {
        // remove from the end of the data array
        // return so that we can do something with the removed record
        return this.data.pop();
    }
}
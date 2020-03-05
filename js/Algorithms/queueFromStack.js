// implement a queue data structure using two stacks
// do not create an array inside of the 'Queue' class
// Queue should implement the methods 'add', 'remove' and 'peek'

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

class Queue {
    // create two stacks whenever a Queue is created
    constructor() {
        this.first = new Stack();
        this.second = new Stack();
        this.data = [];
    }
    add(record) {
        this.first.add(record);
    }
    remove() {
        // as long a value continues be returned from the first stack
        while (this.first.peek()) {
            // move to second stack
            this.second.add(this.first.remove());
        }
        // remove last record from second stack
        const record = this.second.remove();
        // as long a value continues be returned from the second stack
        while (this.second.peek()) {
            // move other elements back to first stack
            this.first.add(this.second.remove());
        }
        return record;
    }
    peek() {
        // as long a value continues be returned from the first stack
        while (this.first.peek()) {
            // move to second stack
            this.second.add(this.first.remove());
        }
        // get value of last record from second stack
        const record = this.second.peek();
        // as long a value continues be returned from the second stack
        while (this.second.peek()) {
            // move other elements back to first stack
            this.first.add(this.second.remove());
        }
        return record;
    }
}

const q = new Queue();
q.add("blue");
q.add("peas");
q.add("bacon");
q.add(1)
console.log(q.first.data);
// [ 'blue', 'peas', 'bacon', 1 ]
console.log(q.peek());
// blue
console.log(q.remove());
// blue
console.log(q.peek());
// peas
q.add("turles");
console.log(q.remove());
// peas
console.log(q.first.data);
// [ 'bacon', 1, 'turles' ]
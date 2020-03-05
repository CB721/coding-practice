// implement a 'peek' method in the queue class
// it should return the last element from the queue without removing it

class Queue {
    constructor() {
        this.data = [];
    }
    add(record) {
        this.data.unshift(record);
    }
    remove(record) {
        return this.data.pop(record);
    }
    peek() {
        return this.data[this.data.length - 1];
    }
}

// implement the 'weave' function
// it should receive two queues as arguments and combine them into a new, third queue
// the third queue should contain the alterating content from the two queues
// it should handle queues of different lengths without inserting 'undefined' into the third
// do not access the array inside of any queue
// only use the 'add', 'remove' and 'peek' functions

function weave(sourceOne, sourceTwo) {
    // create queue inside the function to store combined result
    const thirdQueue = new Queue();
    // as long as either source returns a defined value, continue iterating
    while (sourceOne.peek() || sourceTwo.peek()) {
        // if there is still a value in source one
        if (sourceOne.peek()) {
            // move last element into new queue
            thirdQueue.add(sourceOne.remove());
        }
        // if there is still a value in source two
        if (sourceTwo.peek()) {
            // move last element into new queue
            thirdQueue.add(sourceTwo.remove());
        }
    }
    return thirdQueue.data;
}

const one = new Queue();
one.add("a");
one.add("b");
one.add("c");
const two = new Queue();
two.add("d");
two.add("e");
two.add("f");
const three = new Queue();
three.add(1);
three.add("weave");
three.add(10000);
three.add(-54);
three.add("javascript");
three.add("react");
const four = new Queue();
four.add("hola");
// running multiple at once will not return expected result because elements get removed in the weave function
// console.log(weave(one, two));
// [ 'f', 'c', 'e', 'b', 'd', 'a' ]
// console.log(weave(one, three));
// [ 'react', 'javascript', -54, 10000, 'c', 'weave', 'b', 1, 'a' ]
console.log(weave(four, two));
// [ 'f', 'e', 'd', 'hola' ]
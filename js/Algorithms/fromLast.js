// given a linked list and integer n, return the element n amount of spaces from the last node in the list
// do not call the size method
// assume that n will always be less than the length of the list

const { LinkedList } = require("../DataStructures/linkedList");

function fromLast(list, n) {
    if (n === 0) {
        return list.getLast();
    }
    let slow = list.head;
    let fast = list.head;
    // move the fast variable n spaces away from the slow
    // since n will always be less than the length of the list, we can do this
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    // iterate as long as there a next node
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

const linkedList = new LinkedList();
linkedList.insertFirst("amazon");
linkedList.insertFirst("apple");
linkedList.insertFirst("facebook");
linkedList.insertFirst("google");
linkedList.insertFirst("microsoft");

console.log(fromLast(linkedList, 2)); // facebook
console.log(fromLast(linkedList, 0)); // amazon
console.log(fromLast(linkedList, 4)); // mircosoft
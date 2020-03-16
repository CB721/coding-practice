// a circular linked list does not have a tail node
// the last node, points to a node earlier in the list
// given a linked list, return true if the list is circular and false if it is not

const { LinkedList, Node } = require("../DataStructures/linkedList");

function circular(list) {
    if (!list.head) {
        return false;
    }
    let slow = list.head;
    let fast = list.head;
    // continue to iterate as long as there are two nodes after the fast node
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        // if both are pointing at the same identical node, than the list is circular
        if (slow === fast) {
            return true;
        }
    }
    // if it is ever false, than there is not a circular list
    return false;
}

const linkedList = new LinkedList();
let c = "c";
let l = "l";
let i = "i";
let n = "n";
let t = "t";
linkedList.insertFirst(t);
linkedList.insertFirst(l);
linkedList.insertFirst(i);
linkedList.insertFirst(l);
linkedList.insertFirst(c);
console.log(circular(linkedList)); // false
const circleList = new LinkedList();
c = new Node(c);
l = new Node(l);
i = new Node(i);
n = new Node(n);
t = new Node(t);
const makeItACircle = new Node("!");
circleList.head = c;
c.next = l;
l.next = i;
i.next = n;
n.next = t;
t.next = makeItACircle;
makeItACircle.next = i;
console.log(circular(circleList)); // true


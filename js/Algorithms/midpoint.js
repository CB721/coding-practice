// return the 'middle' node of a linked list
// if the list has an even number of elements, return the node at the end of the first half of the list
// do not use a counter variable
// do not retrive the size of the list
// only iterate through the list one time
const { LinkedList } = require("../DataStructures/linkedList");

function midpoint(list) {
    // if there are no nodes in the list
    if (!list.head) {
        return null;
    }
    let slow = list.head;
    let fast = list.head;
    // if there is only one node in the list
    if (!list.head.next) {
        return list.head;
    } else {
        // fast will iterate through the loop twice as fast as slow
        while (fast) {
            // see if there are 2 nodes directly after the slow node
            if (fast.next) {
                if (fast.next.next) {
                    slow = slow.next;
                    fast = fast.next.next
                } else {
                    // slow will not move
                    fast = fast.next
                }
            } else {
                return slow;
            }
        }
    }
}

const linkedList = new LinkedList();
linkedList.insertFirst({name: "eggs", purchased: false, store_id: 12, date_added: "2020-03-01"});
linkedList.insertFirst({name: "bacon", purchased: true, store_id: 3, date_added: "2020-02-28"});
linkedList.insertFirst({name: "bread", purchased: false, store_id: 12, date_added: "2020-03-05"});
linkedList.insertFirst({name: "wine", purchased: false, store_id: 16, date_added: "2020-03-15"});
linkedList.insertFirst({name: "milk", purchased: true, store_id: 16, date_added: "2020-03-12"});
console.log(midpoint(linkedList)); // bread object
linkedList.removeAt(3);
console.log(midpoint(linkedList)); // wine object
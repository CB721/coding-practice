
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.
const { Node } = require("../../DataStructures/linkedList");

function addTwoNumbers(l1, l2) {
    let temp1 = l1;
    let temp2 = l2;
    let string1 = "";
    let string2 = "";
    while (temp1) {
        string1 = temp1.data + string1;
        temp1 = temp1.next;
    }
    while (temp2) {
        let temp2Data = temp2.data || '';
        string2 = temp2Data + string2;
        temp2 = temp2.next;
    }
    if (!string1) string1 = 0;
    if (!string2) string2 = 0;
    function addLongNumbers(num1, num2) {
        if (num1.length < num2.length) {
            let temp = num2;
            num2 = num1;
            num1 = temp;
        }
        let sum = 0;
        let carry = 0;
        for (let i = 0; i < num1.length; i++) {
            let tempNum2 = num2[num2.length - 1 - i];
            let tempTotal = [];
            if (tempNum2 && parseInt(tempNum2) > 0) {
                tempTotal = (carry + parseInt(num1[num1.length - 1 - i]) + parseInt(tempNum2)).toString().split("");
            } else {
                tempTotal = (carry + parseInt(num1[num1.length - 1 - i])).toString().split("");
            }
            if (tempTotal.length > 1) {
                carry = parseInt(tempTotal[0]);
                sum = (parseInt(tempTotal[1]) + Math.pow(10, i + 1));
            } else {
                carry = 0;
                sum = (parseInt(tempTotal[0]) * Math.pow(10, i + 1));
            }
        }
        console.log(sum)
        return sum;
    }
    let total = 0;
    if (string1.length > 7 || string2.length > 7) {
        total = addLongNumbers(string1, string2);
    } else {
        total = parseInt(string1) + parseInt(string2);
    }
    let outArr = [];
    while (total) {
        let lastDigit = total % 10;
        outArr.push(lastDigit);
        total = Math.floor(total / 10);
    }
    let output = new Node(outArr[outArr.length - 1]);
    for (let i = outArr.length - 2; i >= 0; i--) {
        let currNode = new Node(outArr[i]);
        currNode.next = output;
        output = currNode;
    }
    const dummyHead = new Node(0);
    dummyHead.next = output;
    return dummyHead.next;
};

const one = new Node(3);
const two = new Node(4);
const three = new Node(2);
two.next = one;
three.next = two;
const four = new Node(4);
const five = new Node(6);
const six = new Node(5);
five.next = four;
six.next = five;
// console.log(addTwoNumbers(three, six)); 
const seven = new Node(2);
const eight = new Node(0);
// console.log(addTwoNumbers(seven, eight)); 
// [8,3,2,7,4,5,7,9,8,1]

const a = new Node(1);
const b = new Node(8);
const c = new Node(9);
const d = new Node(7);
const e = new Node(5);
const f = new Node(4);
const g = new Node(7);
const h = new Node(2);
const i = new Node(3);
const j = new Node(9);
// j.next = i;
// i.next = h;
// h.next = g;
// g.next = f;
// f.next = e;
// e.next = d;
// d.next = c;
// c.next = b;
// b.next = a;
// [2,6,7,2,5,4,2,0,1,8]
[1, 9, 9, 9, 9, 9, 9, 9, 9, 9]
const k = new Node(9);
const l = new Node(9);
const m = new Node(9);
const n = new Node(8);
const o = new Node(9);
const p = new Node(9);
const q = new Node(9);
const r = new Node(9);
const s = new Node(9);
const t = new Node(1);
t.next = s;
s.next = r;
r.next = q;
q.next = p;
p.next = o;
o.next = n;
n.next = m;
m.next = l;
l.next = k;
console.log(addTwoNumbers(j, t));
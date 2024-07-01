const { Node } = require('../../DataStructures/linkedList')

// length of last word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
// consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // O(n) complexity solution because, at most, the method iterates over every character in the string only once.
  let len = 0;
  let hasStartedWord = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      len++;
      hasStartedWord = true;
    } else if (hasStartedWord) {
      break;
    }
  }

  return len;
};

// console.log(lengthOfLastWord("Hello World")) // 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
// console.log(lengthOfLastWord("luffy is still joyboy")) // 6

// String Reversal
// Given a string, return a new string with the reversed order of characters.
// Don't use 'reverse' built-in method

function reverse(str) {
  // O(n) complexity solution because, at most, the method iterates over every character in the string only once.
  let output = '';

  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }

  return output;
}

// console.log(reverse('abc')) // cba

// remove nth node from end of list
// Given the head of a linked list, remove the nth node from the end of the list and return its head.


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // O(n) complexity solution because, at most, the method iterates over every node in the linked list only once.
  let tempNode = new Node(0);
  tempNode.next = head;
  let first = tempNode;
  let second = tempNode;

  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  while (first !== null) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;

  return tempNode.next;
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(removeNthFromEnd(a, 2)) // [1, 2, 3, 5]

const f = new Node(1);
console.log(removeNthFromEnd(f, 1)) // []

const g = new Node(1);
const h = new Node(2);
g.next = h;
console.log(removeNthFromEnd(g, 1)) // [1]
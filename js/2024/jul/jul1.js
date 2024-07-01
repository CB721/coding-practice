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
var removeNthFromEnd = function (head, n) {
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

// const a = new Node(1);
// const b = new Node(2);
// const c = new Node(3);
// const d = new Node(4);
// const e = new Node(5);
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(removeNthFromEnd(a, 2)) // [1, 2, 3, 5]

// const f = new Node(1);
// console.log(removeNthFromEnd(f, 1)) // []

// const g = new Node(1);
// const h = new Node(2);
// g.next = h;
// console.log(removeNthFromEnd(g, 1)) // [1]

// container with most water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // O(n) complexity solution because, at most, the method iterates over every element in the array only once (with two pointers).
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
};

// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])) // 49

// trapping rain water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  // Initialize two pointers, 'left' and 'right', at the start and end of the array respectively
  let left = 0;
  let right = height.length - 1;

  // Initialize two variables, 'leftMax' and 'rightMax', to keep track of the maximum height seen so far from the left and right respectively
  let leftMax = 0;
  let rightMax = 0;

  // Initialize a variable 'water' to keep track of the total amount of water that can be trapped
  let water = 0;

  // Continue the loop until the 'left' pointer is less than the 'right' pointer
  while (left < right) {
    // If the height at the 'left' pointer is less than the height at the 'right' pointer
    if (height[left] < height[right]) {
      // If the height at the 'left' pointer is greater than or equal to 'leftMax', update 'leftMax'
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        // Otherwise, add the difference between 'leftMax' and the height at the 'left' pointer to 'water'
        water += leftMax - height[left];
      }
      // Move the 'left' pointer one step to the right
      left++;
    } else {
      // If the height at the 'right' pointer is greater than or equal to 'rightMax', update 'rightMax'
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        // Otherwise, add the difference between 'rightMax' and the height at the 'right' pointer to 'water'
        water += rightMax - height[right];
      }
      // Move the 'right' pointer one step to the left
      right--;
    }
  }

  // Return the total amount of water that can be trapped
  return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
// console.log(trap([4,2,0,3,2,5])) // 9
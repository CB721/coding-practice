// // trees

// // each node should take in the data and add/remove children
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.children = [];
//     }
//     add(data) {
//         this.children.push(new Node(data));
//     }
//     copyChildrenFromOtherNode(data) {
//         this.children = [...this.children, ...data.children];
//     }
//     remove(data) {
//         this.children = this.children.filter(child => child.data !== data);
//     }
// }

// class Tree {
//     constructor() {
//         this.root = null;
//     }
//     // start at the top and work down
//     breadthFirstSearch(action = () => { }) {
//         const initArr = [this.root];
//         while (initArr.length) {
//             // remove and save the first element in the array
//             const currNode = initArr.shift();
//             // take the removed element and place its children into the array
//             initArr.push(...initArr.children);
//             // perform the specified action on the removed node
//             action(currNode);
//         }
//     }
//     // start at the bottom and work up
//     depthFirstSearch(action = () => { }) {
//         const initArr = [this.root];
//         while (initArr.length) {
//             const currNode = initArr.shift();
//             initArr.unshift(...initArr.children);
//             action(currNode);
//         }
//     }
// }

// // given the root node of a tree, return an array where each element is the width of the tree at each level
// // width - think breadth first search
// function levelWidth(root) {
//     const tempArr = [root, "stop"];
//     const counters = [0];
//     while (tempArr.length > 1) {
//         const currNode = tempArr.shift();
//         if (currNode === "stop") {
//             tempArr.push("stop");
//             counters.push(0);
//         } else {
//             tempArr.push(...currNode.children);
//             counters.push(counters.pop++);
//         }
//     }
//     return counters;
// }

// class BinaryNode {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
//     insert(data) {
//         if (data < this.data && this.left) {
//             this.left.insert(data);
//         } else if (this.data > data) {
//             this.left = new Node(data);
//         } else if (data > this.data && this.right) {
//             this.right.insert(data);
//         } else if (this.data < data) {
//             this.right = new Node(data);
//         }
//     }
//     contains(data) {
//         if (data === this.data) {
//             return this;
//         } else if (data < this.data && this.left) {
//             return this.left.contains(data);
//         } else if (data < this.data) {
//             return null;
//         } else if (data > this.data && this.right) {
//             return this.right.contains(data);
//         } else if (data > this.data) {
//             return null
//         }
//     }
// }

// function validateBinaryTree(node, max = null, min = null) {
//     if (max !== null && node.data > max) {
//         return false;
//     }
//     if (min !== null && node.data < min) {
//         return false;
//     }
//     if ((max !== null && root.data === max) || (min !== null && root.data === min)) {
//         return false;
//     }
//     if (node.left && !validateBinaryTree(node.left, node.data, min)) {
//         return false;
//     }
//     if (node.right && !validateBinaryTree(node.right, max, node.data)) {
//         return false;
//     }
//     return true;
// }

// function isSameTreeMemory(p, q) {
//     if ((p && !q) || (!p && q)) {
//         return false;
//     }
//     if (p?.data !== q?.data) {
//         return false;
//     }
//     if (p?.left?.data !== q?.left?.data) {
//         return false;
//     }
//     if (p?.right?.data !== q?.right?.data) {
//         return false;
//     }
//     if ((p?.left && q?.left) || (p?.right && q?.right)) {
//         return (p?.left === q?.left || isSameTreeMemory(p.left, q.left)) && (p?.right === q?.right || isSameTreeMemory(p.right, q.right));
//     }
//     return true;
// };

// function isSameTreeRunTime(p, q) {
//     if (p === null && q === null) {
//         return true;
//     }
//     if (p === null || q === null) {
//         return false;
//     }
//     if (p.data != q.data) {
//         return false;
//     }
//     return isSameTreeRunTime(p.right, q.right) && isSameTreeRunTime(p.left, q.left);
// };

// // You are given an array prices where prices[i] is the price of a given stock on the ith day.

// // You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// // Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// function maxProfit(prices) {
//     if ((!prices[0] && prices[0] !== 0) || (!prices[1] && prices[1] !== 0)) {
//         return 0;
//     }
//     let min = prices[0]
//     let result = 0;
//     for (let i = 1; i < prices.length; i++) {
//         // if the current number is greater than the previous
//         if (prices[i] > prices[i - 1]) {
//             result = Math.max(result, prices[i] - min);
//         } else {
//             min = Math.min(min, prices[i]);
//         }
//     }
//     return result;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
// console.log(maxProfit([1, 2, 4])) // 3

// // Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.

// // An alphanumeric string is a string consisting of lowercase English letters and digits.
// function secondHighest(s) {
//     let largestDigit = -1;
//     let secondLargestDigit = -1;
//     for (let i = 0; i < Math.ceil(s.length / 2); i++) {
//         let firstDigit = parseInt(s[i]) >= 0 ? parseInt(s[i]) : - 1;
//         let lastDigit = parseInt(s[s.length - i - 1]) >= 0 ? parseInt(s[s.length - i - 1]) : -1;
//         let digitsArr = firstDigit > lastDigit ? [firstDigit, lastDigit] : [lastDigit, firstDigit];
//         if (digitsArr[0] > largestDigit) {
//             secondLargestDigit = largestDigit;
//             largestDigit = digitsArr[0];
//         } else if (digitsArr[0] > secondLargestDigit && digitsArr[0] < largestDigit) {
//             secondLargestDigit = digitsArr[0];
//         }
//         if (digitsArr[1] > secondLargestDigit && digitsArr[0] !== digitsArr[1] && secondLargestDigit === -1) {
//             secondLargestDigit = digitsArr[1];
//         }
//     }
//     return largestDigit === secondLargestDigit ? - 1 : secondLargestDigit;
// };


// console.log(secondHighest("abc1111")) // -1
// console.log(secondHighest("1a0")) // 0
// console.log(secondHighest("dfa12321afd")) // 2
// console.log(secondHighest("sjhtz8344")) // 4
// console.log(secondHighest("ck077")) // 0

// // The Leetcode file system keeps a log each time some user performs a change folder operation.

// // The operations are described below:

// // "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
// // "./" : Remain in the same folder.
// // "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
// // You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.

// // The file system starts in the main folder, then the operations in logs are performed.

// // Return the minimum number of operations needed to go back to the main folder after the change folder operations.
// function minOperations(logs) {
//     let stepsFromMainDirectory = 0;
//     for (let i = 0; i < logs.length; i++) {
//         let nextStep = logs[i];
//         if (nextStep === '../' && stepsFromMainDirectory > 0) {
//             stepsFromMainDirectory--;
//         } else if (nextStep !== '../' && nextStep !== './') {
//             stepsFromMainDirectory++;
//         }
//     }
//     return stepsFromMainDirectory;
// };

// function checkOnesSegment(s) {

//     for (let i = 0; i < s.length(); i++) {
//         if (s.charAt(i) == '0') {
//             break;
//         }
//         for (let j = i; j < s.length(); j++) {
//             if (s.charAt(j) == '1')
//                 return false;
//         }
//     }
//     return true;
// }

// // Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// // better memory solution
// function isSymmetric(root) {
//     return isMirror(root, root)
// };

// function isMirror(left, right) {
//     if (!left && !right) {
//         return true;
//     }
//     if (!left || !right) {
//         return false;
//     }
//     return left.val === right.val && isMirror(left.right, right.left) && isMirror(left.left, right.right);
// }

// // better runtime solution
// function isSymmetric(root) {
//     const stack = [];
//     if (!root.left && !root.right) {
//         return true;
//     } else if (root.left?.val === root.right?.val) {
//         stack.push(root);
//         stack.push(root);
//     } else {
//         return false;
//     }

//     let node1, node2;

//     while (stack.length) {
//         node1 = stack.pop();
//         node2 = stack.pop();

//         if (!node1 && !node2) {
//             continue;
//         } else if (!node1 && node2) {
//             return false;
//         } else if (node1 && !node2) {
//             return false;
//         } else if (node1.val !== node2.val) {
//             return false;
//         }

//         stack.push(node1.right);
//         stack.push(node2.left);
//         stack.push(node1.left);
//         stack.push(node2.right);
//     }

//     return true;
// }

// Write a function that accepts an integer n and returns the nxn spiral matrix.
// function matrix(n) {
//     if (n < 0) {
//         return [];
//     }
//     const output = [...Array(n)].map(_ => [] );

//     let currNum = 1;
//     let startCol = 0;
//     let endCol = n - 1;
//     let startRow = 0;
//     let endRow = n - 1;

//     while(startCol <= endCol && startRow <= endRow) {
//         console.log("---next iteration----")
//         console.log("output: ", output)
//         console.log("currNum: ", currNum)
//         console.log("startCol: ", startCol)
//         console.log("endCol: ", endCol)
//         console.log("startRow: ", startRow)
//         console.log("endRow: ", endRow)
//         console.log("-------")
//         // top row
//         for (let i = startCol; i <= endCol; i++) {
//             output[startRow][i] = currNum;
//             currNum++;
//         }
//         // top row is complete, move down to the next row
//         startRow++;
//         console.log("top row complete")
//         console.log("output: ", output)
//         console.log("currNum: ", currNum)
//         console.log("startCol: ", startCol)
//         console.log("endCol: ", endCol)
//         console.log("startRow: ", startRow)
//         console.log("endRow: ", endRow)
//         // right column
//         for (let i = startRow; i <= endRow; i++) {
//             output[i][endCol] = currNum;
//             currNum++;
//         }
//         // right column is complete, move on to bottom row
//         endCol--;
//         console.log("right column complete")
//         console.log("output: ", output)
//         console.log("currNum: ", currNum)
//         console.log("startCol: ", startCol)
//         console.log("endCol: ", endCol)
//         console.log("startRow: ", startRow)
//         console.log("endRow: ", endRow)
//         // bottom row
//         for (let i = endCol; i >= startCol; i--) {
//             output[endRow][i] = currNum;
//             currNum++;
//         }
//         endRow--;
//         console.log("bottom row complete")
//         console.log("output: ", output)
//         console.log("currNum: ", currNum)
//         console.log("startCol: ", startCol)
//         console.log("endCol: ", endCol)
//         console.log("startRow: ", startRow)
//         console.log("endRow: ", endRow)
//         // bottom row is complete, move on to first column
//         for (let i = endRow; i >= startRow; i--) {
//             output[i][startCol] = currNum;
//             currNum++;
//         }
//         console.log("start col complete")
//         console.log("output: ", output)
//         console.log("currNum: ", currNum)
//         console.log("startCol: ", startCol)
//         console.log("endCol: ", endCol)
//         console.log("startRow: ", startRow)
//         console.log("endRow: ", endRow)
//         startCol++;
//         console.log("\n")
//     }

//     return output;
// }

// console.log(matrix(4))

class ListNode {
    constructor(val, next = null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeKLists(lists) {
    const output = new ListNode(0);
    let head = output;
    let minIndex = 0;
    
    while(true) {
        console.log("---next loop----")
        console.log("head: ", head)
        let shouldBreak = true;
        let minVal = Infinity;
        
        for (let i = 0 ; i < lists.length; i++) {
            console.log("\n")
            console.log("lists[i]: ", lists[i])
            console.log("minVal: ", minVal)
            console.log("minIndex: ", minIndex)
            if (lists[i]) {
                if (lists[i].val < minVal) {
                    minIndex = i;
                    minVal = lists[i].val;
                }
                shouldBreak = false;
            }
        }
        console.log("shouldBreak: ", shouldBreak)
        if (shouldBreak) {
            break;
        }
        
        head.next = lists[minIndex];
        head = head.next;
        lists[minIndex] = lists[minIndex].next;
    }
    head.next = null
    return output.next;
};

const testData = [new ListNode(1, new ListNode(4, new ListNode(5))), new ListNode(1, new ListNode(3, new ListNode(4))), new ListNode(2, new ListNode(6))];
console.log(mergeKLists(testData));

// implement Quickselect algorithm - find the k-th smallest element in an unordered list
// example
// quickSelect([3, 1, 4, 4, 2], 2) => 2
// quickSelect([3, 1, 4, 4, 2], 3) => 3
// quickSelect([4, 5, 1], 2) => 4

function quickSelect(arr, k) {
  console.log('############');
  console.log('arr', arr);
  console.log('k', k);
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr[0];
  if (k > arr.length) return null;

  const pivot = arr[0];
  console.log('pivot', pivot);
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    console.log('--------------')
    console.log('arr[i]', arr[i]);
    console.log('left', left);
    console.log('right', right);
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log('*********')
  console.log('final left', left);
  console.log('final right', right);
  if (left.length === k - 1) {
    return pivot;
  } else if (left.length > k - 1) {
    return quickSelect(left, k);
  } else {
    return quickSelect(right, k - left.length - 1);
  }
}

// console.log(quickSelect([3, 1, 4, 4, 2], 2)); // 2
// console.log(quickSelect([3, 1, 4, 4, 2], 3)); // 3
// console.log(quickSelect([4, 5, 1], 2)); // 4
// console.log(quickSelect([120, 457834, 23, 42346, 77674, 834, 2341, 435, 3, 45378, 878, 234578, 45743, 848, 44, -1, 47, 0, 74], 13)); // 2341

// Return Length of Arguments Passed
// Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function (...args) {
  return args.length;
};

// console.log(argumentsLength(1, 2, 3)); // 3
// console.log(argumentsLength(1, 2, null, 10, 5)); // 5
// console.log(argumentsLength('foo', { bar: 'rab' }, 'baz', 'bin')); // 4

// Score of a String
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.
// s will have at least two characters.
var scoreOfString = function (s) {
  // let total = Math.abs(s.charCodeAt(0) - s.charCodeAt(1));

  // for (let i = 1; i < s.length - 1; i++) {
  //   total += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  // }

  // return total;

  return [...s].reduce((acc, curr, i, arr) => {
    if (i < arr.length - 1) {
      acc += Math.abs(curr.charCodeAt(0) - arr[i + 1].charCodeAt(0));

    }
    return acc;
  }, 0);
};

// console.log(scoreOfString('abc')); // 2
// console.log(scoreOfString('aaaa')); // 0
// console.log(scoreOfString('hello')) // 13

// Add Two Promises
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

var addTwoPromises = async function (...args) {
  const [val1, val2] = await Promise.all(args);

  return val1 + val2;
};

// addTwoPromises(Promise.resolve(3), Promise.resolve(4)).then((res) => {
//   console.log(res); // 7
// });

// Subsets
// Given an integer array nums of unique elements, return all possible subsets.

// The solution set must not contain duplicate subsets. Return the solution in any order.
// All the numbers of nums are unique.

var subsets = function (nums) {
  // const output = [[]];

  // for (let i = 0; i < nums.length; i++) {
  //   console.log('------ outer loop ------')
  //   console.log('nums[i]', nums[i])
  //   const length = output.length;
  //   console.log('length', length);
  //   for (let j = 0; j < length; j++) {
  //     console.log('------ inner loop ------')
  //     console.log('output[j]', output[j]);
  //     output.push([...output[j], nums[i]]);
  //     console.log('output', output);
  //   }
  // }

  // return output;

  const output = [];
  const temp = [];

  const getSubset = (start = 0) => {
    output.push([...temp]);

    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      getSubset(i + 1);
      temp.pop();
    }
  }

  getSubset();

  return output;
};

// console.log(subsets([1, 2, 3])); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Remove duplicates from a sorted array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

var removeDuplicates = function(nums) {
  let uniqueCount = 1;

  for (let i = 0; i < nums.length; i++) {
    console.log('------------------')
    console.log('nums[i]', nums[i]);
    console.log('nums[uniqueCount - 1]', nums[uniqueCount - 1]);
    if (nums[i] !== nums[uniqueCount - 1]) {
      nums[uniqueCount] = nums[i];
      uniqueCount++;
    }
    console.log('nums', nums);
    console.log('uniqueCount', uniqueCount);
  }
  console.log('final nums', nums);
  return uniqueCount;
};

// console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5
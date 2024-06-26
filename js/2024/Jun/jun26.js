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

var removeDuplicates = function (nums) {
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
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5

// Divide Two Integers
// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

// The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

// Return the quotient after dividing dividend by divisor.

// Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

var divide = function (dividend, divisor) {
  // passed 991 / 994 test cases, time limit exceeded for the rest
  // let y = Math.abs(dividend);
  // const absDivisor = Math.abs(divisor);

  // if (dividend === 0 || absDivisor > y) return 0;

  // let x = 0;
  // const upperLimit = Math.pow(2, 31) - 1;
  // const lowerLimit = Math.pow(-2, 31);

  // if (absDivisor !== 1 && dividend <= upperLimit && dividend >= lowerLimit) {
  //     while (y >= absDivisor) {
  //         y -= absDivisor;
  //         x++;
  //     }
  // } else {
  //     x = y;
  // }

  // const shouldBeNegative = (dividend < 0) !== (divisor < 0);

  // if (x >= upperLimit) {
  //     x = shouldBeNegative ? Math.abs(lowerLimit) : upperLimit;
  // }

  // return shouldBeNegative ? -(x) : x;

  const shouldBeNegative = Math.sign(divisor) !== Math.sign(dividend);
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let totalTimesDivided = 0;

  while (divisor <= dividend) {
    let value = divisor;
    let timesDivided = 1;

    while (value + value <= dividend) {
      value += value;
      timesDivided += timesDivided;
    }

    dividend = dividend - value;
    totalTimesDivided += timesDivided;
  }

  if (totalTimesDivided > ((2 ** 31) - 1)) {
    return shouldBeNegative ? -(2 ** 31) : 2 ** 31 - 1;
  }

  return shouldBeNegative ? -totalTimesDivided : totalTimesDivided;
};

// console.log(divide(10, 3)); // 3
// console.log(divide(7, -3)); // -2
// console.log(divide(0, 1)); // 0
// console.log(divide(-1, 1)); // -1
// console.log(divide(1, 2)); // 0
// console.log(divide(-2147483648, -1)); // 2147483647
// console.log(divide(-2147483648, 1)); // -2147483648
// console.log(divide(2147483647, 2)); // 1073741823
// console.log(divide(-2147483648, 4)); // -536870912
// console.log(divide(-2147483648, 2)); // -1073741824

// Remove element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // let occurrencesOfVal = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   console.log('-------------');
  //   console.log('nums: ', nums);
  //   console.log('nums[i]: ', nums[i]);
  //   if (nums[i] === null) {
  //     break;
  //   }

  //   console.log('nums[i] === val: ', nums[i] === val);
  //   while (nums[i] === val) {
  //     console.log('***');
  //     nums.splice(i, 1);
  //     nums.push(null);

  //     occurrencesOfVal++;
  //   }
  // }
  // console.log('final nums: ', nums);
  // return nums.length - occurrencesOfVal;

  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }

  return nums.length;
};

// console.log(removeElement([3, 2, 2, 3], 3)) // 2
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // 5

// Search insert position
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let foundIndex = -1;

  if (target < nums[0] || target === nums[0]) {
    return 0;
  }

  for (let i = 0; i < nums.length; i++) {
    // console.log('\n -------------')
    // console.log('nums[i]: ', nums[i])
    // console.log('target: ', target)
    if (nums[i] === target || nums[i] > target) {
      foundIndex = i;
      break;
    }
  }

  return foundIndex >= 0 ? foundIndex : nums.length;
};

// console.log(searchInsert([1,3,5,6], 5)) // 2
// console.log(searchInsert([1, 3, 5, 6], 2)) // 1
// console.log(searchInsert([1, 3, 5, 6], 7)) // 4
// console.log(searchInsert([1, 3, 5, 6], 0)) // 0
// console.log(searchInsert([1], 1)) // 0

// plus one
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  // return (parseInt(digits.join('')) + 1).toString().split('').map((val) => parseInt(val));

  // for (let i = digits.length - 1; i >= 0; i--) {
  //   if (++digits[i] > 9) {
  //     digits[i] = 0;
  //   } else {
  //     return digits;
  //   }
  // }

  // digits.unshift(1);

  // return digits;

  const str = digits.join('')
  let num = Number(str)
  let n = num + 1
  if (str.length >= 16) {
    num = BigInt(str)
    n = num + BigInt(1)
  }
  const s = n.toString();
  const arr = s.split("")
  return arr.map((val) => parseInt(val));
};

// console.log(plusOne([1, 2, 3])) // [1, 2, 4]
// console.log(plusOne([4, 3, 2, 1])) // [4,3,2,2]
// console.log(plusOne([9])) // [1,0]
// console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3])) // [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]

// to be or not to be
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  function toBe(testVal) {
    if (val === testVal) {
      return true;
    } else {
      throw new Error("Not Equal")
    }
  }
  function notToBe(testVal) {
    if (val !== testVal) {
      return true;
    } else {
      throw new Error("Equal")
    }
  }

  return {
    toBe,
    notToBe,
  }
};

// console.log(expect(5).toBe(5)) // true
// console.log(expect(6).notToBe(5)) // true
// console.log(expect(5).toBe(null)) // Error("Not Equal")
// console.log(expect(null).notToBe(null)) // Error("Equal")

// Cache with time limit
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

// var TimeLimitedCache = function () {
//   this.items = {}
// };

// /** 
// * @param {number} key
// * @param {number} value
// * @param {number} duration time until expiration in ms
// * @return {boolean} if un-expired key already existed
// */
// TimeLimitedCache.prototype.set = function (key, value, duration) {
//   const existingItem = this.get(key);
//   let keyValExists = false;

//   if (existingItem && existingItem !== -1) {
//     keyValExists = true;
//   }

//   this.items = {
//     ...this.items,
//     [key]: {
//       value,
//       duration,
//       start: new Date().getMilliseconds(),
//     }
//   }

//   return keyValExists;
// };

// /** 
// * @param {number} key
// * @return {number} value associated with key
// */
// TimeLimitedCache.prototype.get = function (key) {
//   const currTime = new Date().getMilliseconds();
//   const item = this.items[key];

//   if (item && currTime - item.start <= item.duration) {
//     return item.value;
//   } else {
//     return -1;
//   }
// };

// /** 
// * @return {number} count of non-expired keys
// */
// TimeLimitedCache.prototype.count = function () {
//   const currTime = new Date().getMilliseconds();

//   let count = 0;

//   Object.keys(this.items).forEach((key) => {
//     const item = this.items[key];

//     if (currTime - item.start <= item.duration) {
//       count++;
//     }
//   });

//   return count;
// };

var TimeLimitedCache = function() {
  this.cache = {};
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
if (this.cache[key] && this.cache[key].timer) {
  clearTimeout(this.cache[key].timer);
  this.cache[key].value = value;
  this.cache[key].timer = setTimeout(() => {
    this.remove(key);
  }, duration);
  return true;
} else {
  this.cache[key] = {
    value: value,
    timer: setTimeout(() => {
      this.remove(key);
    }, duration)
  };
  return false;
}
};

/** 
* @param {number} key
* @return {number} value associated with key
*/
TimeLimitedCache.prototype.get = function(key) {
if (this.cache[key] && this.cache[key].timer) {
  return this.cache[key].value;
} else {
  return -1;
}
};

TimeLimitedCache.prototype.count = function() {
let count = 0;
for (const key in this.cache) {
  if (this.cache[key].timer) {
    count++;
  }
}
return count;
};

TimeLimitedCache.prototype.remove = function(key) {
delete this.cache[key];
};

const cache = new TimeLimitedCache();

// setTimeout(() => {
//   const val = cache.set(1, 42, 50);
//   console.log('key exists? ', val); // false
// }, 0);
// setTimeout(() => {
//   const val = cache.set(1, 50, 100);
//   console.log('key exists? ', val); // true
// }, 40);
// setTimeout(() => {
//   const val = cache.get(1);
//   console.log('val ', val); // 50
// }, 50);
// setTimeout(() => {
//   const val = cache.get(1);
//   console.log('val ', val); // 50
// }, 120);
// setTimeout(() => {
//   const val = cache.get(1);
//   console.log('val ', val); // -1
// }, 200);
// setTimeout(() => {
//   const count = cache.count();
//   console.log('count ', count); // 0
// }, 250);

setTimeout(() => {
  const val = cache.set(1, 2, 200);
  console.log('key exists? ', val); // false
}, 0);
setTimeout(() => {
  const val = cache.set(10, 20, 400);
  console.log('key exists? ', val); // false
}, 0);
setTimeout(() => {
  const count = cache.count();
  console.log('count ', count); // 2
}, 50);
setTimeout(() => {
  const count = cache.count();
  console.log('count ', count); // 2
}, 100);
setTimeout(() => {
  const count = cache.count();
  console.log('count ', count); // 1
}, 300);
setTimeout(() => {
  const count = cache.count();
  console.log('count ', count); // 0
}, 500);
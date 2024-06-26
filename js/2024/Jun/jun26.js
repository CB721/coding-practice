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
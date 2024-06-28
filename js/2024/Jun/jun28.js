// check if object is instance of class
// Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

// There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

/**
 * @param {any} obj
 * @param {Class} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
  // if (obj === null) {
  //   return classFunction === null;
  // } else if (obj === undefined) {
  //   return classFunction === undefined;
  // } else if (typeof obj === 'bigint') {
  //   return classFunction === BigInt;
  // } else if (typeof obj === 'symbol') {
  //   return classFunction === Symbol;
  // } else if (typeof obj === 'object' || typeof obj === 'function') {
  //   return classFunction.prototype.isPrototypeOf(obj);
  // } else {
  //   return typeof obj === typeof classFunction();
  // }

  while (obj != null) {
    if (obj.constructor === classFunction) {
      return true;
    }

    obj = Object.getPrototypeOf(obj);
  }

  return false;
};

// console.log(checkIfInstanceOf(new Date(), Date)) // true;
// class Animal { }; class Dog extends Animal { };
// console.log(checkIfInstanceOf(new Dog(), Animal)) // true;
// console.log(checkIfInstanceOf(Date, Date)) // false;
// console.log(checkIfInstanceOf(5, Number)) // true;
// console.log(checkIfInstanceOf(undefined, null)) // false;
// console.log(checkIfInstanceOf(undefined, undefined)) // true;
// console.log(checkIfInstanceOf(5n, BigInt)) // true;

// Is object empty
// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  // O(n) solution because it has to check the entire object/array
  // return Object.keys(obj).length === 0;

  // O(1) solution because it always checks only the first element
  for (const x in obj) {
    return false;
  }
  return true;
};

// console.log(isEmpty({ "x": 5, "y": 42 })) // false
// console.log(isEmpty({})) // true
// console.log(isEmpty([null, false, 0])) // false

// Array prototype last
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this.pop();
};

// console.log([null, {}, 3].last()) // 3
// console.log([1, 2, 3, 4].last()) // 4
// console.log([1, 2, 3, null].last()) // null
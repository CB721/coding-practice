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

console.log(checkIfInstanceOf(new Date(), Date)) // true;
class Animal { }; class Dog extends Animal { };
console.log(checkIfInstanceOf(new Dog(), Animal)) // true;
console.log(checkIfInstanceOf(Date, Date)) // false;
console.log(checkIfInstanceOf(5, Number)) // true;
console.log(checkIfInstanceOf(undefined, null)) // false;
console.log(checkIfInstanceOf(undefined, undefined)) // true;
console.log(checkIfInstanceOf(5n, BigInt)) // true;
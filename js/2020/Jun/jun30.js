// Write a function that takes in an array of numbers and outputs the maximum number.

function maxNum(arr) {
    return arr.reduce((acc, cur) => cur > acc ? cur : acc);
}


console.log(maxNum([ 3, 6, 4, 5, 2, 1 ])); // 6
console.log(maxNum([ 9023, 6234, 124, 2145, 62, -121 ])); // 9023
console.log(maxNum([ -9023, 34, 124, -45, 602, 21 ])); // 602
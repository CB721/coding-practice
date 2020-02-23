// the fibonacci series is an ordering of numbers where each number is the sum of the proceeding two
// print out the n-th entry in the fibonacci series

// function fib(n) {
//     // check for positive number
//     if (n < 0) {
//         return "n must be a positive number";
//     }
//     // if n is 0 or 1, return n
//     if (n === 0 || n === 1) {
//         return n;
//     }
//     // array will always have 0 and 1 in it
//     const arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         // add last two elements in array together and add to array
//         arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
//     }
//     // return index of arr n
//     return arr[n];
// }
// console.log(fib(4));
// // 3
// console.log(fib(9));
// // 34
// console.log(fib(-4));
// // "n must be a positive number"

function fib(n) {
    if (n < 2) {
        return n;
    }
    return (fib(n -1) + fib(n -2));
}

console.log(fib(4));
// 3
console.log(fib(9));
// 34
console.log(fib(0));
// 0
// the fibonacci series is an ordering of numbers where each number is the sum of the proceeding two
// print out the n-th entry in the fibonacci series

// linear runtime solution
// O(n)
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

// exponential runtime solution
// 2^n, increasing by one, ~ doubles the amount of time to complete
// function fib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return (fib(n -1) + fib(n -2));
// }

// console.log(fib(4));
// // 3
// console.log(fib(9));
// // 34
// console.log(fib(0));
// // 0

// memoization - store the arguments of each function call along with the result
// if the function is called again with the same arguments, return the precomputed result rather than run the function again

// pass in a function and return a faster version of said function
function memoize(fn) {
    // declare storage area
    // store previous arguments and results
    const cache = {};
    // unknown how many arguments will be passed into function
    return function (...args) {
        // check if this function has been called with this set of arguments before
        if (cache[args]) {
            return cache[args];
            // if not, that means the function has not been called with this set of arguments before
        } else {
            // call original function aka 'slowFib' and save result to a variable
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
            const result = fn.apply(this, args);
            // create key value pair of result to cache object
            cache[args] = result;
            return result;
        }
    }
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }
    return (slowFib(n - 1) + slowFib(n - 2));
}

const fib = memoize(slowFib)

console.log(fib(4));
// 3
console.log(fib(9));
// 34
console.log(fib(0));
// 0

const fibonacci = n => {
    return Array.from({ length: n }).reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
    );
}

console.log(fibonacci(6)); // [ 0, 1, 1, 2, 3, 5 ]
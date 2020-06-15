// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// n cannot be infinity, negative infinity, not a number, a decimal number or a boolean
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.

function prefill(n, v) {
    let fillNum = parseInt(n);
    if (n === Infinity || n === -Infinity || n === NaN || n % 1 !== 0 || n < 0 || typeof (n) === "boolean") {
        throw TypeError(n + " is invalid");
    } else if (Number.isInteger(fillNum)) {
        return Array.from(Array(+n), x => v);
    } else if (v.length < 1) {
        return [undefined]
    } else if (n === 0) {
        return [];
    }
}

// console.log(prefill(3, 1));
// // [1, 1, 1]
// console.log(prefill(2, "abc"));
// // ["abc", "abc"]
// console.log(prefill("3", prefill(2, '2d')));
// // [[2d, 2d], [2d, 2d], [2d, 2d]]
// console.log(prefill("xyz", 1));
// // throws TypeError with message "xyz is invalid"

// Write a programme that can take any number of horses as its only argument and returns the total number of different combinations of competitors winning gold silver and bronze.

function horses(n) {
    if (n % 1 !== 0 || n === NaN) {
        return undefined;
    }
    if (n <= 3) {
        return n;
    }
    let combinations = 0;
    for (let i = 0; i <= n; i++) {
        // for each number, each other number can have two positions
        for (let j = 0; j < n; i++) {
            combinations += j*n;
        }
    }
    return combinations;
    // return n * (n - 1);
}

console.log(horses(15));
// 2730
// console.log(horses(1));
// 1
// console.log(horses(2.5));
// undefined
// Write a function to check if every element in an array is an interger or float with no decimals
// returns true / True if every element in an array is an integer or a float with no decimals.
// returns true / True if array is empty.
// returns false / False for every other input.

function isIntArray(arr) {
    let isArray = true;
    if (!arr) {
        isArray = false;
    } else if (arr.length) {
        for (let i = 0; i < arr.length; i++) {
            if (!Number.isInteger(arr[i]) || isNaN(arr[i])) {
                isArray = false;
                break;
            }
        }
    }
    return isArray;
}

console.log(isIntArray([]));
// true
console.log(isIntArray([1, 2.2, 3, 4]));
// true
console.log(isIntArray([1, 2, 3, 4]));
// true
console.log(isIntArray([1, 2, 3, NaN]));
// false
// Given an unsorted array of integers, find if the element k is present or not
// it must return "Yes" or "No" if the element is present or not

function findNumber(arr, k) {
    return arr.indexOf(k) > -1 ? "Yes" : "No";
}

// console.log(findNumber([1, 34, 2, 45], 2)) // Yes
// console.log(findNumber([1, 34, 2, 45], 5)) // No

// Given two numbers l and r, print all of the odd numbers between them (inclusive)
// l is the left part of the range
// r is the right part of the range
// it must return an array of all odd numbers

function oddNumbers(l, r) {
    const outArr = [];
    for (let i = l; i <= r; i++) {
        if (i % 2 > 0) outArr.push(i);
    }
    return outArr;
}

console.log(oddNumbers(3, 14)) // [ 3, 5, 7, 9, 11, 13 ]
console.log(oddNumbers(22, 77)) // [ 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77 ]
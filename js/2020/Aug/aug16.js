// Given an unsorted array of integers, find if the element k is present or not
// it must return "Yes" or "No" if the element is present or not

function findNumber(arr, k) {
    return arr.indexOf(k) > -1 ? "Yes" : "No";
}

console.log(findNumber([1, 34, 2, 45], 2)) // Yes
console.log(findNumber([1, 34, 2, 45], 5)) // No
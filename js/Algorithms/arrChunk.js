// given an array and chunk size, dived the array into many subarrays where each subarray is of length size

function chunk(arr, size) {
    const outArr = [];
    for (let i = 0; i < arr.length; i++) {
        const last = outArr[outArr.length - 1];
        if (!last || last.length === size) {
            outArr.push([arr[i]]);
        } else {
            last.push(arr[i]);
        }
    }
    return outArr;
}

console.log(chunk([1, 2, 3, 4], 2));
// [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// [[1, 2, 3], [4, 5, 6], [7, 8]]
console.log(chunk([1, 2, 3, 4, 5], 4));
// [[1, 2, 3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 10));
// [[1, 2, 3, 4, 5]]
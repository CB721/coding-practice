// quick sort

quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const [pivotVal, ...otherVals] = arr;
    const left = [];
    const right = [];
    otherVals.forEach(element => {
        element < pivotVal ? left.push(element) : right.push(element);
    });
    return quickSort(left).concat(pivotVal).concat(quickSort(right));
}

// test cases
console.log(quickSort([34, 1, 3, -803, 3482, 234, 456, 325, 100000, 32, 3, 34]));
// [ -803, 1, 3, 3, 32, 34, 34, 234, 325, 456, 3482, 100000 ]
console.log(quickSort([0, 323, -1, -1, -1, 3, -3, 0, 322, 234, 423, 555]));
// [ -3, -1, -1, -1, 0, 0, 3, 234, 322, 323, 423, 555 ]
console.log(quickSort([3, 3, 4]));
// [ 3, 3, 4 ]
console.log(quickSort([3]));
// [ 3 ]
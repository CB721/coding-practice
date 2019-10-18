// Find all numbers that occur more than once in an array of integers.  Return "no match" if none occur more than once

duplicateFinder = (arr) => {
    const sortedArr = arr.map(num => {
        return {
            count: 1,
            num: num
        }
    })
        .reduce((a, b) => {
            a[b.num] = (a[b.num] || 0) + b.count
            return a
        }, {});

    const dups = Object.keys(sortedArr).filter((a) => sortedArr[a] > 1);
    if (dups.length > 0) {
        return dups.join(", ");
    } else {
        return "no match"
    }
}

// console.log(duplicateFinder([3, 7, 5, 2, 3, 4, 7, 10, 2345, 5324, 2345]));
// // 3, 7, 2345
// console.log(duplicateFinder([-1, -4124, -1, 1, 8, 3, 3, 1, 0]));
// // -1, 1, 3
// console.log(duplicateFinder([0, -34, 34, 913]));
// // no match
// console.log(duplicateFinder([3, 33, 333, 12341234, 123423, 78 - 3]));
// // no match
// console.log(duplicateFinder(12345678, 2345, 67, -2341, 12345678, 47, 67));
// // 12345678, 67

// bubble sort
bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+ 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([1, 3, 2, 400, 6]));
// 1, 2, 3, 6, 400
console.log(bubbleSort([14, 33, 27, 15, 10, 101]));
// 10, 14, 15, 27, 33, 101
console.log(bubbleSort([1, 3, 777, 3, 767, 0, 0]));
// 0, 0, 1, 3, 3, 767, 777
console.log(bubbleSort([5, 43, -3, -5, 7, -1]));
// -3, -5, -1, 5, 7, 43
console.log(bubbleSort([0, 0, 100, 100000, 1001]));
// 0, 0, 100, 1001, 100000
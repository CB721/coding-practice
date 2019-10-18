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

console.log(duplicateFinder([3, 7, 5, 2, 3, 4, 7, 10, 2345, 5324, 2345]));
// 3, 7, 2345
console.log(duplicateFinder([-1, -4124, -1, 1, 8, 3, 3, 1, 0]));
// -1, 1, 3
console.log(duplicateFinder([0, -34, 34, 913]));
// no match
console.log(duplicateFinder([3, 33, 333, 12341234, 123423, 78 - 3]));
// no match
console.log(duplicateFinder(12345678, 2345, 67, -2341, 12345678, 47, 67));
// 12345678, 67
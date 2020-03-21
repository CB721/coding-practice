function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }
    return [...results, ...left, ...right];
}
// console.log(merge([-30, 22], [0, 97]));
// [ -30, 0, 22, 97 ]
console.log(mergeSort([45, -23, 4, 0, 22, -32, 13]));
// [ -32, -23, 0, 4, 13, 22, 45 ]
// write a function which will receive an array of integers
// it will also receive an integer
// return an array of integers
// look for two indices that equal the other integer
// return the indices
// return null if no match
// [1,4,2,2],6
// [1, 2]

function findMatch(arr, num) {
    // output array
    const outArr = [];
    // create a cache
    const cache = {}; // {1: 0, 4: 1, 2: 2, 2: 3}
    // loop over the array // [1, 4, 2, 2]
    for (let i = 0; i < arr.length; i++) {
        if (!cache[arr[i]]) {
            cache[arr[i]] = i;
        }
        // on each index of the array
        let initialNum = arr[i];
        let targetNum = num - initialNum;
        // check the cache for the matching number
        if (cache[targetNum]) {
            outArr.push(cache[targetNum]);
            outArr.push(i);
            break;
        }
    }
    // if there is nothing in the array, return null
    if (outArr.length === 2) {
        return outArr;
    }
    return null;
}

console.log(findMatch([1, 4, 2, 2], 6)) // [1,2]
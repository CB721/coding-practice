// radix sort is typically used for sorting integers
// time complexity ~ O(n * k)
// space complexity ~ O(n + k);

function radixSort(arr) {
    // create an array of arrays to put numbers into slots
    const arrOfArrs = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    // get the count of how many characters are in the highest number
    let iterationCount = 1;
    arr.forEach(number => {
        // convert each number into a string
        let numStr = number.toString();
        // compare the length of that string to the current iteration count
        if (numStr.length > iterationCount) {
            // if it is greater, update the iteration count to that length
            iterationCount = numStr.length;
        }
        // look at the last character
        // this will be the index it will be pushed into
        let arrIndex = numStr[numStr.length - 1];
        // add that number to the corresponding array of arrays
        arrOfArrs[arrIndex].push(parseInt(numStr));
    });
    // output array
    let outArr = [];
    // loop for the remainder of the iteration count
    // since the numbers have already been placed in their first slot
    // we can start on the second iteration
    for (let i = 1; i <= iterationCount; i++) {
        // empty output array
        outArr = [];
        // loop over the array of arrays
        arrOfArrs.forEach((slot, index) => {
            // check if there is anything in the current slot
            if (slot.length) {
                // remove all elements from that slot
                let removedSlot = arrOfArrs[index].splice(0);
                // push contents into output array
                outArr.push(...removedSlot);
            }
        });
        // loop over output array
        outArr.forEach(num => {
            // convert number to a string
            let numStr = num.toString();
            // get the index based on the current value of i
            // if it is undefined, add it to the zero index
            let arrIndex = numStr[numStr.length - 1 - i] || 0;
            // push number into array of arrays
            arrOfArrs[arrIndex].push(parseInt(num));
        });
    }
    return outArr;
}

console.log(radixSort([397, 12, 34, 4, 11, 414])) // 4, 11, 12, 34, 398, 414
console.log(radixSort([1970, 1, 0, 5342])) // 4, 11, 12, 34, 398, 414
console.log(radixSort([1970, 1, 0, 5342])) // 4, 11, 12, 34, 398, 414
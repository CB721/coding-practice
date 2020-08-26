// reverse array without using .reverse array method

let arr = [1, 2, 3, 4, 5]

let halfPoint = Map.floor(arr.length / 2); // 2

for (let i = 0; i < halfPoint; i++) {
    let tempNumOne = arr[i]; // 1 // 2
    let tempNumTwo = arr[arr.length - 1 - i]; // 5 // 4

    arr[i] = tempNumTwo; // 5 // 4
    arr[arr.length - 1 - i] = tempNumOne; // 1 // 2
}

// [5, 2, 3, 4, 1]
// [5, 4, 3, 2, 1]

// array of ints
// length is 9
// numbers between 1 - 10
// one number is missing

let arrTwo = [10, 7, 3, 6, 1, 2, 8, 9, 4];

// sort the array

for (let i = 0; i < arrTwo.length; i++) {
    let currValue = arrTwo[i];
    // compare the current value with the other indices
    // if it is less than
    for (let j = 1; j < arrTwo.length; j++) {
        if (currValue > arrTwo[j]) {
            let temp = arrTwo[j];
            arrTwo[j] = currValue;
            arrTwo[i] = temp;
        }
    }
}

// sorted array
// remove duplicates
// return how many unique values

let arrThree = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3];


let uniqueCount = 0;
for (let i = 0; i < arrThree.length; i++) {
    
}

// obj
    // {0: 1}
    // {0: 1}

// array
    // [0,0,1,1,1,2,2,3,3,3]

// count
    // 1


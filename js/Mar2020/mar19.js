// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
    let outStr = "";
    for (let i = 0; i < names.length; i++) {
        if (i === 0) {
            outStr = names[i].name;
        } else if (i === names.length - 1) {
            outStr += ` & ${names[i].name}`;
        } else {
            outStr += `, ${names[i].name}`;
        }
    }
    return outStr;
}

// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]));
// // 'Bart, Lisa, Maggie, Homer & Marge'
// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]));
// // 'Bart, Lisa & Maggie'
// console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]));
// // 'Bart & Lisa'
// console.log(list([{ name: 'Bart' }]));
// // 'Bart'
// console.log(list([]));
// // ''

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

function arrayDiff(a, b) {
    const outArr = [];
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            outArr.push(a[i]);
        }
    }
    return outArr;
}

// console.log(arrayDiff([], [4, 5]));
// // []
// console.log(arrayDiff([3, 4], [3]));
// // [4]
// console.log(arrayDiff([1, 8, 2], []));
// // [1, 8, 2]

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
    let numArr = n.toString().split("");
    let result = 10;
    while (result > 9) {
        let temp = 0;
        for (let i = 0; i < numArr.length; i++) {
            temp += parseInt(numArr[i]);
        }
        if (temp < 10) {
            result = temp;
        } else {
            numArr = temp.toString().split("");
        }
    }
    return result;
}

console.log(digital_root(16));
// 7
console.log(digital_root(456));
// 6
console.log(digital_root(942));
// 6
console.log(digital_root(132189));
// 6
// repeatLetter = (string) => {
//     for (let i = 0; i < string.length; i++) {
//         const letter = string.charAt(i);
//         if (string.indexOf(letter) == i && string.indexOf(letter, i + 1) == -1) {
//             return string.indexOf(letter);
//         }
//     }
// }

// console.log(repeatLetter("leetcode"));
// console.log(repeatLetter("loveleetcode"));

// findDifference = (str, otherStr) => {
//     const string = str + otherStr;
//     for (let i = 0; i < string.length; i++) {
//         const letter = string.charAt(i);
//         if (string.indexOf(letter) == i && string.indexOf(letter, i + 1) == -1) {
//             // return letter;
//             return otherStr.indexOf(letter);
//         }
//     }
// }

// console.log(findDifference("hdhsi", "hskihd"));


// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// upArray = (arr) => {
//     if (arr.length > 0) {
//         const completeArr = [];
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] < 0) {
//                 return null;
//             } else {
//                 completeArr.push(arr[j]);
//             }
//         }
//         const arrNum = completeArr.join("");
//         const newNumber = parseInt(arrNum) + 1;
//         const numbStr = newNumber.toString();
//         const newArr = [];
//         for (let i = 0; i < numbStr.length; i++) {
//             const makeNumber = parseInt(numbStr[i]);
//             if (makeNumber < 0) {
//                 return null;
//             } else {
//                 newArr.push(makeNumber);
//             }
//         }
//         return newArr;
//     } else {
//         return null;
//     }
// }

// console.log(upArray([2, 3, 9]));
// console.log(upArray([1, -9]));


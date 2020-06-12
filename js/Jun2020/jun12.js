// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   50 + 2 * 100 = 250
//  1 1 1 3 1   1000 + 100 = 1100
//  2 4 4 5 4   400 + 50 = 450
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

function score(dice) {
    // game total points
    let gameTotal = 0;
    // list of indexes that have already been viewed
    const viewedIndex = [];
    for (let i = 0; i < 5; i++) {
        // console.log(dice[i], viewedIndex.indexOf(dice[i]));
        // check if the number has already been counted
        if (viewedIndex.indexOf(dice[i]) < 0) {
            // keep track of how many times the number appears
            let numApp = 1;
            switch (dice[i]) {
                case 1:
                    // if the next two numbers are also one
                    if (dice[i + 1] === 1 && dice[i + 2] === 1) {
                        // add the game total
                        gameTotal += 1000;
                        // set the increment to the third number
                        i += 2;
                    } else {
                        // if the next two numbers aren't one, add to the game total
                        gameTotal += 100;
                    }
                    break;
                case 2:
                    // add number to viewed index list
                    viewedIndex.push(dice[i]);
                    // iterate over the rest
                    for (let j = i + 1; j < 5; j++) {
                        if (dice[j] === 2) {
                            numApp++;
                        }
                    }
                    // if there are at least 3 occurances of the numbers
                    if (numApp >= 3) {
                        // add to game total
                        gameTotal += 200;
                    }
                    break;
                case 3:
                    // add number to viewed index list
                    viewedIndex.push(dice[i]);
                    // iterate over the rest
                    for (let j = i + 1; j < 5; j++) {
                        if (dice[j] === 3) {
                            numApp++;
                        }
                    }
                    // if there are at least 3 occurances of the numbers
                    if (numApp >= 3) {
                        // add to game total
                        gameTotal += 300;
                    }
                    break;
                case 4:
                    // add number to viewed index list
                    viewedIndex.push(dice[i]);
                    // iterate over the rest
                    for (let j = i + 1; j < 5; j++) {
                        if (dice[j] === 4) {
                            numApp++;
                        }
                    }
                    // if there are at least 3 occurances of the numbers
                    if (numApp >= 3) {
                        // add to game total
                        gameTotal += 400;
                    }
                    break;
                case 5:
                    // if the next two numbers are also five
                    if (dice[i + 1] === 5 && dice[i + 2] === 5) {
                        // add the game total
                        gameTotal += 500;
                        // set the increment to the third number
                        i += 2;
                    } else {
                        // if the next two numbers aren't five, add to the game total
                        gameTotal += 50;
                    }
                    break;
                case 6:
                    // add number to viewed index list
                    viewedIndex.push(dice[i]);
                    // iterate over the rest
                    for (let j = i + 1; j < 5; j++) {
                        if (dice[j] === 6) {
                            numApp++;
                        }
                    }
                    // if there are at least 3 occurances of the numbers
                    if (numApp >= 3) {
                        // add to game total
                        gameTotal += 600;
                    }
                    break;
                default:
                    return;
            }
        }
    }
    return gameTotal;
}

// console.log(score([2, 3, 4, 6, 2])); // 0
// console.log(score([4, 4, 4, 3, 3])); // 400
// console.log(score([2, 4, 4, 5, 4])); // 450
// console.log(score([1, 1, 1, 5, 1])); // 1150
// console.log(score([5, 1, 3, 4, 1])); // 250
// console.log(score([1, 1, 1, 3, 1])); // 1100
// console.log(score([2, 4, 4, 5, 4])); // 450

// given an array of timestamps, return the total time
// expected output: '4 hours, 34 minutes and 0 seconds'
function totalTime(timeStamps) {
    // create an array of seconds
    const seconds = timeStamps.map(time => {
        // split into minutes and seconds
        const [mins, secs] = time.split(":")
            // convert minutes and seconds into numbers
            .map(parseFloat);
        // there are 60 seconds in each minute
        return (mins * 60) + secs;
    })
        // reduce array of seconds into one number
        .reduce((total, secs) => total + secs);
    // convert seconds into hours, minutes and seconds
    // keep track of how many seconds are left
    let secondsLeft = seconds;
    // there are are 3600 seconds in an hour
    const hours = Math.floor(secondsLeft / 3600);
    // update the seconds left to be the remainder after the hours are subtracted
    secondsLeft = secondsLeft % 3600;
    // there are 60 seconds in a minutes
    const minutes = Math.floor(secondsLeft / 60);
    // update the seconds left to be the remainder after the minutes are subtracted
    secondsLeft = secondsLeft % 60;
    return `${hours} hours, ${minutes} minutes and ${secondsLeft} seconds`;
}

// console.log(totalTime(["2:15", "4:23", "7:01", "1:56", "2:32", "3:12", "5:01"])); // 0 hours, 26 minutes and 20 seconds
// console.log(totalTime(["12:25", "2:38", "1:59", "10:36", "8:44", "8:12", "24:52"])); // 1 hours, 9 minutes and 26 seconds
// console.log(totalTime(["2:15", "4:23", "7:01", "1:56", "2:32", "3:12", "5:01", "12:25", "2:38", "1:59", "10:36", "8:44", "8:12", "24:52", "23:34", "12:03"])); // 2 hours, 11 minutes and 23 seconds

// given an array of integers and chunk size, divide the array into many subarrays where each subarray is the length of the chunk size
// if no chunk size is provided, return each integer in the array in its own sub array
function chunk(arr, size = 1) {
    const outArr = [];
    for (let i = 0; i < arr.length; i += size) {
        let subArray = [];
        for (let j = i; j < i + size; j++) {
            if (arr[j]) {
                subArray.push(arr[j]);
            }
        }
        outArr.push(subArray);
    }
    return outArr;
}

console.log(chunk([3, 2, 5, 10, 15, 2, 4, 8, 9], 2));
// [ [ 3, 2 ], [ 5, 10 ], [ 15, 2 ], [ 4, 8 ], [ 9 ] ]
console.log(chunk([3, 2, 5, 10, 15, 2, 4, 8, 9], 10));
// [[3, 2, 5, 10, 15, 2, 4, 8, 9]]
console.log(chunk([3, 2, 5, 10, 15, 2, 4, 8, 9]));
// [[3], [2], [5], [10], [15], [2], [4], [8], [9]]

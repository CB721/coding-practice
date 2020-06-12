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

console.log(score([2, 3, 4, 6, 2])); // 0
console.log(score([4, 4, 4, 3, 3])); // 400
console.log(score([2, 4, 4, 5, 4])); // 450
console.log(score([1, 1, 1, 5, 1])); // 1150
console.log(score([5, 1, 3, 4, 1])); // 250
console.log(score([1, 1, 1, 3, 1])); // 1100
console.log(score([2, 4, 4, 5, 4])); // 450
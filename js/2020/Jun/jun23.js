// You and your friends have been battling it out with your Rock 'Em, Sock 'Em robots, but things have gotten a little boring. You've each decided to add some amazing new features to your robot and automate them to battle to the death.

// Each robot will be represented by an object. You will be given two robot objects, and an object of battle tactics and how much damage they produce. Each robot will have a name, hit points, speed, and then a list of battle tacitcs they are to perform in order. Whichever robot has the best speed, will attack first with one battle tactic.

// Rules

// A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
// Robots alternate turns attacking. Tactics are used in order.
// A fight is over when a robot has 0 or less health or both robots have run out of tactics.
// A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
// If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
// If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw."

// function fight(robot1, robot2, tactics) {
//     let currPlayer = robot1.speed >= robot2.speed ? 1 : 2;
//     let winner = "";
//     let robot1Health = robot1.health;
//     let robot2Health = robot2.health;
//     let length = robot1.tactics.length > 0 ? robot1.tactics.length : robot2.tactics.length;
//     for (let i = 0; i < length; i++) {
//         if (currPlayer === 1) {
//             if (robot1.tactics && robot1.tactics[i]) {
//                 robot2Health -= tactics[robot1.tactics[i]];
//             }
//             if (robot2Health <= 0) {
//                 winner = robot1.name;
//                 break;
//             } else if(robot2.tactics && robot2.tactics[i]) {
//                 robot1Health -= tactics[robot2.tactics[i]];
//             }
//             if (robot1Health <= 0) {
//                 winner = robot2.name;
//                 break;
//             }
//             currPlayer = 2;
//         } else {
//             if (robot2.tactics && robot2.tactics[i]) {
//                 robot1Health -= tactics[robot2.tactics[i]];
//             }
//             if (robot1Health <= 0) {
//                 winner = robot2.name;
//                 break;
//             } else if(robot1.tactics && robot1.tactics[i]) {
//                 robot2Health -= tactics[robot1.tactics[i]];
//             }
//             if (robot2Health <= 0) {
//                 winner = robot1.name;
//                 break;
//             }
//             currPlayer = 1;
//         }
//     }
//     if (robot1Health > robot2Health) winner = robot1.name;
//     if (robot2Health > robot1Health) winner = robot2.name;
//     return winner ? `${winner} has won the fight.` : "The fight was a draw.";
// }
function fight(robot1, robot2, tactics) {
    // if the first robot's speed is less than the second
    if (robot1.speed < robot2.speed) {
        // switch their values
        [robot1, robot2] = [robot2, robot1];
    }
    // keep iterating until tactics from both robots has been used or a robot has been defeated
    while (robot1.tactics.length || robot2.tactics.length) {
        // since the order of the robots has been switched, we can always start on the first robot

        // if the first robot has any attacks left
        if (robot1.tactics.length) {
            // subtract from the second robots health and remove from first robots' tactics array
            robot2.health -= tactics[robot1.tactics.shift()];
        }

        // if the second robot doesn't have any health left, exit the loop
        if (robot2.health <= 0) break;

        // if the second robot has any attacks left
        if (robot2.tactics.length) {
            // subtract from the first robots health and remove from second robots' tactics array
            robot1.health -= tactics[robot2.tactics.shift()];
        }

        // if the second robot doesn't have any health left, exit the loop
        if (robot1.health <= 0) break;
    }
    let winner = ""
    if (robot1.health > robot2.health) winner = robot1.name;
    if (robot2.health > robot1.health) winner = robot2.name;
    return winner ? `${winner} has won the fight.` : "The fight was a draw.";
}

let robot1 = { "name": "Rocky", "health": 100, "speed": 20, "tactics": ["punch", "punch", "laser", "missile"] };
let robot2 = { "name": "Missile Bob", "health": 100, "speed": 21, "tactics": ["missile", "missile", "missile", "missile"] };
let tactics = { "punch": 20, "laser": 30, "missile": 35 };
// console.log(fight(robot1, robot2, tactics)); // "Missile Bob has won the fight."

robot1 = { "name": "Rocky", "health": 200, "speed": 20, "tactics": ["punch", "punch", "laser", "missile"] };
robot2 = { "name": "Missile Bob", "health": 100, "speed": 21, "tactics": ["missile", "missile", "missile", "missile"] };
tactics = { "punch": 20, "laser": 30, "missile": 35 };
// console.log(fight(robot1, robot2, tactics)); // "Rocky has won the fight."

robot1 = { "name": "Rocky", "health": 200, "speed": 15, "tactics": [] };
robot2 = { "name": "Missile Bob", "health": 100, "speed": 26, "tactics": ["missile", "missile", "missile", "missile"] };
tactics = { "punch": 20, "laser": 30, "missile": 35 };
// console.log(fight(robot1, robot2, tactics)); // "Missile Bob has won the fight."

robot1 = { "name": "Knuckles", "health": 200, "speed": 15, "tactics": ["punch", "punch", "missle", "missle"] };
robot2 = { "name": "Laser Wisp", "health": 100, "speed": 26, "tactics": ["laser", "laser", "laser", "laser"] };
tactics = { "punch": 20, "laser": 25, "missile": 30 };
// console.log(fight(robot1, robot2, tactics)); // "The fight was a draw."



// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = function (nums, target) {
    const output = [];
    // iterate over list of numbers
    for (let i = 0; i < nums.length; i++) {
        // subtract the target from the current number
        // get the index
        let num2Index = nums.indexOf(target - nums[i]);
        // if the element exists and it is not the current index
        if (num2Index >= 0 && num2Index !== i) {
            // push both indicies to the output
            output.push(i, num2Index);
            // exit the loop
            break;
        }
    }
    return output;
};

// console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]
// console.log(twoSum([3,2,4], 6)) // [1, 2]



// Given a 32-bit signed integer, reverse digits of an integer.

function reverse(num) {
    const isNegative = num < 0 ? true : false;
    num = parseInt(Math.abs(num).toString().split("").reverse().join(""));
    if (num > 0x7FFFFFFF) return 0;
    if (isNegative) num *= -1;
    return num;
}
// console.log(reverse(123)) // 321
// console.log(reverse(-123)) // -321
// console.log(reverse(120)) // 21
// console.log(reverse(2147483650)) // 563847412
// console.log(reverse(1534236469)) // 0



// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
// Coud you solve it without converting the integer to a string?

function isPalindrome(x) {
    // if the number is negative, it is not a palindrome
    if (x < 0) return false;
    // create a reference to the reversed number
    let reversedNum = 0;
    // create a reference to the number passed in
    // we will update this number as we create the reversed number
    let currNum = x;

    while (currNum > 0) {
        // get the last digit by getting the remainder of ten from the current number
        let lastDigit = currNum % 10;
        // move the reversed number over by one and add the new last digit to the end
        reversedNum = (reversedNum * 10) + lastDigit;
        // set the current number to be the original without the last digit
        // divide by 10 and round down
        currNum = Math.floor(currNum / 10);
    }
    return x === reversedNum;
}

// console.log(isPalindrome(121)) // true
// console.log(isPalindrome(-121)) // false


// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

function romanToInt(s) {
    let outputValue = 0;
    for (let i = 0; i < s.length; i++) {
        let tempI = i + 1;
        switch (s[i]) {
            case 'I':
                let iCount = 1;
                while (tempI < s.length && tempI < i + 4) {
                    if (s[tempI] === 'I') {
                        iCount++;
                        i = tempI;
                    }
                    else if (s[tempI] === 'V') {
                        iCount -= 1;
                        outputValue += 4;
                        i = tempI;
                        break;
                    }
                    else if (s[tempI] === 'X') {
                        iCount -= 1;
                        outputValue += 9;
                        i = tempI;
                        break;
                    } else {
                        break;
                    }
                    tempI++;
                }
                outputValue += iCount;
                break;
            case 'X':
                let xCount = 1;
                while (tempI < s.length && tempI < i + 4) {
                    if (s[tempI] === 'X') {
                        xCount++;
                        i = tempI;
                    } else if (s[tempI] === 'L') {
                        xCount -= 1;
                        outputValue += 40;
                        i = tempI;
                        break;
                    } else if (s[tempI] === 'C') {
                        xCount -= 1;
                        outputValue += 90;
                        i = tempI;
                        break;
                    } else {
                        break;
                    }
                    tempI++;
                }
                outputValue += (xCount * 10);
                break;
            case 'V':
                outputValue += 5;
                break;
            case 'L':
                outputValue += 50;
                break;
            case 'C':
                if (s[tempI] === 'D') {
                    outputValue += 400;
                    i = tempI;
                }
                else if (s[tempI] === 'M') {
                    outputValue += 900;
                    i = tempI;
                }
                else outputValue += 100;
                break;
            case 'M':
                outputValue += 1000;
                break;
            case 'D':
                outputValue += 500;
                break;
            default:
                return;
        }
    }
    return outputValue;
}

console.log(romanToInt('III')) // 3
console.log(romanToInt('IV')) // 4
console.log(romanToInt('IX')) // 9
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
console.log(romanToInt('DCXXI')) // 621
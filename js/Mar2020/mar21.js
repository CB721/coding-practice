// implement an algorithm to determine if a string has all unique characters
// case matters
// return true or false

function uniqueChars(str) {
    const splitStr = str.split("");
    const charObj = {};
    for (let i = 0; i < splitStr.length; i++) {
        if (charObj[splitStr[i]]) {
            return false;
        } else {
            charObj[splitStr[i]] = 1
        }
    }
    return true;
}

// console.log(uniqueChars("asdf"));
// // true
// console.log(uniqueChars("hjdklah"));
// // false
// console.log(uniqueChars("aA"));
// // true
// console.log(uniqueChars("nkMmka"));
// // false


// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot. Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each sub array has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
    let count = 0;
    for (let i = 0; i < ticket.length; i++) {
        let ticketArr = ticket[i][0].split("");
        for (let j = 0; j < ticketArr.length; j++) {
            if (ticketArr[j].charCodeAt(0) === ticket[i][1]) {
                count++;
                break;
            }
        }
    }
    if (count >= win) {
        return "Winner!";
    } else {
        return "Loser!";
    }
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
// 'Loser!'
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
// 'Winner!'
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));
// 'Loser!'
console.log(bingo([['IXIQ', 74], ['SDKEKT', 67], ['SHJQ', 71], ["MAGZB", 89], ["SMMDAOQ", 77]], 2));
// 'Loser!'
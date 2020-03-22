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
function bingo(ticket, win) {
    const winners = ticket.filter(item => {
        return item[0].includes(String.fromCharCode(item[1]));
    });
    return winners.length >= win ? "Winner" : "Loser";
}

// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2));
// // 'Loser!'
// console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1));
// // 'Winner!'
// console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3));
// // 'Loser!'
// console.log(bingo([['IXIQ', 74], ['SDKEKT', 67], ['SHJQ', 71], ["MAGZB", 89], ["SMMDAOQ", 77]], 2));
// // 'Loser!'


// URLify
// write a method to replace all spaces in a string with '%20'
// since this is a url, all characters should be lowercase
// you can assume the string has sufficient space at the end to hold additional characters
// you cannot use the replace method

function urlify(str) {
    const splitStr = str.toLowerCase().trim().split("");
    const url = splitStr.map(letter => {
        if (letter === " ") {
            letter = "%20";
        }
        return letter;
    });
    return url.join("");
}

console.log(urlify("Mr John Smith      "));
// mr%20john%20smith
console.log(urlify("jOhnny Appleseed"));
// johnny%20appleseed
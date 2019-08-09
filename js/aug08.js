// Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

function rgb(r, g, b) {
    // check for negative numbers
    if (r < 0) {
        r = 0;
    }
    if (g < 0) {
        g = 0;
    }
    if (b < 0) {
        b = 0;
    }
    // check for numbers above 255
    if (r > 255) {
        r = 255;
    }
    if (g > 255) {
        g = 255;
    }
    if (b > 255) {
        b = 255;
    }
    // convert to uppercase hexadecimal values
    var rStr = r.toString(16).toUpperCase();
    var gStr = g.toString(16).toUpperCase();
    var bStr = b.toString(16).toUpperCase();
    // if it only one number, add a zero
    if (rStr.length == 1) {
        rStr = "0" + rStr
    }
    if (gStr.length == 1) {
        gStr = "0" + gStr
    }
    if (bStr.length == 1) {
        bStr = "0" + bStr
    }
    return rStr + gStr + bStr;
}
// test cases
console.log(rgb(255, 255, 255));
// FFFFFF
console.log(rgb(255, 255, 300));
// FFFFFF
console.log(rgb(0, 0, -20));
// 000000
console.log(rgb(148, 0, 211));
// 9400D3

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
function pigIt(str) {
    let punctuation = "";
    const individualWords = str.split(" ");
    for (let i = 0; i < individualWords.length; i++) {
        if (individualWords[i].includes(" ")) {
            individualWords[i].splice();
        }
        if (individualWords[i].includes(".") || individualWords[i].includes("!") || individualWords[i].includes("?") ||  individualWords[i].includes(",") || individualWords[i].includes("-")) {
            punctuation = individualWords[i].slice(-1);
            individualWords[i] = individualWords[i].slice(0, -1);
        }
    }
    let firstLetter;
    let otherLetters;
    const strArr = [];
    individualWords.forEach(function (word) {
        if (word == " ") {
            word = "";
        }
        firstLetter = word.slice(0, 1);
        otherLetters = word.substr(1, Infinity);
        strArr.push(otherLetters + firstLetter + "ay")
    });
    return strArr.join(" ") + punctuation;
}

// test cases
console.log(pigIt('Pig latin is cool'));
// igPay atinlay siay oolcay
console.log(pigIt('This is my string'));
// hisTay siay ymay tringsay
console.log(pigIt('hElo0 WoRld !'));
// Elo0hay oRldWay !
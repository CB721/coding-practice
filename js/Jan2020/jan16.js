// Given a string, return the character that is most
// commonly used in the string.

maxChar = (str) => {
    // create empty object to push characters into
    const strObj = {}
    // iterate over string
    for (let i = 0; i < str.length; i++) {
        // if character is already in object, add one
        if (strObj[str[i]]) {
            strObj[str[i]] += 1;
            // otherwise, add to object
        } else {
            strObj[str[i]] = 1;
        }
    }
    // current highest character total
    let total = 0;
    // current highest character
    let maxChar = "";
    for (letter in strObj) {
        // if character total is greater than current total
        if (strObj[letter] > total) {
            // set total to larger total
            total = strObj[letter];
            // set max char to new character
            maxChar = letter
        }
    }
    return maxChar;
}

console.log(maxChar("abcccccccd"));
// c
console.log(maxChar("apple 1231111"));
// 1
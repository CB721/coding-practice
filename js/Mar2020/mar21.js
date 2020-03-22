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

console.log(uniqueChars("asdf"));
// true
console.log(uniqueChars("hjdklah"));
// false
console.log(uniqueChars("aA"));
// true
console.log(uniqueChars("nkMmka"));
// false
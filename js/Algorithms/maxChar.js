// given a string, return the character that is most commonly used in the string

function maxChar(str) {
    const charObj = {};
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        if (!charObj[strArr[i]]) {
            charObj[strArr[i]] = 1;
        } else {
            charObj[strArr[i]]++;
        }
    };
    let count = 0;
    let char = '';
    for (const letter in charObj) {
        if (charObj[letter] > count) {
            count = charObj[letter];
            char = letter;
        }
    }
    return char;
}

console.log(maxChar("aydjshyy uwywuhqyh"));
// 'y'
console.log(maxChar("dhaku32jd 8abxk2717sndm2"));
// '2'
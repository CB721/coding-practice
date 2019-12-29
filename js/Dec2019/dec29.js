// Your task is to add up letters to one letter.

// The function will be given a variable amount of arguments, each one being a letter to add.

// Notes:
// Letters will always be lowercase.
// Letters can overflow (see second to last example of the description)
// If no letters are given, the function should return 'z'

function addLetters(...letters) {
    if (!letters.length) {
        return "z";
    }
    if (letters.length === 1) {
        return letters[0];
    }
    let charCodes = 0;
    letters.forEach(letter => {
        charCodes += (letter.charCodeAt(0) % 97) + 1;
    });
    while (charCodes > 26) {
        charCodes -= 26;
    }
    return String.fromCharCode(charCodes + 96);
}

console.log(addLetters('a', 'b', 'c'));
// f
console.log(addLetters('a', 'b'));
// c
console.log(addLetters('z'));
// z
console.log(addLetters('z', 'a'));
// a
console.log(addLetters('y', 'c', 'b'));
// d
console.log(addLetters());
// z
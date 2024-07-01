// length of last word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
// consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // O(n) complexity solution because, at most, the method iterates over every character in the string only once.
  let len = 0;
  let hasStartedWord = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      len++;
      hasStartedWord = true;
    } else if (hasStartedWord) {
      break;
    }
  }

  return len;
};

// console.log(lengthOfLastWord("Hello World")) // 5
// console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
// console.log(lengthOfLastWord("luffy is still joyboy")) // 6

// String Reversal
// Given a string, return a new string with the reversed order of characters.
// Don't use 'reverse' built-in method

function reverse(str) {
  // O(n) complexity solution because, at most, the method iterates over every character in the string only once.
  let output = '';

  for (let i = str.length - 1; i >= 0; i--) {
    output += str[i];
  }

  return output;
}
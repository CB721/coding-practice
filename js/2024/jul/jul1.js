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
  let len = 0;
  let hasStartedWord = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      len++;
      hasStartedWord = true;
    } else if(hasStartedWord) {
      break;
    }
  }

  return len;
};

console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6
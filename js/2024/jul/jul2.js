// find index of first occurrence in a string

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // O(n*m) complexity because in the worst-case scenario, for each character in 'haystack', it could potentially check each character in 'needle'
  let index = -1;

  for (let i = 0; i < haystack.length; i++) {
    let j = i;
    let subStrIndex = 0;

    while (needle[subStrIndex] === haystack[j] && !!needle[subStrIndex]) {
      j++;
      subStrIndex++;
    }

    if (j - i === needle.length) {
      index = i;
      break;
    }
  }

  return index;
};

console.log(strStr('sadbutsad', 'sad')) // 0
console.log(strStr('leetcode', 'leeto')) // -1
console.log(strStr('cheese asdf hugs dfsdfs', 'f h')) // 10
console.log(strStr('a', 'a')) // 0
console.log(strStr('', '')) // -1
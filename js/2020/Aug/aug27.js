// Given a string, find the length of the longest substring without repeating characters.

var lengthOfLongestSubstring = function (s) {
    let length = 0;

    for (let i = 0; i < s.length; i++) {
        let tempLength = 1;
        let tempArr = [s[i]];
        for (let j = i + 1; j < s.length; j++) {
            if (tempArr.indexOf(s[j]) < 0) {
                tempLength++;
                tempArr.push(s[j]);
            } else {
                break;
            }
        }
        if (tempLength > length) {
            length = tempLength;
        }
    }
    return length;
};

console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3
console.log(lengthOfLongestSubstring('aab')) // 2
console.log(lengthOfLongestSubstring('dvdf')) // 3
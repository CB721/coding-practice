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

// console.log(lengthOfLongestSubstring('abcabcbb')) // 3
// console.log(lengthOfLongestSubstring('bbbbb')) // 1
// console.log(lengthOfLongestSubstring('pwwkew')) // 3
// console.log(lengthOfLongestSubstring('aab')) // 2
// console.log(lengthOfLongestSubstring('dvdf')) // 3


// Given two sorted arrays nums1 and nums2 of size m and n respectively.

// Return the median of the two sorted arrays.

var findMedianSortedArrays = function (nums1, nums2) {
    if (!nums1.length && !nums2.length) return 0;
    const mergedArr = [];
    if (nums2.length > nums1.length) {
        let tempNum2 = nums2;
        nums2 = nums1;
        nums1 = tempNum2;
    }
    while (nums1.length) {
        mergedArr.push(nums1.shift());
        if (nums2.length) {
            mergedArr.push(nums2.shift());
        }
    }
    mergedArr.sort((a, b) => {
        return a - b;
    });
    const middle = Math.floor(mergedArr.length / 2);
    if (mergedArr.length % 2 === 0) {
        return (mergedArr[middle] + mergedArr[middle - 1]) / 2;
    }

    return mergedArr[middle];
};

// console.log(findMedianSortedArrays([2], [1,3])); // 2.00000
// console.log(findMedianSortedArrays([1, 4], [3, 2])); // 2.50000
// console.log(findMedianSortedArrays([0, 0], [0, 0])); // 0.00000
// console.log(findMedianSortedArrays([], [1])); // 1.00000
// console.log(findMedianSortedArrays([3], [-1, -2])); // -1.00000


// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
// All given inputs are in lowercase letters a-z.

var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];
    if (!strs[0]) return "";
    let tempPre = strs[0].split("");
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < tempPre.length; j++) {
            if (tempPre[j] !== strs[i][j]) {
                tempPre = tempPre.splice(0, j);
                break;
            }
        }

    }
    return tempPre.length ? tempPre.join("") : "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])) // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])) // ""
console.log(longestCommonPrefix([])) // ""
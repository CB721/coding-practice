// check to see if two provided strings are anagrams of each other
// one string is an anagram if it uses the same characters in the same quantity
// only consider characters, not spaces or punctuation
// capital letters are considered the same as lowercase

// function anagrams(strA, strB) {
//     const lowerA = strA.toLowerCase().split('').sort().join('').replace(/[^a-zA-Z\d\s:]/g, '');
//     const lowerB = strB.toLowerCase().split('').sort().join('').replace(/[^a-zA-Z\d\s:]/g, '');
//     return lowerA === lowerB;
// }
function anagrams(strA, strB) {
    const aCharMap = buildCharMap(strA);
    const bCharMap = buildCharMap(strB);
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    } else {
        for (let char in aCharMap) {
            if (aCharMap[char] !== bCharMap[char]) {
                return false;
            }
        }
        return true;
    }
}
function buildCharMap(str) {
    const charMap = {};
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

console.log(anagrams('rail safety', 'fairy tales'));
// true
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// true
console.log(anagrams('Hi there', 'Bye there'));
// false
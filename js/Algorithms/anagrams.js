// check to see if two provided strings are anagrams of each other
// one string is an anagram if it uses the same characters in the same quantity
// only consider characters, not spaces or punctuation
// capital letters are considered the same as lowercase

function anagrams(strA, strB) {
    const lowerA = strA.toLowerCase().split('').sort().join('').replace(/[^a-zA-Z\d\s:]/g, '');
    const lowerB = strB.toLowerCase().split('').sort().join('').replace(/[^a-zA-Z\d\s:]/g, '');
    return lowerA === lowerB;
}

console.log(anagrams('rail safety', 'fairy tales'));
// true
console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// true
console.log(anagrams('Hi there', 'Bye there'));
// false
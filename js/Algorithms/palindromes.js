// given a string, return true if the string is a palindrome or false if it is not

// function palindrome(str) {
//     if (str === str.split('').reverse().join('')) {
//         return true
//     } else {
//         return false;
//     }
// }
// function palindrome(str) {
//     return str === str.split('').reverse().join('');
// }
function palindrome(str) {
    return str.split('').every(function(letter, index) {
        return letter === str[str.length - index - 1]
    })
}

console.log(palindrome("mom"));
// true
console.log(palindrome("tacocat"));
// true
console.log(palindrome("mo0m"));
// false
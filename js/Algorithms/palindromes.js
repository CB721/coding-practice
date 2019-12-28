// given a string, return true if the string is a palindrome or false if it is not

function palindrome(str) {
    if (str === str.split('').reverse().join('')) {
        return true
    } else {
        return false;
    }
}

console.log(palindrome("mom"));
// true
console.log(palindrome("tacocat"));
// true
console.log(palindrome("mo0m"));
// false
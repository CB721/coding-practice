// given a string, return a new string with the reverse order of characters

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let newStr = "";
//     for (let i = 0; i < str.length; i++) {
//         newStr = str[i] + newStr;
//     }
//     return newStr;
// }

function reverse(str) {
    return str.split('').reduce(function (newStr, character) {
        return character + newStr;
    }, '');
}

console.log(reverse("abc"));
// cba
console.log(reverse("asdf"));
// fdsa
console.log(reverse("hello world!"));
// !dlrow olleh
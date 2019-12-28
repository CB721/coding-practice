// given a string, return a new string with the reverse order of characters

function reverse(str) {
    return str.split('').reverse().join('');
}

console.log(reverse("abc"));
// cba
console.log(reverse("asdf"));
// fdsa
console.log(reverse("hello world!"));
// !dlrow olleh
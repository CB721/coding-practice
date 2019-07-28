// Explain why the following does not work
// function multiply(a, b) {
//     a * b
// }
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 2));
// expected 4
console.log(multiply(-2, -2));
// expected 4
console.log(multiply(-2, 2));
// expected -4
console.log(multiply(2, -2));
// expected -4
console.log(multiply(2.5, 3.4));
// expected 8.5



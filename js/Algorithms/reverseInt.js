// given an integer, return an integer that is the reverse ordering of numbers

function reverseInt(int) {
    const isPositive = Math.sign(int);
    const intStr = int.toString().split('').reverse().join('');
    const newInt = parseInt(intStr);
    return isPositive * newInt;
}

console.log(reverseInt(15));
// 51
console.log(reverseInt(-15));
// -51
console.log(reverseInt(423));
// 324
console.log(reverseInt(6000));
// 6
console.log(reverseInt(-6000));
// -6
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

// roads laid out in perfect grid
// 10 minutes to walk around and get back to where you started
// must be exactly 10 minues
// letter strings representing directions to walk
// each letter is one block
// each block is one minue
// return false if array does not get you back to starting point in 10 minutes
// return true if array does get you back to starting point in 10 minutes
// will always provide array of direction letters
    // 'n', 'w', 'e', 's'
function isValidWalk(walk) {
    // must be 10 spaces
    if (walk.length !== 10) {
        return false
    }
    // north and south cancel each other
    northAndSouth = 0;
    // east and west cancel each other
    eastAndWest = 0;
    // go through the array
    for (var i = 0; i < walk.length; i++) {
        if (walk[i] == 'n') {
            northAndSouth += 1;
        }
        if (walk[i] == 's') {
            northAndSouth -= 1;
        }
        if (walk[i] == 'e') {
            eastAndWest += 1;
        }
        if (walk[i] == 'w') {
            eastAndWest -= 1;
        }
    }
    // if north/south plus east/west is zero
    if (northAndSouth + eastAndWest == 0) {
        return true
    } else {
        return false
    }
}
// test cases
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
// false
console.log(isValidWalk(['e', 'e', 'n', 'w', 'w', 'e', 'n', 'w', 's', 'w']));
// true
console.log(isValidWalk(['w']));
// false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// false

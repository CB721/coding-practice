// Implement a method that accepts 3 integer values a, b, c. 
// The method should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
    // all sides must be greater than zero
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    // values of any two must be greater than the third
    if ((a + b > c) && (c + b > a) && (a + c > b)) {
        return true;
    } else {
        return false;
    }
}
// test cases
console.log(isTriangle(1, 2, 2));
// true
console.log(isTriangle(7, 2, 2));
// false
console.log(isTriangle(-1, 2, 2));
// false
console.log(isTriangle(0, 2, 2));
// false
console.log(isTriangle(31, 26, 6));
// true
// test git commit history
// test two
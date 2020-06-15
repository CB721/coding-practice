// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    const xArr = [];
    const oArr = [];
    // convert string to lower case and split
    const lowerArr = str.toLowerCase().split("");
    for (var i = 0; i < lowerArr.length; i++) {
        if (lowerArr[i] == 'o') {
            oArr.push(lowerArr[i]);
        }
        else if (lowerArr[i] == 'x') {
            xArr.push(lowerArr[i]);
        }
    }
    if (xArr.length == oArr.length) {
        return true
    } else {
        return false
    }
}
// test cases
console.log(XO("ooxx"));
// true
console.log(XO("xooxx"));
// false
console.log(XO("ooxXm"));
// true
console.log(XO("zpzpzpp"));
// true
console.log(XO("zzoo"));
// false
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function exAndOhs(input) {
    const xArr = [];
    const oArr = [];
    // convert string to lower case and split
    const lowerArr = input.toLowerCase().split("");
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
console.log(exAndOhs("ooxx"));
// true
console.log(exAndOhs("xooxx"));
// false
console.log(exAndOhs("ooxXm"));
// true
console.log(exAndOhs("zpzpzpp"));
// true
console.log(exAndOhs("zzoo"));
// false
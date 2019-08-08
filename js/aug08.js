// Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

function rgb(r, g, b) {
    // check for negative numbers
    if (r < 0) {
        r = 0;
    }
    if (g < 0) {
        g = 0;
    }
    if (b < 0) {
        b = 0;
    }
    // check for numbers above 255
    if (r > 255) {
        r = 255;
    }
    if (g > 255) {
        g = 255;
    }
    if (b > 255) {
        b = 255;
    }
    // convert to uppercase hexadecimal values
    var rStr = r.toString(16).toUpperCase();
    var gStr = g.toString(16).toUpperCase();
    var bStr = b.toString(16).toUpperCase();
    // if it only one number, add a zero
    if (rStr.length == 1) {
        rStr = "0" + rStr
    }
    if (gStr.length == 1) {
        gStr = "0" + gStr
    }
    if (bStr.length == 1) {
        bStr = "0" + bStr
    }
    return rStr + gStr + bStr;
}
// test cases
console.log(rgb(255, 255, 255));
// FFFFFF
console.log(rgb(255, 255, 300));
// FFFFFF
console.log(rgb(0,0,-20));
// 000000
console.log(rgb(148, 0, 211));
// 9400D3
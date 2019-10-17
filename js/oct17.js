// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

diamond = (n) => {
    const asterisk = "*";
    const spaces = " ";
    let input = n;
    let output = "";
    const ascArr = [];
    const descArr = [];
    if (n <= 0 || n % 2 === 0) {
        return null;
    } else {
        do {
            ascArr.push(input);
            descArr.push(input);
            input -= 2;
        } while (input >= 1);
        let ascLen = ascArr.length;
        let descLen = descArr.length;
        for (let i = 0; i < ascLen; i++) {
            let lowestCurrentNumber = ascArr.pop();
            let getSpaces = Math.round((n - lowestCurrentNumber) / 2);
            output += spaces.repeat(getSpaces) + asterisk.repeat(lowestCurrentNumber) + "\n";
        }
        for (let i = 0; i < descLen; i++) {
            let lowestCurrentNumber = descArr.shift();
            if (lowestCurrentNumber != n) {
                let getSpaces = Math.round((n - lowestCurrentNumber) / 2);
                output += spaces.repeat(getSpaces) + asterisk.repeat(lowestCurrentNumber) + "\n";
            }
        }
        return output;
    }
}
console.log(diamond(1))
// "*\n"
console.log(diamond(3))
// " *\n***\n *\n"
console.log(diamond(5))
// "  *\n ***\n*****\n ***\n  *\n"
console.log(diamond(2))
// null
console.log(diamond(-3))
// null
console.log(diamond(0))
// null
console.log(diamond(6));
// null
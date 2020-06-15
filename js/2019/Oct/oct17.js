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


// write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

presses = (phrase) => {
    phraseArr = [];
    let totalPress = 0;
    for (let i = 0; i < phrase.length; i++) {
        let letter = phrase[i].toLowerCase();
        if (
            letter === "a" ||
            letter === "d" ||
            letter === "g" ||
            letter === "j" ||
            letter === "m" ||
            letter === "p" ||
            letter === "t" ||
            letter === "w" ||
            letter === " " ||
            letter == 1
        ) {
            totalPress += 1;
        }
        else if (
            letter === "b" ||
            letter === "e" ||
            letter === "h" ||
            letter === "k" ||
            letter === "n" ||
            letter === "q" ||
            letter === "u" ||
            letter === "x" ||
            letter == 0
        ) {
            totalPress += 2;
        }
        else if (
            letter === "c" ||
            letter === "f" ||
            letter === "i" ||
            letter === "l" ||
            letter === "o" ||
            letter === "r" ||
            letter === "v" ||
            letter === "y"
        ) {
            totalPress += 3;
        }
        else if (
            letter === "s" ||
            letter === "z" ||
            letter == 2 ||
            letter == 3 ||
            letter == 4 ||
            letter == 5 ||
            letter == 6 ||
            letter == 8
        ) {
            totalPress += 4;
        }
        else if (
            letter == 7 ||
            letter == 9
        ) {
            totalPress += 5;
        }
    }
    return totalPress;
}

console.log(presses("LOL"));
// 9
console.log(presses("HOW R U"));
// 13
console.log(presses("a0"));
// 3
console.log(presses("  "));
// 2


// return smallest positive integer greater than 0 that does not occur in the array
solution = (A) => {
    if (A.length <= 0) {
        return 1;
    }
    const sortedNumbers = A.sort();
    let lastNumber = 1;
    const arrLen = sortedNumbers.length;
    for (let i = 0; i < sortedNumbers.length; i++) {
        if ((sortedNumbers[i] - lastNumber) > 1) {
            return lastNumber + 1;
        } else if (sortedNumbers[i] === sortedNumbers[arrLen - 1]) {
            if (sortedNumbers[i] < 1) {
                return 1;
            } else {
                return sortedNumbers[i] + 1;
            }
        } else {
            lastNumber = sortedNumbers[i];
        }
    }
}

console.log(solution([1, 3, 6, 4, 1, 2]));
// 5
console.log(solution([1, 2, 3]));
// 4
console.log(solution([-1, -3]));
// 1
console.log(solution([]));
// 1
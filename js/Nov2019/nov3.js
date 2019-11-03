// Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

// The keypad has the following layout:

// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘
// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

// Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java and C#) of all variations for an observed PIN with a length of 1 to 8 digits. 

function getPins(observed) {
    if (observed.length <= 0) {
        return observed;
    }
    const potentialDigits = {};
    const allPossibleCombos = [];
    const adjacentDigits = {
        '1': ['1', '2', '4'],
        '2': ['2', '1', '3', '5'],
        '3': ['3', '2', '6'],
        '4': ['4', '1', '5', '7'],
        '5': ['5', '2', '6', '4', '8'],
        '6': ['6', '3', '5', '9'],
        '7': ['7', '4', '8'],
        '8': ['8', '9', '5', '7', '0'],
        '9': ['9', '6', '8'],
        '0': ['0', '8']
    }
    const splObs = observed.split("");
    for (let i in splObs) {
        potentialDigits[i] = adjacentDigits[splObs[i]];
    }
    for (let j in potentialDigits) {
        allPossibleCombos.push(potentialDigits[j][0] + ": [" + potentialDigits[j] + "]");
    }
    return allPossibleCombos.join(", ");
}

// test cases
console.log(getPins("1357"));
// 1: [1,2,4], 3: [3,2,6], 5: [5,2,6,4,8], 7: [7,4,8]
console.log(getPins("363452"));
// 3: [3,2,6], 6: [6,3,5,9], 3: [3,2,6], 4: [4,1,5,7], 5: [5,2,6,4,8], 2: [2,1,3,5]
console.log(getPins("13"));
// 1: [1,2,4], 3: [3,2,6]

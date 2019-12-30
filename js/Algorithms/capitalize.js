// write a function that accepts a string
// it should capitalize the first letter of each word in the string

// function capitalize(str) {
//     const splitStr = str.split(' ');
//     for (let i = 0; i < splitStr.length; i++) {
//         let firstLetter = splitStr[i][0].toUpperCase();
//         for (let j = 1; j < splitStr[i].length; j++) {
//             firstLetter += splitStr[i][j];
//         }
//         splitStr.splice(i, 1, firstLetter);
//     }
//     return splitStr.join(' ');
// }
// function capitalize(str) {
//     const splitStr = str.split(' ');
//     const newStr = [];
//     for (let i = 0; i < splitStr.length; i++) {
//         let word = splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
//         newStr.push(word);
//     }
//     return newStr.join(' ');
// }
function capitalize(str) {
    let results = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === " ") {
            results += str[i].toUpperCase();
        } else {
            results += str[i];
        }
    }
    return results;
}

console.log(capitalize('a short sentence'));
// A Short Sentence
console.log(capitalize('a lazy fox'));
// A Lazy Fox
console.log(capitalize('look, it is working!'));
// Look, It Is Working!
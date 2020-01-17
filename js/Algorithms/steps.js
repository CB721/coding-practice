// Write a function that accepts a positive number N
// The function should console log a step shape with N levels using the # character
// Make sure the step has spaces on the right hand side
// Multiple strings should be created and consoled logged separately

// function steps(n) {
//     if (n < 0) {
//         console.log("N must be a positive number");
//     }
//     for (let i = 0; i < n; i++) {
//         let step = "";
//         for (j = 0; j < n; j++) {
//             if (j <= i) {
//                 step += "#";
//             } else {
//                 step += " ";
//             }
//         }
//         console.log(step);
//     }
// }

function steps(n, row = 0, step = "") {
    // check for positive number
    if (n < 0) {
        return console.log("N must be a positive number");
    }
    // if we have reached the last step
    if (n === row) {
        return;
    }
    // if the step has been completed
    if (n === step.length) {
        console.log(step);
        // move on to next row
        return steps(n, row + 1);
    }
    // create step
    if (step.length <= row) {
        // each row should have #'s equal to row value
        step += "#";
    } else {
        // and spaces equal to the n - the row value
        step += " ";
    }
    // call function again until step is complete
    steps(n, row, step);
}

steps(2);
// '# '
// '##'

steps(13);
// '#            '
// '##           '
// '###          '
// '####         '
// '#####        '
// '######       '
// '#######      '
// '########     '
// '#########    '
// '##########   '
// '###########  '
// '############ '
// '#############'
steps(-4)
// N must be a positive number
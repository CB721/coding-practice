// Write a function that accepts a positive number N
// The function should console log a step shape with N levels using the # character
// Make sure the step has spaces on the right hand side
// Multiple strings should be created and consoled logged separately

function steps(n) {
    if (n < 0) {
        console.log("N must be a positive number");
    }
    for (let i = 0; i < n; i++) {
        let step = "";
        for (j = 0; j < n; j++) {
            if (j <= i) {
                step += "#";
            } else {
                step += " ";
            }
        }
        console.log(step);
    }
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
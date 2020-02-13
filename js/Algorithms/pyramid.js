// write a function that accepts a positive number N
// the function should console.log a pyramid shape with N levels using the # character
// it should have spaces on both the left and right sides

function pyramid(N) {
    if (N < 0) {
        return "N must be a positive number";
    }
    // find center element
    const centerElement = Math.floor((N * 2 - 1) / 2);
    // iterate over each "row"
    for (let i = 0; i < N; i++) {
        let level = "";
        // iterate over each "column"
        // each column is not just N
        // it increases by double N - 1 each time
        for (let j = 0; j < N * 2 - 1; j++) {
            // place spaces on each side of center element
            // as j increases, the amount of spaces placed on each side goes down
            // check if it is within that range
            if (centerElement - i <= j && centerElement + i >= j) {
                level += "#";
            } else {
                level += " ";
            }
        }
        console.log(level);
    }
}

pyramid(1);
// '#'
pyramid(2);
// ' # '
// '###'
pyramid(3);
// '  #  '
// ' ### '
// '#####' 
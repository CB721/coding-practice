// write a function that accepts an integer N and returns a NxN spiral matrix

function matrix(N) {
    if (N < 0 || typeof(N) !== "number") {
        return "N must be a positive integer"
    }
    // create empty array of sub arrays
    const results = [];
    for (let i = 0; i < N; i++) {
        results.push([]);
    }
    // keep track of number that is going into results array
    let counter = 1;
    // track start/end columns and start/end rows
    let startColumn = 0;
    let endColumn = N - 1;
    let startRow = 0;
    let endRow = N - 1;
    // as long as start column is less than end column and start row is less than end row
    while (startColumn <= endColumn && startRow <= endRow) {
        // top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter ++;
        }
        startRow++;
        // right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;
        // bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;
        // first column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;

        }
        startColumn++;
    }
    return results;
}

console.log(matrix(2));
// [[1, 2],
// [4, 2]]
console.log(matrix(3));
// [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]
console.log(matrix(4));
// [[1, 2, 3, 4],
// [12, 13, 14, 5],
// [11, 16,15, 6]
// [10, 9, 8, 7]]
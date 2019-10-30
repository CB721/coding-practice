// write number in expanded form

expandedForm = (num) => {
    const splitNum = (num + '')
        .split('')
        .map((x) => {
            return (x);
        });
    let numStr = [];
    for (let i = 0; i < splitNum.length; i++) {
        if (splitNum[i] !== "0") {
            let newNum = splitNum[i];
            for (let j = 0; j < splitNum.length - i - 1; j++) {
                newNum += "0";
            }
            numStr.push(newNum);
        }
    }
    return numStr.join(" + ");
}

// test cases
console.log(expandedForm(12));
// "10 + 2"
console.log(expandedForm(42));
// "40 + 2"
console.log(expandedForm(70304));
// "70000 + 300 + 4"

// insertion sort
// insertionSort = (arr) => {
//     for (let i = 1; i < arr.length; i++) {
//         let currentElement = arr[i];
//         let j = i - 1;
//         while (j >= 0 && arr[j] > currentElement) {
//             arr[j + 1] = arr[j];
//             j--;
//         }
//         arr[j + 1] = currentElement;
//     }
//     return arr;
// }
insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr.splice(i, 1);
                arr.splice(j, 0, temp[0]);
            }
        }
    }
    return arr;
}

// test cases
console.log(insertionSort([2, 4, 9, 14, 23, 7]));
// 2, 4, 9, 14, 23, 7
console.log(insertionSort([45, 300, 2, 1400, 42, 500, 30000, 32]));
// 2, 32, 42, 45, 300, 500, 1400, 30000
console.log(insertionSort([900, 3, 73, 75, 7, 89]));
// 3, 7, 73, 75, 89, 900

// selection sort
selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) {
                smallestIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
    }
    return arr;
}

// test cases
console.log(selectionSort([16, 5, 11, 8, 1, 2, 20]));
// 1, 2, 5, 8, 11, 16, 20
console.log(selectionSort([6, -15, 1, 8, 0, 2, -15]));
// -15, -15, 0, 1, 2, 6, 8
console.log(selectionSort([600, -1, 1, 8, 0, 2, 600]));
// -1, 0, 1, 2, 8, 600, 600
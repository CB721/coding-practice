function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr.slice(j, j+1)[0];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([100, -40, 500, -124, 0, 21, 7]));
// -124, -40, 0, 7, 21, 100, 500
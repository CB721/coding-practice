// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.push(arr.splice(i, 1)[0]);
        }
    }
    return arr;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false,1,1,2,1,3,"a",0,0]
console.log(moveZeros(["a", 0, "b", 0, "c", "d", 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0])) // ["a","b","c","d",1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0]
function removeZeros(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 0) {
            let end = 0;
            for (let j = i; j < array.length; j++) {
                if (array[j] == 0) {
                    end++;
                } else {
                    break;
                }
            }
            let temp = array.splice(i, end);
            temp.forEach(index => {
                array.push(index);
            });
        }
    }
    return array;
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]
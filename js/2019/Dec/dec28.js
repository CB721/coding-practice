// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

function highestRank(arr) {
    const rankObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!rankObj[arr[i]]) {
            rankObj[arr[i]] = 1;
        } else {
            rankObj[arr[i]]++;
        }
    }
    let rankNum = 0;
    let rankCount = 0;

    for (const number in rankObj) {
        if (rankObj[number] >= rankCount && parseInt(number) > rankNum) {
            rankNum = parseInt(number);
            rankCount = rankObj[number];
        }
    }
    return rankNum;
}

// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
// // 12
// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10] ));
// // 12
// console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
// // 3

// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

function iqTest(numbers) {
    const numArr = numbers.split(' ');
    const isEven = numArr[0] % 2;
    if (isEven !== numArr[1] % 2 && isEven !== numArr[numArr.length -1] % 2) {
        return 1;
    } else {
        for (let i = 1; i <= numArr.length; i++) {
            if (numArr[i] % 2 !== isEven) {
                return i + 1;
            }
        }
    }
}

console.log(iqTest("2 4 7 8 10"));
// 3
console.log(iqTest("1 2 1 1"));
// 2
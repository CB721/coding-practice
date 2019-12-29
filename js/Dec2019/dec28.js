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

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
// 12
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10] ));
// 12
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
// 3
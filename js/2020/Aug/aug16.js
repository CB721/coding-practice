// Given an unsorted array of integers, find if the element k is present or not
// it must return "Yes" or "No" if the element is present or not

function findNumber(arr, k) {
    return arr.indexOf(k) > -1 ? "Yes" : "No";
}

// console.log(findNumber([1, 34, 2, 45], 2)) // Yes
// console.log(findNumber([1, 34, 2, 45], 5)) // No

// Given two numbers l and r, print all of the odd numbers between them (inclusive)
// l is the left part of the range
// r is the right part of the range
// it must return an array of all odd numbers

function oddNumbers(l, r) {
    const outArr = [];
    for (let i = l; i <= r; i++) {
        if (i % 2 > 0) outArr.push(i);
    }
    return outArr;
}

// console.log(oddNumbers(3, 14)) // [ 3, 5, 7, 9, 11, 13 ]
// console.log(oddNumbers(22, 77)) // [ 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77 ]




const https = require('https');

function getData(uid, txnType, monthYear, page) {
    return new Promise((resolve, reject) => {
        https.get(`https://jsonmock.hackerrank.com/api/transactions/search?txnType=${txnType}&userId=${uid}&monthYear=${monthYear}&page=${page}`, (res) => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(rawData);
                    resolve(parsedData.data);
                } catch (e) {
                    reject(e.message);
                }
            });
        }).end();
    })
}
function getAvg(data) {
    return new Promise((resolve, reject) => {
        const reducer = (accumulator, item) => {
            return accumulator + convertDollar(item.amount);
        };
        const total = data.reduce(reducer, 0);
        resolve(total);
    })
}
function convertDollar(amount) {
    return parseFloat(amount.replace("$", "").replace(",", ""));
}
async function collectAllData(uid, txnType, monthYear, cb) {
    await https.get(`https://jsonmock.hackerrank.com/api/transactions/search?txnType=${txnType}&userId=${uid}&monthYear=${monthYear}`, (res) => {
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                let avg = 0;
                const promises = [];
                async function getAllPages() {
                    for (let i = 1; i <= parsedData.total_pages; i++) {
                        promises.push(getData(uid, txnType, monthYear, i));
                    }
                    const allData = await Promise.all(promises);
                    Object.defineProperty(Array.prototype, 'flat', {
                        value: function (depth = 1) {
                            return this.reduce(function (flat, toFlatten) {
                                return flat.concat((Array.isArray(toFlatten) && (depth > 1)) ? toFlatten.flat(depth - 1) : toFlatten);
                            }, []);
                        }
                    });
                    const flatData = allData.flat();
                    await getAvg(flatData)
                        .then(res => {
                            avg = res / parsedData.total;
                        });
                    const aboveAvgRecords = flatData.filter(record => {
                        if (convertDollar(record.amount) > avg) return true;
                    });
                    const outArr = [];
                    aboveAvgRecords.forEach(record => {
                        if (outArr.indexOf(record.id) < 0) {
                            outArr.push(record.id);
                        }
                    });
                    return outArr;
                }
                getAllPages()
                    .then(res => {
                        cb(res);
                        return res;
                    });
            } catch (e) {
                console.error(e.message);
            }
        });
    }).end();
}

function getUserTransaction(uid, txnType, monthYear) {
    return new Promise((resolve, reject) => {
        collectAllData(uid, txnType, monthYear, (res) => {
            resolve(res.length ? res : [-1])
        });
    })
}

async function main() {
    const results = await getUserTransaction(4, 'debit', '02-2019');
    await console.log("results", results);
}
main();
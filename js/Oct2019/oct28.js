// write number in expanded form

expandedForm = (num) => {
    const splitNum = (num + '')
        .split('')
        .map((x) => {
            return (x);
        });
    let numStr = [];
    for (let i = 0; i < splitNum.length; i++) {
        if(splitNum[i] !== "0") {
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
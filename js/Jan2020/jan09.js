// Write a function that returns how many palindrome dates and non palindrome dates there have been since 1 BCE and today
// 0101-1010
// 0511-1150
// 09-10-0190

function datindrome() {
    const today = new Date();
    const year = today.getFullYear();

    let palidateTotal = 0;
    let nonDates = 0;

    for (let i = 1; i < year; i++) {
        // convert to a string to check reverse
        let yearStr = i.toString();
        // add zeros for years with less digits than current year
        while (yearStr.length < year.length) {
            yearStr += "0";
        }
        // reverse year string
        let monthDay = yearStr.split('').reverse();
        let month = parseInt(monthDay[0] + monthDay[1]);
        let day = parseInt(monthDay[2] + monthDay[3]);
        let lastTwoYear = yearStr.charAt(3) + yearStr.charAt(4);
        // check for return amount of days for valid month, zero for invalid month
        let monthDays = validateMonth(month, lastTwoYear);
        // if it is a valid day and month, it is a valid palindrome date
        if (day >= 0 && day <= monthDays && monthDays > 0) {
            palidateTotal = palidateTotal + 1;
        } else {
            nonDates = nonDates + 1;
        }
    }
    function validateMonth(month, lastTwoYear) {
        // if month is between 1 and 12 return amount of days in month
        if (month < 13 && month > 0) {
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                return (31);
            } else if (month === 4 || month === 6 || month === 9 || 11) {
                return (30);
            } else {
                // check for leap year
                if (lastTwoYear % 4 === 0) {
                    return (29);
                } else {
                    return (28);
                }
            }
        } else {
            return (0);
        }
    }
    return "Non total: " + nonDates + " | Total: " + palidateTotal;
}

console.log(datindrome());
// Write a function that returns how many palindrome dates and non palindrome dates there have been since 1 BCE and today or year provided
// dates will be formated month - day - year ex. 02/15/1991 = February 15, 1991
// if there is one during year provided or current year, log that date
// if none, log "None during (year provided)"
// if the user provides an invalid year or a string, return "That was a long time ago in a galaxy far far away..."
// it should accept future years as well

function datindrome(userYear) {
    if (userYear <= 0 || typeof (userYear) === 'string') {
        return "That was a long time ago in a galaxy far far away..."
    }
    const today = new Date();
    const year = userYear || today.getFullYear();

    let palidateTotal = 0;
    let nonDates = 0;

    for (let i = 1; i <= year; i++) {
        // convert to a string to check reverse
        let yearStr = i.toString();
        // add zeros for years with less digits than current year
        while (yearStr.length < 4) {
            yearStr = "0" + yearStr;
        }
        // reverse year string
        let monthDay = yearStr.split('').reverse();
        let month = parseInt(monthDay[0] + monthDay[1]);
        let day = parseInt(monthDay[2] + monthDay[3]);
        let lastTwoYear = parseInt(monthDay[1] + monthDay[0]);
        // check for valid month and return amount of days for valid month, zero for invalid month
        let monthDays = validateMonth(month, lastTwoYear);
        // convert year string back to a number
        let yearNum = parseInt(yearStr);
        // if it is a valid day and month, it is a valid palindrome date
        if (day >= 0 && day <= monthDays && monthDays > 0 && yearNum <= year) {
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
    // check if input year has palindrome date
    if (year) {
        let userYearStr = year.toString();
        while (userYearStr.length < 4) {
            userYearStr = "0" + userYearStr;
        }
        const userMonthDay = userYearStr.split('').reverse();
        const userMonth = parseInt(userMonthDay[0] + userMonthDay[1]);
        const userDay = parseInt(userMonthDay[2] + userMonthDay[3]);
        const userLastTwoYear = parseInt(userMonthDay[1] + userMonthDay[0]);
        const userMonthDays = validateMonth(userMonth, userLastTwoYear);
        if (userDay >= 0 && userDay <= userMonthDays && userMonthDays > 0) {
            console.log(convertMonth(userMonth) + " " + userDay + ", " + year);
        } else {
            console.log("None during " + year);
        }
    }
    // display month as full name as opposed to the numeric value
    function convertMonth(month) {
        switch (month) {
            case 1:
                return "January";
            case 2:
                return "February";
            case 3:
                return "March";
            case 4:
                return "April";
            case 5:
                return "May";
            case 6:
                return "June";
            case 7:
                return "July";
            case 8:
                return "August";
            case 9:
                return "September";
            case 10:
                return "October";
            case 11:
                return "November";
            case 12:
                return "December";
            default:
                return;
        }
    }
    return "Non Palindrome Since 1BCE and " + year + ": " + nonDates + " | Palindrome Dates Between 1BCE and " + year + ": " + palidateTotal;
}

console.log(datindrome());
// February 2, 2020
// Non Palindrome Since 1BCE: 1925 | Palindrome Dates Since 1BCE: 95
console.log(datindrome(1992));
// None during 1992
// Non Palindrome Since 1BCE: 1901 | Palindrome Dates Since 1BCE: 91
console.log(datindrome(190));
// September 10, 190
// Non Palindrome Since 1BCE: 166 | Palindrome Dates Since 1BCE: 24
console.log(datindrome(-2020));
// That was a long time ago in a galaxy far far away...
console.log(datindrome(400));
// None during 400
// Non Palindrome Since 1BCE and 400: 352 | Palindrome Dates Between 1BCE and 400: 48
console.log(datindrome("last year"));
// That was a long time ago in a galaxy far far away...
console.log(datindrome(3030));
// March 3, 3030
// Non Palindrome Since 1BCE and 3030: 2897 | Palindrome Dates Between 1BCE and 3030: 133
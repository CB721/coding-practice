function nbMonths(startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth) {
    let months = 0;
    do {
        months += 1;
        savingsPerMonth += savingsPerMonth;
        startPriceNew *= percentLossByMonth;
        startPriceOld *= percentLossByMonth;
        if (months % 2 == 0) {
            percentLossByMonth -= 0.005;
        }
    } while (savingsPerMonth < startPriceNew);
    const extraCash = savingsPerMonth - startPriceNew;
    return [months, extraCash];
}

// test cases
console.log(nbMonths(2000, 8000, 1000, 1.5));
// [6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5));
// [0, 4000]
// Explain why the following does not work
// function multiply(a, b) {
//     a * b
// }
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 2));
// expected 4
console.log(multiply(-2, -2));
// expected 4
console.log(multiply(-2, 2));
// expected -4
console.log(multiply(2, -2));
// expected -4
console.log(multiply(2.5, 3.4));
// expected 8.5

// roads laid out in perfect grid
// 10 minutes to walk around and get back to where you started
// must be exactly 10 minues
// letter strings representing directions to walk
// each letter is one block
// each block is one minue
// return false if array does not get you back to starting point in 10 minutes
// return true if array does get you back to starting point in 10 minutes
// will always provide array of direction letters
// 'n', 'w', 'e', 's'
function isValidWalk(walk) {
    // must be 10 spaces
    if (walk.length !== 10) {
        return false
    }
    // north and south cancel each other
    northAndSouth = 0;
    // east and west cancel each other
    eastAndWest = 0;
    // go through the array
    for (var i = 0; i < walk.length; i++) {
        if (walk[i] == 'n') {
            northAndSouth += 1;
        }
        if (walk[i] == 's') {
            northAndSouth -= 1;
        }
        if (walk[i] == 'e') {
            eastAndWest += 1;
        }
        if (walk[i] == 'w') {
            eastAndWest -= 1;
        }
    }
    // if north/south plus east/west is zero
    if (northAndSouth + eastAndWest == 0) {
        return true
    } else {
        return false
    }
}
// test cases
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// true
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
// false
console.log(isValidWalk(['e', 'e', 'n', 'w', 'w', 'e', 'n', 'w', 's', 'w']));
// true
console.log(isValidWalk(['w']));
// false
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
// false

// town population
// increase certain % each year plus additional amount
// how many years until populations is greater or equal target
// p0 is current population
// percent is increased percentage each year
// aug is additional people added to population
// p is population target
function nbYear(p0, percent, aug, p) {
    // amount of years until popluation target is reached
    years = 0;
    // convert percent to numeric value
    const growthPercentage = percent * 0.01;
    // while population is less than target
    do {
        // growth per year
        let yearGrowth = (p0 * growthPercentage) + aug;
        // total per year
        p0 += yearGrowth;
        // add to years
        years += 1;
    }
    while (p0 < p);
    return years;
}
// test cases
console.log(nbYear(1500, 5, 100, 5000));
// 15
console.log(nbYear(1500000, 2.5, 10000, 2000000));
// 10
console.log(nbYear(1500000, 0.25, 1000, 2000000));
// 94
console.log(nbYear(1000, 5, -10, 1500));
// 10
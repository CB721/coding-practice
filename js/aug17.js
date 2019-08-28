// find the random number that has been generate
function findANumber() {
    var stuff = [10, 34, 56, 67, 93, 120, 137, 168, 259, 280, 311, 342, 413, 514];
    var random_value = stuff[Math.floor(Math.random() * 14)];

    for (let i = 0; i < stuff.length; i++) {
        for (let j = 0; j < random_value.length; j++) {
            if (random_value[i] == stuff[j]) {
                console.log(random_value[i]);
            }
        }
    }
}

console.log(findANumber());
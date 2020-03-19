// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

function list(names) {
    let outStr = "";
    for (let i = 0; i < names.length; i++) {
        if (i === 0) {
            outStr = names[i].name;
        } else if (i === names.length - 1) {
            outStr += ` & ${names[i].name}`;
        } else {
            outStr += `, ${names[i].name}`;
        }
    }
    return outStr;
}

console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));
// 'Bart, Lisa, Maggie, Homer & Marge'
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
// 'Bart, Lisa & Maggie'
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
// 'Bart & Lisa'
console.log(list([{name: 'Bart'}]));
// 'Bart'
console.log(list([]));
// ''
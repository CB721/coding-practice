// iterators
const companies = ['Microsoft', 'Yahoo', 'Apple'];
const iterators = companies[Symbol.iterator]();
// console.log(iterators) // Object [Array Iterator] {}
// console.log(iterators.next()) // { value: 'Microsoft', done: false }
// console.log(iterators.next()) // { value: 'Yahoo', done: false }
// console.log(iterators.next()) // { value: 'Apple', done: false }
// console.log(iterators.next()) // { value: undefined, done: true }
// console.log("\n")

const person = {
    name: 'John',
    phone: '123-456-7890',
}

// console.log(person[Symbol.iterator]()) // person[Symbol.iterator] is not a function

person[Symbol.iterator] = () => {
    let calls = 0;
    return {
        next: () => {
            const stop = calls >= Object.keys(person).length;
            calls++;
            if (!stop) {
                return {
                    value: person[Object.keys(person)[calls - 1]],
                    done: false
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
}

// console.log(person[Symbol.iterator]()) // { next: [Function: next] }

// generators

person[Symbol.iterator] = function* () {
    yield this.name;
    yield this.phone;
}

// console.log(person[Symbol.iterator]()) // Object [Generator] {}

function* gen() {
    let x = yield 'hello';
    console.log(x);
    yield 'world';
    return 'this is the end';
}

const genIterator = gen();

console.log(genIterator.next()) // { value: 'hello', done: false }
console.log(genIterator.next('beautiful')) // { value: 'world', done: false }
console.log(genIterator.next()) // { value: 'this is the end', done: true }
console.log(genIterator.next()) // { value: undefined, done: true }


function* objectEntries(obj) {
    const propKeys = Object.keys(obj);
    for (const propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}

// for (const [key, value] of objectEntries(person)) {
//     console.log(`${key}: ${value}`);
// }

// write a program that logs the numbers from 1 to n.  
// But for multiples of three, print "fizz" instead of the number and for multiples of five, print "buzz".  
// For numbers which are multiples of both, print "fizzbuzz"

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else if (i % 3 === 0) {
            console.log("fizz");
        }
        else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(5);
// 1
// 2
// "fizz"
// 4
// "buzz"
fizzBuzz(6);
// 1
// 2
// "fizz"
// 4
// "buzz"
// "fizz" 
fizzBuzz(16);
// 1
// 2
// "fizz"
// 4
// "buzz"
// "fizz"
// 7
// 8
// 9
// "buzz"
// 11
// "buzz"
// 13
// 14
// "fizzbuzz"
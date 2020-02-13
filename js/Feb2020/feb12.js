// function sortByFirstName(arrayObj) {
//     let arrayCopy = [];
//     for (let index = 0; index <= arrayObj.length; index++) {
//         if (index === arrayObj.length) {
//             return arrayCopy;
//         } else if (arrayObj[index + 1]) {
//             // console.log(arrayObj[index + 1].name.first);
//             let firstPerson = arrayObj[index].name.first.toLowerCase().split('');
//             let secondPerson = arrayObj[index + 1].name.first.toLowerCase().split('');
//             // firstPerson.forEach(letter => {
//             //     if (firstPerson[letter] > secondPerson[letter]) {
                    
//             //     }
//             // });
//             // console.log(firstPerson);
//             // console.log(secondPerson);
//             if (firstPerson[index] > secondPerson[index]) {
//                 let temp = arrayObj[index];
//                 arrayCopy[index] = arrayObj[index + 1];
//                 arrayCopy[index + 1] = temp;
//                 // console.log(arrayCopy);
//             } else if (firstPerson[0] === secondPerson[0]) {
//                 let i = 1;
//                 if (firstPerson[i] === secondPerson[i]) {
//                     i = i + 1;
//                 }
//                 if (firstPerson[i] > secondPerson[i]) {
//                     let temp = arrayObj[index];
//                     arrayCopy[index] = arrayObj[index + 1];
//                     arrayCopy[index + 1] = temp;
//                 };
//             };
//         }
//     };
// };
// function sortByFirstName(arr, sortedArr) {
//     console.log("--------------");
//     console.log(arr);
//     console.log("**************");
//     console.log(sortedArr || []);
//     console.log("--------------");
//     const outArr = sortedArr || [];
//     const tempArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(i);
//         // if there is more than item in the array
//         if (arr[i + 1]) {
//             // if (arr[i].name.first.toLowerCase() > arr[i + 1].name.first.toLowerCase()) {
//             //     outArr.push(arr[i]);
//             // }
//             const firstPerson = arr[i].name.first.toLowerCase();
//             const secondPerson = arr[i + 1].name.first.toLowerCase();
//             // if first person is before second person alphabetically, push to out arr
//             if (firstPerson < secondPerson) {
//                 outArr.push(arr[0]);
//             } else {
//                 tempArr.push(arr[1]);
//             }
//         }
//     }
//     // variable to store sorted arr length
//     let length = 0;
//     // if nothing has been sorted, the length is 0
//     if (sortedArr) {
//         length = sortedArr.length;
//     }
//     // if all names have been sorted and placed in out arr
//     if (outArr.length === arr.length + length) {
//         console.log("******finish*****");
//         return outArr;
//     } else {
//         // 
//         return sortByFirstName(tempArr, outArr);
//     }
// }
function sortByFirstName(arrayObj) {
    let modified = true;
    let arrayCopy = arrayObj;
    while(modified)
    {
        modified = false;
        for(let index = 0; index < arrayCopy.length - 1; index++)
        {
            let firstPerson = arrayCopy[index].name.first.toLowerCase().split('');
            let secondPerson = arrayCopy[index + 1].name.first.toLowerCase().split('');
            console.log(arrayCopy[index + 1]);
            if(firstPerson[0] > secondPerson[0]) {
                let temp = arrayCopy[index];
                arrayCopy[index] = arrayCopy[index + 1];
                arrayCopy[index + 1] = temp;
                modified = true; 
            } else if (firstPerson[0] === secondPerson[0]) {
                let i = 1;
                while(firstPerson[i] === secondPerson[i]) {
                    console.log(i);
                    i = i + 1;
                }
                if(firstPerson[i] > secondPerson[i]) {
                    let temp = arrayCopy[index];
                    arrayCopy[index] = arrayCopy[index + 1];
                    arrayCopy[index + 1] = temp;
                    modified = true;
                };
            };
        };
    };
    return arrayCopy;
};
testArray = [
    {
        name: {
            first: "Paolo"
        }
    },
    {
        name: {
            first: "Paelo"
        }
    },
    {
        name: {
            first: "Eve"
        }
    },
    {
        name: {
            first: "Logan"
        }
    }
]
console.log(sortByFirstName(testArray));
// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr){
    const highNum = [arr[0]];
    const lowNum = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > highNum[0]) {
        highNum.pop();
        highNum.push(arr[i])
      }
      if (arr[i] < lowNum[0]) {
        lowNum.pop();
        lowNum.push(arr[i])
      }
    }
    return [lowNum[0], highNum[0]]
  }

  // test cases
  console.log(minMax([1, -3, 0, 35]));
  // [-3, 35]
  console.log(minMax([1]));
  // [1, 1]
  console.log(minMax([7, 23, 350000, 2510]));
  // [7, 350000]
  console.log(minMax([-35, -25, -100]));
  // [-100, -25]

  
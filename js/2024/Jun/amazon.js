// Amazon's AWS provides fast and efficient server solutions. The developers want to stress-test the quality of the servers' channels. They must ensure the following:
// Each of hte packets must be sent via a single channel.
// Each of the channels must transfer at least one packet.
// The quality of the transfer for a channel is defined by the median of the sizes of all the data packets sent through that channel.
// Find the maximum possible sum of the qualities of the channels. If it is a floating-point number, round it to the next highest integer.
// Example
// packets = [1, 2, 3, 4, 5]
// channels = 2
// The optimal solution is to send the packets through the channels as follows:
// Channel 1: [1, 2, 3, 4]
// Channel 2: [5]
// The quality of the channels is ((2.5 rounded to 3)+ 5) = 8
// Example 2
// packets = [105, 200, 456]
// channels = 2
// The optimal solution is to send the packets through the channels as follows:
// Channel 1: [105, 200]
// Channel 2: [201]
// The quality of the channels is (105 + (200.5 rounded to 201)) = 306

function findMaximumQuality(packets, channels) {
  if(packets.length === 0) return 0;
  if (packets.length === channels) {
    return Math.ceil(packets.reduce((acc, val) => acc + val));
  }
  if (channels < packets.length) {

  }
  let sum = 0;
  // sort the packets
  const sorted = packets.sort((a, b) => a - b);
  // create an array for each channel
  const channelArrs = Array.from({ length: channels }, () => []);
  // iterate through the packets
  // calculate the median for each channel
  // add the packet to the channel with the smallest difference between it and the median
  for(let i = 0; i < sorted.length; i++) {
    console.log('--------')
    const packet = sorted[i];
    console.log("packet", packet);
    const medians = channelArrs.map(arr => {
      // if the array is even, return the average of the two middle elements
      if (arr.length % 2 === 0) {
        const mid = arr.length / 2;
        return (arr[mid - 1] + arr[mid]) / 2 || 0;
      }
      // if the array is odd, return the middle element
      return arr[Math.floor(arr.length / 2)] || 0;
    });
    console.log("medians", medians);
    let medianDiff = 0;
    let minIndex = 0;
    for (let j = 0; j < medians.length; j++) {
      console.log('*********')
      console.log("medians[j]", medians[j]);
      const diff = Math.abs(medians[j] - packet);
      console.log("diff", diff);
      if (diff < medianDiff) {
        medianDiff = diff;
        minIndex = j;
      }
    }
    channelArrs[minIndex].push(packet);
  }
  // for (let i = 0; i < sorted.length; i++) {
  //   let minDiff = Infinity;
  //   let minIndex = 0;
  //   for (let j = 0; j < channelArrs.length; j++) {
  //     let median = channelArrs[j].length > 0 ? channelArrs[j][Math.floor(channelArrs[j].length / 2)] : 0;
  //     let diff = Math.abs(median - sorted[i]);
  //     if (diff < minDiff) {
  //       minDiff = diff;
  //       minIndex = j;
  //     }
  //   }
  //   channelArrs[minIndex].push(sorted[i]);
  // }

  console.log("channelArrs", channelArrs);

  
  return Math.ceil(sum);
}

// console.log(findMaximumQuality([1, 2, 3, 4, 5], 2)); // 8
// console.log(findMaximumQuality([105, 200, 201], 2)); // 306

// There are n customer requests placed sequentially in a queue where the ith request has a max waiting time denoted by wait[i].
// If the ith request is not served within wait[i] seconds, then the request expires and it is removed from the queue.
// Process via FIFO.
// At each second, the first request in the queue is served.
// At the next second, the processed request and any expired requests are removed from the queue.
// Given the max waiting time of each request denoted by the array wait, find the number of requests present in the queue at every second until it is empty.
// example: findRequestsInQueue([4,3,1,2,1]) => [4,1,0]

function findRequestsInQueue(wait = []) {
  let res = [];
  let queue = wait;
  let j = 0;
  while(queue.length > 0 || j >= wait.length) {
    res.push(queue.length);
    for (let i = 0; i < queue.length; i++) {
      let curr = queue[i];
      if (curr < i + 1) {
        queue.splice(i, 1);
        i--;
      }
    }
    j++;
  }
}

console.log(findRequestsInQueue([2,2,3,1])); // [4,1,0]
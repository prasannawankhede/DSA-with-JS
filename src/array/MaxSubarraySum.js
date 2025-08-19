// function MaxSubarraySum(arr) {
//   if (arr.length === 0) {
//     return null;
//   }

//   let maxSum = 0;

//   for(let i=0;i<arr.length;i++){
//     let currentSum = 0;
//     for(let j=i;j<arr.length;j++){

//         currentSum +=arr[j];

//         if(currentSum > maxSum){
//             maxSum = currentSum;
//         }
//     }
//   }
//   return maxSum;
// }
function MaxSubarraySum(arr) {
  if (arr.length === 0) {
    return null;
  }

  let maxSum = -Infinity;
  let sum = 0;

  let start = 0,
    ansStart = 0,
    ansEnd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) {
      start = i;
    }

    sum += arr[i];

    if (sum > maxSum) {
      maxSum = sum;
      ansStart = start;
      ansEnd = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  return { maxSum, indices: [ansStart, ansEnd] };
}
module.exports = MaxSubarraySum
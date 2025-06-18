function maxSumSubarrayOfSizeK(arr, k) {
  let i = 0, j = 0;
  let sum = 0;
  let maxSum = -Infinity;

  while (j < arr.length) {
    sum += arr[j];

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      sum -= arr[i];
      i++;
      j++;
    }
  }

  // Handle case where no valid window was found
  return maxSum === -Infinity ? 0 : maxSum;
}

module.exports = maxSumSubarrayOfSizeK;

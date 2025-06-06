function findPeakElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid + 1]) {
      right = mid; // peak is in the left half (including mid)
    } else {
      left = mid + 1; // peak is in the right half
    }
  }

  return arr[left]; // or return left if you want the index
}

module.exports = findPeakElement;

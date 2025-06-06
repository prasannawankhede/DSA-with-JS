function indexOfFirstOneInInfiniteBinaryArray(arr) {
  let left = 0;
  let right = 1;

  // Expand range until we find a 1
  while (arr[right] === 0) {
    left = right;
    right *= 2;
    if (right >= arr.length) {
      right = arr.length - 1; // clamp to last index
      break;
    }
  }

  // Binary search for first 1
  let result = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === 1) {
      result = mid;
      right = mid - 1; // Look for earlier 1
    } else {
      left = mid + 1;
    }
  }

  return result;
}

module.exports = indexOfFirstOneInInfiniteBinaryArray;

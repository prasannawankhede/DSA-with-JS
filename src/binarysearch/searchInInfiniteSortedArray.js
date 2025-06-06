function searchInInfiniteSortedArray(arr, x) {
  let left = 0;
  let right = 1;

  // Expand the search boundary exponentially
  while (arr[right] < x) {
    left = right;
    right *= 2;
  }

  // Binary search between the found boundaries
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) return mid;
    if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // not found
}

module.exports = searchInInfiniteSortedArray;

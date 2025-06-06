function findPeakIndex(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > arr[mid + 1]) right = mid;
    else left = mid + 1;
  }
  return left;
}

function binarySearch(arr, left, right, target, isIncreasing) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (isIncreasing) {
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    } else {
      if (arr[mid] > target) left = mid + 1;
      else right = mid - 1;
    }
  }
  return -1;
}

function searchInBitonicArray(arr, target) {
  const peak = findPeakIndex(arr);
  const leftResult = binarySearch(arr, 0, peak, target, true);
  if (leftResult !== -1) return leftResult;
  return binarySearch(arr, peak + 1, arr.length - 1, target, false);
}

module.exports = searchInBitonicArray;

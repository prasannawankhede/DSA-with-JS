function findCeil(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === x) {
      return arr[mid]; // Exact match is also ceil
    } else if (arr[mid] < x) {
      left = mid + 1;
    } else {
      result = arr[mid]; // Potential ceil
      right = mid - 1;
    }
  }

  return result;
}
module.exports = findCeil;

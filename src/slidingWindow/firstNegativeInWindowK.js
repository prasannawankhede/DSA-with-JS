function firstNegativeInWindowK(arr, k) {
  const result = [];
  const negatives = [];
  let i = 0, j = 0;

  while (j < arr.length) {
    if (arr[j] < 0) {
      negatives.push(arr[j]);
    }

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      result.push(negatives.length ? negatives[0] : 0);

      if (arr[i] === negatives[0]) {
        negatives.shift();
      }

      i++;
      j++;
    }
  }

  return result;
}

module.exports = firstNegativeInWindowK;

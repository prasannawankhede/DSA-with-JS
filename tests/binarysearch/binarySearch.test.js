const binarySearch = require('../../src/binarysearch/binarySearch');

test('finds element in sorted array', () => {
  const arr = [1, 3, 5, 7, 9];
  expect(binarySearch(arr, 5)).toBe(2);
});

test('returns -1 when element not found', () => {
  const arr = [1, 3, 5, 7, 9];
  expect(binarySearch(arr, 4)).toBe(-1);
});

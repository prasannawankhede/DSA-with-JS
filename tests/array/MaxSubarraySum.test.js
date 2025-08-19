const MaxSubarraySum = require("../../src/array/MaxSubarraySum");

test("Find max subarray sum in mixed positive and negative array", () => {
  expect(MaxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual({
    maxSum: 6,
    indices: [3, 6],
  }); // subarray [4,-1,2,1]
});

test("Find max subarray sum in all positive array", () => {
  expect(MaxSubarraySum([1, 2, 3, 4])).toEqual({ maxSum: 10, indices: [0, 3] });
});

test("Find max subarray sum in all negative array", () => {
  expect(MaxSubarraySum([-5, -2, -3])).toEqual({ maxSum: -2, indices: [1, 1] }); // best single element
});

test("Find max subarray sum in empty array", () => {
  expect(MaxSubarraySum([])).toBeNull();
});

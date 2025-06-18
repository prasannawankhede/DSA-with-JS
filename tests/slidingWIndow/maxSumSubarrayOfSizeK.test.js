const maxSumSubarrayOfSizeK = require("../../src/slidingWindow/maxSumSubarrayOfSizeK");

describe("maxSumSubarrayOfSizeK", () => {
  test("Basic case", () => {
    expect(maxSumSubarrayOfSizeK([2, 1, 5, 1, 3, 2], 3)).toBe(9);
  });

  test("All elements same", () => {
    expect(maxSumSubarrayOfSizeK([1, 1, 1, 1], 2)).toBe(2);
  });

  test("Single window", () => {
    expect(maxSumSubarrayOfSizeK([4, 2, 1], 3)).toBe(7);
  });

  test("k larger than array", () => {
    expect(maxSumSubarrayOfSizeK([1, 2], 3)).toBe(0);
  });

  test("Negative numbers", () => {
    expect(maxSumSubarrayOfSizeK([-1, -2, -3, -4], 2)).toBe(-3);
  });
});

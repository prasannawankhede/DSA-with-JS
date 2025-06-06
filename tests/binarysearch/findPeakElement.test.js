const findPeakElement = require("../../src/binarysearch/findPeakElement");

describe("findPeakElement", () => {
  test("finds a peak in the middle", () => {
    const arr = [1, 3, 20, 4, 1, 0];
    const result = findPeakElement(arr);
    expect([20, 4]).toContain(result); // Both 20 and 4 are peaks
  });

  test("finds peak at the beginning", () => {
    const arr = [10, 5, 2];
    expect(findPeakElement(arr)).toBe(10);
  });

  test("finds peak at the end", () => {
    const arr = [1, 3, 5, 7];
    expect(findPeakElement(arr)).toBe(7);
  });

  test("single element is peak", () => {
    const arr = [42];
    expect(findPeakElement(arr)).toBe(42);
  });

  test("two elements - pick greater", () => {
    const arr = [1, 9];
    expect(findPeakElement(arr)).toBe(9);
  });
});

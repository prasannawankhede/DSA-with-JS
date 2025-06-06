// tests/searching/findCeil.test.js
const findCeil = require("../../src/binarysearch/findCeil");

describe("findCeil", () => {
  test("finds the ceil in sorted array", () => {
    expect(findCeil([1, 3, 5, 7, 9], 6)).toBe(7);
    expect(findCeil([1, 3, 5, 7, 9], 9)).toBe(9);
    expect(findCeil([1, 3, 5, 7, 9], 2)).toBe(3);
  });

  test("returns -1 if ceil does not exist", () => {
    expect(findCeil([1, 3, 5, 7, 9], 10)).toBe(-1);
  });

  test("returns first element if x is smaller than all", () => {
    expect(findCeil([10, 20, 30], 1)).toBe(10);
  });
});

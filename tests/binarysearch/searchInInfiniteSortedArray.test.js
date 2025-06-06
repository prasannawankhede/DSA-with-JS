const searchInInfiniteSortedArray = require("../../src/binarysearch/searchInInfiniteSortedArray");

describe("searchInInfiniteSortedArray", () => {
  const arr = Array.from({ length: 10000 }, (_, i) => i * 2); // [0, 2, 4, ..., 19998]

  test("returns correct index when element exists", () => {
    expect(searchInInfiniteSortedArray(arr, 0)).toBe(0);
    expect(searchInInfiniteSortedArray(arr, 8)).toBe(4);
    expect(searchInInfiniteSortedArray(arr, 19998)).toBe(9999);
  });

  test("returns -1 when element does not exist", () => {
    expect(searchInInfiniteSortedArray(arr, 7)).toBe(-1);
    expect(searchInInfiniteSortedArray(arr, 20001)).toBe(-1);
  });

  test("returns -1 for negative number (not in sorted array)", () => {
    expect(searchInInfiniteSortedArray(arr, -10)).toBe(-1);
  });
});

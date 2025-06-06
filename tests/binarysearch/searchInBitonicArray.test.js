const searchInBitonicArray = require("../../src/binarysearch/searchInBitonicArray");

describe("searchInBitonicArray", () => {
  test("finds element in increasing part", () => {
    expect(searchInBitonicArray([1, 3, 8, 12, 4, 2], 8)).toBe(2);
  });

  test("finds element in decreasing part", () => {
    expect(searchInBitonicArray([1, 3, 8, 12, 4, 2], 4)).toBe(4);
  });

  test("finds peak element", () => {
    expect(searchInBitonicArray([1, 3, 8, 12, 4, 2], 12)).toBe(3);
  });

  test("returns -1 if not found", () => {
    expect(searchInBitonicArray([1, 3, 8, 12, 4, 2], 5)).toBe(-1);
  });
});

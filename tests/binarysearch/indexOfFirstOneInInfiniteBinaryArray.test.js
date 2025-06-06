const indexOfFirstOneInInfiniteBinaryArray = require("../../src/binarysearch/indexOfFirstOneInInfiniteBinaryArray");

describe("indexOfFirstOneInInfiniteBinaryArray", () => {
  test("finds the first 1 after many 0s", () => {
    const arr = Array(500).fill(0).concat(Array(500).fill(1)); // 500 zeros, 500 ones
    expect(indexOfFirstOneInInfiniteBinaryArray(arr)).toBe(500);
  });

  test("returns -1 if array has no 1", () => {
    const arr = Array(1000).fill(0);
    expect(indexOfFirstOneInInfiniteBinaryArray(arr)).toBe(-1);
  });

  test("returns 0 if first element is 1", () => {
    const arr = Array(1000).fill(1);
    expect(indexOfFirstOneInInfiniteBinaryArray(arr)).toBe(0);
  });

  test("handles case with only one 1 at the end", () => {
    const arr = Array(999).fill(0).concat([1]);
    expect(indexOfFirstOneInInfiniteBinaryArray(arr)).toBe(999);
  });

  test("handles early 1", () => {
    const arr = Array(10).fill(0).concat(Array(990).fill(1));
    expect(indexOfFirstOneInInfiniteBinaryArray(arr)).toBe(10);
  });
});

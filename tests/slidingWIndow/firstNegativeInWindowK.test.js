const firstNegativeInWindowK = require("../../src/slidingWindow/firstNegativeInWindowK");

describe("firstNegativeInWindowK", () => {
  test("Basic case", () => {
    const arr = [12, -1, -7, 8, -15, 30, 16, 28];
    const k = 3;
    const expected = [-1, -1, -7, -15, -15, 0];
    expect(firstNegativeInWindowK(arr, k)).toEqual(expected);
  });

  test("All positive", () => {
    const arr = [1, 2, 3, 4];
    const k = 2;
    const expected = [0, 0, 0];
    expect(firstNegativeInWindowK(arr, k)).toEqual(expected);
  });

  test("All negative", () => {
    const arr = [-5, -2, -3, -1];
    const k = 2;
    const expected = [-5, -2, -3];
    expect(firstNegativeInWindowK(arr, k)).toEqual(expected);
  });

  test("Negative at edge of window", () => {
    const arr = [1, 2, -3, 4, 5];
    const k = 3;
    const expected = [-3, -3, -3];
    expect(firstNegativeInWindowK(arr, k)).toEqual(expected);
  });

  test("k larger than array", () => {
    const arr = [-1, 2];
    const k = 5;
    const expected = [];
    expect(firstNegativeInWindowK(arr, k)).toEqual(expected);
  });
});

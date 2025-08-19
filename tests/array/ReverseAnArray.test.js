const ReverseAnArray = require("../../src/array/ReverseAnArray");

describe("ReverseAnArray function", () => {
    test("should reverse a normal array", () => {
        expect(ReverseAnArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    });

    test("should reverse an array with negative numbers", () => {
        expect(ReverseAnArray([-1, -2, -3])).toEqual([-3, -2, -1]);
    });

    test("should return same array when single element", () => {
        expect(ReverseAnArray([42])).toEqual([42]);
    });

    test("should return null when array is empty", () => {
        expect(ReverseAnArray([])).toBeNull();
    });
});

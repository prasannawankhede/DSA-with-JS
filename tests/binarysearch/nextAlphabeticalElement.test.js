// tests/binarysearch/nextAlphabeticalElement.test.js
const nextAlphabeticalElement = require("../../src/binarysearch/nextAlphabeticalElement");

describe("nextAlphabeticalElement", () => {
  test("returns the next character in sorted list", () => {
    expect(nextAlphabeticalElement(["a", "c", "f", "h"], "f")).toBe("h");
  });

  test("wraps around to first character", () => {
    expect(nextAlphabeticalElement(["a", "c", "f", "h"], "h")).toBe("a");
  });

  test("returns the first larger character", () => {
    expect(nextAlphabeticalElement(["a", "c", "f", "h"], "b")).toBe("c");
  });
});

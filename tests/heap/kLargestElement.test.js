const { kLargestElement } = require("../../src/heap/kLargestElement");

// Simple assert helper
function assertArrayEqual(actual, expected, testName) {
  const arraysMatch =
    actual.length === expected.length &&
    actual.every((val, index) => val === expected[index]);

  if (arraysMatch) {
    console.log(`✅ ${testName} - Passed`);
  } else {
    console.error(
      `❌ ${testName} - Failed (Expected [${expected}], got [${actual}])`
    );
  }
}

// Test cases
(function runTests() {
  assertArrayEqual(
    kLargestElement([7, 10, 4, 3, 20, 15], 3),
    [20, 15, 10],
    "Test Case 1"
  );
  assertArrayEqual(
    kLargestElement([1, 23, 12, 9, 30, 2, 50], 3),
    [50, 30, 23],
    "Test Case 2"
  );
  assertArrayEqual(kLargestElement([5, 4, 3, 2, 1], 2), [5, 4], "Test Case 3");
  assertArrayEqual(kLargestElement([100], 1), [100], "Test Case 4");
})();

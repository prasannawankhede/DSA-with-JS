const { findKthSmallest } = require("../../src/heap/kthSmallestElement");

// Simple assert helper
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log(`✅ ${testName} - Passed`);
  } else {
    console.error(
      `❌ ${testName} - Failed (Expected ${expected}, got ${actual})`
    );
  }
}

// Test cases
(function runTests() {
  assertEqual(findKthSmallest([7, 10, 4, 3, 20, 15], 3), 7, "Test Case 1");
  assertEqual(findKthSmallest([1, 2, 3, 4, 5], 1), 1, "Test Case 2");
  assertEqual(findKthSmallest([5, 4, 3, 2, 1], 5), 5, "Test Case 3");
  assertEqual(findKthSmallest([12, 3, 5, 7, 19], 2), 5, "Test Case 4");
})();

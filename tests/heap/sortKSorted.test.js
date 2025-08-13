const { sortKSorted } = require("../../src/heap/sortKSorted");

// Helper to compare arrays
function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

function runTest(testName, nums, k, expected) {
  const result = sortKSorted(nums, k);
  if (arraysEqual(result, expected)) {
    console.log(`✅ ${testName} - Passed`);
  } else {
    console.log(
      `❌ ${testName} - Failed (Expected ${expected}, got ${result})`
    );
  }
}

// Test cases
runTest("Test Case 1", [6, 5, 3, 2, 8, 10, 9], 3, [2, 3, 5, 6, 8, 9, 10]);
runTest(
  "Test Case 2",
  [10, 9, 8, 7, 4, 70, 60, 50],
  4,
  [4, 7, 8, 9, 10, 50, 60, 70]
);
runTest("Test Case 3", [3, 2, 1], 2, [1, 2, 3]);
runTest("Test Case 4", [1, 2, 3], 1, [1, 2, 3]);

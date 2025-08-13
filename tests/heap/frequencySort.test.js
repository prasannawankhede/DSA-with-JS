const frequencySort = require("../../src/heap/frequencySort");

function runTest(nums, expected) {
  const result = frequencySort(nums);
  const pass = result.join(",") === expected.join(",");
  console.log(pass ? `✅ Test Passed (nums=${nums})` : `❌ Test Failed (nums=${nums})\n   Expected: ${expected}\n   Got:      ${result}`);
}

// Test cases
runTest([1, 1, 1, 2, 2, 3], [1, 1, 1, 2, 2, 3]);
runTest([4, 4, 4, 4, 5, 5, 6], [4, 4, 4, 4, 5, 5, 6]);
runTest([1, 2, 3, 4], [1, 2, 3, 4]); // all freq = 1
runTest([7, 7, 8, 8, 8, 9], [8, 8, 8, 7, 7, 9]);
runTest([5, 5, 5, 5, 5, 1, 1, 2, 2, 2, 3], [5, 5, 5, 5, 5, 2, 2, 2, 1, 1, 3]);

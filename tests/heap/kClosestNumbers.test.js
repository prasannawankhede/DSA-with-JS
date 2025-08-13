const { kClosestNumbers } = require('../../src/heap/kClosestNumbers');

function runTest(nums, k, x, expected) {
  const result = kClosestNumbers(nums, k, x);
  const pass = JSON.stringify(result) === JSON.stringify(expected);

  if (pass) {
    console.log(`✅ Test Passed`);
  } else {
    console.log(`❌ Test Failed (Expected ${expected}, got ${result})`);
  }
}

// Test cases
runTest([5, 6, 7, 8, 9], 3, 7, [6, 7, 8]);
runTest([2, 4, 5, 6, 9], 3, 6, [4, 5, 6]);
runTest([1, 2, 3, 4, 5], 4, 3, [1, 2, 3, 4]);
runTest([10, 15, 7, 3, 4], 2, 8, [7, 10]);

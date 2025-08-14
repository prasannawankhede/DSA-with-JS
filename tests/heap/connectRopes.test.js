const { connectRopes } = require('../../src/heap/connectRopes');

function runTest(nums, expected) {
  const result = connectRopes(nums);
  if (result === expected) {
    console.log(`✅ Test Passed (nums=${nums})`);
  } else {
    console.log(`❌ Test Failed (nums=${nums})`);
    console.log(`   Expected: ${expected}`);
    console.log(`   Got:      ${result}`);
  }
}

// Test cases
runTest([1, 2, 3, 4, 5], 33);
runTest([4, 3, 2, 6], 29);
runTest([5, 5, 5, 5], 40);

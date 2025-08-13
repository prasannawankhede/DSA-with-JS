const { topKFrequent } = require("../../src/heap/topKFrequent");

function runTest(nums, k, expected) {
  const result = topKFrequent(nums, k).sort((a, b) => a - b);
  const expectedSorted = expected.sort((a, b) => a - b);

  if (JSON.stringify(result) === JSON.stringify(expectedSorted)) {
    console.log(`✅ Test Passed (nums=${nums}, k=${k})`);
  } else {
    console.log(`❌ Test Failed (nums=${nums}, k=${k})`);
    console.log(`   Expected: ${expectedSorted}`);
    console.log(`   Got:      ${result}`);
  }
}

// Test cases
runTest([1, 1, 1, 2, 2, 3], 2, [1, 2]);
runTest([4, 4, 4, 4, 5, 5, 6], 1, [4]);
// runTest([1, 2, 3, 4], 2, [1, 2]); // any 2 numbers with same freq 1
runTest([7, 7, 8, 8, 8, 9], 2, [7, 8]);

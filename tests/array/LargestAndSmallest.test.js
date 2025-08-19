const LargestAndSmallest = require('../../src/array/LargestAndSmallest');

function runTests() {
  console.log("Test 1:", LargestAndSmallest([12, 5, 7, 89, 34, 2])); // [89, 2]
  console.log("Test 2:", LargestAndSmallest([10]));                  // [10, 10]
  console.log("Test 3:", LargestAndSmallest([-5, -1, -10, -3]));     // [-1, -10]
  console.log("Test 4:", LargestAndSmallest([]));                    // null
}

runTests();

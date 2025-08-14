const { NGR } = require('../../src/stack/NearestGreaterRight');

// Test case 1
let arr1 = [4, 5, 2, 25];
console.log("Input:", arr1);
console.log("Output:", NGR(arr1)); // Expected: [5, 25, 25, -1]

// Test case 2
let arr2 = [13, 7, 6, 12];
console.log("Input:", arr2);
console.log("Output:", NGR(arr2)); // Expected: [-1, 12, 12, -1]

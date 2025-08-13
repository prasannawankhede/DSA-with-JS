const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function topKFrequent(nums, k) {
  const freqMap = new Map();

  // Step 1: Count frequencies
  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // Step 2: Create Min Heap with priority callback
  const minHeap = new MinPriorityQueue(({ freq }) => freq);

  // Step 3: Push elements into heap
  for (let [num, freq] of freqMap.entries()) {
    minHeap.enqueue({ num, freq });
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }

  // Step 4: Extract from heap
  const result = [];
  while (!minHeap.isEmpty()) {
    result.push(minHeap.dequeue().num); // ✅ just .num
  }

  return result;
}

module.exports = { topKFrequent };

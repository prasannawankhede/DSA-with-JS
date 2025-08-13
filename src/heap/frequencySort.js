const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function frequencySort(nums) {
  const freqMap = new Map();

  for (const num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  // ✅ Provide priority callback here
  const maxHeap = new MaxPriorityQueue({ priority: (item) => item.freq });

  for (const [num, freq] of freqMap) {
    maxHeap.enqueue({ num, freq });
  }

  const result = [];
  while (!maxHeap.isEmpty()) {
    const { num, freq } = maxHeap.dequeue().element;
    for (let i = 0; i < freq; i++) {
      result.push(num);
    }
  }

  return result;
}

module.exports = frequencySort;

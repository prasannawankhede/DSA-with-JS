const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function kClosestNumbers(nums, k, x) {
  const maxHeap = new MaxPriorityQueue();

  for (let num of nums) {
    const distance = Math.abs(num - x);
    maxHeap.enqueue(num, distance);

    if (maxHeap.size() > k) {
      maxHeap.dequeue();
    }
  }

  const result = [];
  while (!maxHeap.isEmpty()) {
    result.push(maxHeap.dequeue().element);
  }

  return result;
}

module.exports = { kClosestNumbers };

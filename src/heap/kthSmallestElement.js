const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

function findKthSmallest(nums, k) {
  const maxHeap = new MaxPriorityQueue();

  for (let num of nums) {
    maxHeap.enqueue(num);

    if (maxHeap.size() > k) {
      maxHeap.dequeue();
    }
  }
  return maxHeap.front();
}

module.exports = { findKthSmallest };

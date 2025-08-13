const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function sortKSorted(nums, k) {
  let minHeap = new MinPriorityQueue();
  let result = [];

  for (let num of nums) {
    minHeap.enqueue(num);
    if (minHeap.size() > k) {
      result.push(minHeap.dequeue());
    }
  }

  while (!minHeap.isEmpty()) {
    result.push(minHeap.dequeue());
  }

  return result;
}
module.exports = { sortKSorted };

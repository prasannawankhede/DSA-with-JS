const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function kLargestElement(nums, k) {
  const minHeap = new MinPriorityQueue();
  for (let num of nums) {
    minHeap.enqueue(num);

    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }

  const result = [];
  while (!minHeap.isEmpty()) {
    result.push(minHeap.dequeue());
  }

  return result.reverse();
}
module.exports = { kLargestElement };

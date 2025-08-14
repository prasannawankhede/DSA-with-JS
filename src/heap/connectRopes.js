const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

function connectRopes(nums) {
  // Pass a priority function that works for numbers directly
  const minHeap = new MinPriorityQueue({ priority: x => x });

  // Push all ropes into heap
  for (let num of nums) {
    minHeap.enqueue(num);
  }

  let totalCost = 0;

  while (minHeap.size() > 1) {
    const first = minHeap.dequeue().element;
    const second = minHeap.dequeue().element;

    const cost = first + second;
    totalCost += cost;

    minHeap.enqueue(cost);
  }

  return totalCost;
}

module.exports = { connectRopes };

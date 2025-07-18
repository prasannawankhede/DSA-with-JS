class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  length() {
    let current = this.head;
    let counter = 0;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }
}
module.exports = { LinkedList, Node };

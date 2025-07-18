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

    search(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current.data; // found!
      }
      current = current.next;
    }

    return -1; // not found
  }
}

module.exports = {Node, LinkedList}
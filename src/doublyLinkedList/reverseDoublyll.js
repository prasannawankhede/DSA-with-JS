class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }
  reverseDLL(head) {
    if (head === null || head.next === null) {
      return head;
    }

    let prev = null;
    let current = head;

    while (current !== null) {
      prev = current.prev;

      current.prev = current.next;
      current.next = prev;

      current = current.prev;
    }

    return prev.prev;
  }
}
module.exports = { Node, DoublyLinkedList };

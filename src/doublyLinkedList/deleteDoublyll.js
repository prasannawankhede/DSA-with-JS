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

  delete(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      return;
    }

    let current = this.head;

    while (current) {
      if (current.data === data) {
        if (current.prev) {
          current.prev.next = current.next;
        }
        if (current.next) {
          current.next.prev = current.prev;
        }
        return;
      }
      current = current.next;
    }
  }
}

module.exports = { DoublyLinkedList, Node };

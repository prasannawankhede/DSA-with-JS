class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  oddEven() {
    if (this.head === null || this.head.next === null) return this.head;

    let odd = this.head;
    let even = this.head.next;
    let evenHead = even;

    while (even && even.next) {
      odd.next = odd.next.next;
      even.next = even.next.next;

      odd = odd.next;
      even = even.next;
    }

    odd.next = evenHead;

    return this.head;
  }
}

module.exports = { LinkedList, Node };

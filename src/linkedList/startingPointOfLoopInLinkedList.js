class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

    constructor(){
        this.head = null
    }
  findStartingPoint() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        slow = this.head;
        while (slow !== fast) {
          slow = slow.next;
          fast = fast.next;
        }
        return slow;
      }
    }
    return null;
  }
}
module.exports = { LinkedList, Node };

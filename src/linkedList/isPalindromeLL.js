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

  reverse(head) {
    let prev = null;
    let temp = head;
    while (temp) {
      let front = temp.next;
      temp.next = prev;
      prev = temp;
      temp = front;
    }
    return prev;
  }

  isPalindrome() {
    if (!this.head || !this.head.next) return true;

    let slow = this.head;
    let fast = this.head;

    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let newHead = this.reverse(slow.next);

    let first = this.head;
    let second = newHead;

    while (second) {
      if (first.value !== second.value) {
        slow.next = this.reverse(newHead);
        return false;
      }
      first = first.next;
      second = second.next;
    }

    slow.next = this.reverse(newHead);
    return true;
  }
}

module.exports = { LinkedList, Node };

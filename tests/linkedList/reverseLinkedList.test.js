const { LinkedList, Node } = require('../../src/linkedList/reverseLinkedList');

describe('LinkedList - Reverse', () => {
  test('should return null for empty list', () => {
    const ll = new LinkedList();
    expect(ll.reverse()).toBeNull();
  });

  test('should reverse a single-node list', () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    const reversedHead = ll.reverse();
    expect(reversedHead.value).toBe(1);
    expect(reversedHead.next).toBeNull();
  });

  test('should reverse a multi-node list', () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);

    const reversedHead = ll.reverse();

    expect(reversedHead.value).toBe(3);
    expect(reversedHead.next.value).toBe(2);
    expect(reversedHead.next.next.value).toBe(1);
    expect(reversedHead.next.next.next).toBeNull();
  });
});

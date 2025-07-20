const {
  DoublyLinkedList,
  Node,
} = require("../../src/doublyLinkedList/reverseDoublyll");

describe("DoublyLinkedList reverseDLL", () => {
  test("should reverse a multi-node doubly linked list", () => {
    // Build list: 1 ⇄ 2 ⇄ 3
    const dll = new DoublyLinkedList();
    const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    node1.next = node2;
    node2.prev = node1;
    node2.next = node3;
    node3.prev = node2;

    dll.head = node1;

    const newHead = dll.reverseDLL(dll.head);

    // Check new head
    expect(newHead.data).toBe(3);
    // Check links: 3 ⇄ 2 ⇄ 1
    expect(newHead.prev).toBeNull();
    expect(newHead.next.data).toBe(2);

    expect(newHead.next.prev.data).toBe(3);
    expect(newHead.next.next.data).toBe(1);

    expect(newHead.next.next.prev.data).toBe(2);
    expect(newHead.next.next.next).toBeNull();
  });

  test("should return same head for single node", () => {
    const dll = new DoublyLinkedList();
    const node = new Node(10);
    dll.head = node;

    const newHead = dll.reverseDLL(dll.head);
    expect(newHead).toBe(node);
  });

  test("should return null for empty list", () => {
    const dll = new DoublyLinkedList();
    const newHead = dll.reverseDLL(dll.head);
    expect(newHead).toBeNull();
  });
});

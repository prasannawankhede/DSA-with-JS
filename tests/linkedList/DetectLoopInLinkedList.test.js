const {
  LinkedList,
  Node,
} = require("../../src/linkedList/DetectLoopInLinkedList");

describe("LinkedList - Detect Loop", () => {
  test("should return false for list without loop", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);

    expect(ll.loop()).toBe(false);
  });

  test("should return true for list with loop", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);

    // Create a loop: last node points back to second node
    ll.head.next.next.next = ll.head.next;

    expect(ll.loop()).toBe(true);
  });

  test("should return false for empty list", () => {
    const ll = new LinkedList();
    expect(ll.loop()).toBe(false);
  });

  test("should return false for single node without loop", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    expect(ll.loop()).toBe(false);
  });

  test("should return true for single node pointing to itself", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = ll.head; // loop to itself

    expect(ll.loop()).toBe(true);
  });
});

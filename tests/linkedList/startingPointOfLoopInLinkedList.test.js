const {
  LinkedList,
  Node,
} = require("../../src/linkedList/startingPointOfLoopInLinkedList");

describe("LinkedList - Find Starting Point of Loop", () => {
  test("should return null for list without loop", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);

    expect(ll.findStartingPoint()).toBeNull();
  });

  test("should return the starting node for looped list", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    const second = new Node(2);
    const third = new Node(3);

    ll.head.next = second;
    second.next = third;
    third.next = second; // loop: 3 -> 2

    const loopStart = ll.findStartingPoint();
    expect(loopStart).toBe(second);
    expect(loopStart.value).toBe(2);
  });

  test("should return same node for single node with self-loop", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = ll.head; // self-loop

    const loopStart = ll.findStartingPoint();
    expect(loopStart).toBe(ll.head);
    expect(loopStart.value).toBe(1);
  });

  test("should return null for empty list", () => {
    const ll = new LinkedList();
    expect(ll.findStartingPoint()).toBeNull();
  });
});

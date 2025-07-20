const { LinkedList, Node } = require("../../src/linkedList/lengthOfLoop");

describe("LinkedList - Length of Loop", () => {
  test("should return null for list without loop", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);

    expect(ll.lengthOfLoop()).toBeNull();
  });

  test("should return correct loop length for looped list", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    const second = new Node(2);
    const third = new Node(3);
    const fourth = new Node(4);

    ll.head.next = second;
    second.next = third;
    third.next = fourth;
    fourth.next = second; // Loop: 4 -> 2

    expect(ll.lengthOfLoop()).toBe(3);
  });

  test("should return 1 for single node with self-loop", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = ll.head;

    expect(ll.lengthOfLoop()).toBe(1);
  });

  test("should return null for empty list", () => {
    const ll = new LinkedList();
    expect(ll.lengthOfLoop()).toBeNull();
  });
});

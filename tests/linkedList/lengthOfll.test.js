// tests/linkedList/lengthOfll.test.js

const { LinkedList, Node } = require("../../src/linkedList/lengthOfll");

describe("LinkedList length()", () => {
  test("returns 0 for empty list", () => {
    const ll = new LinkedList();
    expect(ll.length()).toBe(0);
  });

  test("returns correct length for single node", () => {
    const ll = new LinkedList();
    ll.head = new Node(10);
    expect(ll.length()).toBe(1);
  });

  test("returns correct length for multiple nodes", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);
    ll.head.next.next.next = new Node(4);

    expect(ll.length()).toBe(4);
  });
});

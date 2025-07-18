// tests/linkedList/searchElement.test.js

const { LinkedList, Node } = require("../../src/linkedList/searchElement");

describe("LinkedList search()", () => {
  test("returns the data when found (middle node)", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);

    expect(ll.search(2)).toBe(2);
  });

  test("returns the data when found (head node)", () => {
    const ll = new LinkedList();
    ll.head = new Node(5);
    ll.head.next = new Node(10);

    expect(ll.search(5)).toBe(5);
  });

  test("returns the data when found (last node)", () => {
    const ll = new LinkedList();
    ll.head = new Node(7);
    ll.head.next = new Node(8);
    ll.head.next.next = new Node(9);

    expect(ll.search(9)).toBe(9);
  });

  test("returns -1 when data is not found", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);

    expect(ll.search(3)).toBe(-1);
  });

  test("returns -1 when list is empty", () => {
    const ll = new LinkedList();
    expect(ll.search(1)).toBe(-1);
  });
});

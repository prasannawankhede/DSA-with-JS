// tests/linkedList/deleteNodell.test.js

const { LinkedList } = require("../../src/linkedList/deleteNodell");

describe("LinkedList deleteNode", () => {
  test("deletes a node in the middle", () => {
    const ll = new LinkedList();
    ll.head = { data: 1, next: { data: 2, next: { data: 3, next: null } } };

    ll.deleteNode(ll.head, 2);

    expect(ll.toArray()).toEqual([1, 3]);
  });

  test("deletes the head node", () => {
    const ll = new LinkedList();
    ll.head = { data: 10, next: { data: 20, next: { data: 30, next: null } } };

    ll.deleteNode(ll.head, 10);

    expect(ll.toArray()).toEqual([20, 30]);
  });

  test("deletes the last node", () => {
    const ll = new LinkedList();
    ll.head = { data: 5, next: { data: 15, next: { data: 25, next: null } } };

    ll.deleteNode(ll.head, 25);

    expect(ll.toArray()).toEqual([5, 15]);
  });

  test("tries to delete a non-existing node", () => {
    const ll = new LinkedList();
    ll.head = { data: 1, next: { data: 2, next: null } };

    ll.deleteNode(ll.head, 100);

    expect(ll.toArray()).toEqual([1, 2]);
  });

  test("deletes from an empty list", () => {
    const ll = new LinkedList();

    ll.deleteNode(ll.head, 1);

    expect(ll.toArray()).toEqual([]);
  });
});

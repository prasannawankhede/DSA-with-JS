// tests/doublyLinkedList/insertDoublyll.test.js

const {
  DoublyLinkedList,
} = require("../../src/doublyLinkedList/insertDoublyll");

describe("DoublyLinkedList", () => {
  test("insert at end works", () => {
    const dll = new DoublyLinkedList();
    dll.insert(1);
    dll.insert(2);
    dll.insert(3);

    expect(dll.toArray()).toEqual([1, 2, 3]);
  });

  test("insert at beginning works", () => {
    const dll = new DoublyLinkedList();
    dll.insert(2);
    dll.insert(3);
    dll.insertAtBeginning(1);

    expect(dll.toArray()).toEqual([1, 2, 3]);
  });

  test("insert at beginning when list is empty", () => {
    const dll = new DoublyLinkedList();
    dll.insertAtBeginning(1);

    expect(dll.toArray()).toEqual([1]);
  });
});

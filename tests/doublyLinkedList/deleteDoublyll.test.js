const { DoublyLinkedList, Node } = require("../../src/doublyLinkedList/deleteDoublyll");

describe("DoublyLinkedList delete()", () => {
  test("deletes head node", () => {
    const dll = new DoublyLinkedList();
    dll.head = new Node(1);
    dll.head.next = new Node(2);
    dll.head.next.prev = dll.head;

    dll.delete(1);

    expect(dll.head.data).toBe(2);
    expect(dll.head.prev).toBeNull();
    expect(dll.head.next).toBeNull();
  });

  test("deletes middle node", () => {
    const dll = new DoublyLinkedList();
    dll.head = new Node(1);
    dll.head.next = new Node(2);
    dll.head.next.prev = dll.head;
    dll.head.next.next = new Node(3);
    dll.head.next.next.prev = dll.head.next;

    dll.delete(2);

    expect(dll.head.data).toBe(1);
    expect(dll.head.next.data).toBe(3);
    expect(dll.head.next.prev.data).toBe(1);
    expect(dll.head.next.next).toBeNull();
  });

  test("deletes last node", () => {
    const dll = new DoublyLinkedList();
    dll.head = new Node(1);
    dll.head.next = new Node(2);
    dll.head.next.prev = dll.head;
    dll.head.next.next = new Node(3);
    dll.head.next.next.prev = dll.head.next;

    dll.delete(3);

    expect(dll.head.data).toBe(1);
    expect(dll.head.next.data).toBe(2);
    expect(dll.head.next.next).toBeNull();
  });

  test("does nothing if data not found", () => {
    const dll = new DoublyLinkedList();
    dll.head = new Node(1);
    dll.head.next = new Node(2);
    dll.head.next.prev = dll.head;

    dll.delete(99);

    expect(dll.head.data).toBe(1);
    expect(dll.head.next.data).toBe(2);
    expect(dll.head.next.prev.data).toBe(1);
    expect(dll.head.next.next).toBeNull();
  });

  test("does nothing if list is empty", () => {
    const dll = new DoublyLinkedList();
    dll.delete(1);
    expect(dll.head).toBeNull();
  });
});

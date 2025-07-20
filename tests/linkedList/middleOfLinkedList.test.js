const { LinkedList, Node } = require("../../src/linkedList/middleOfLinkedList");

describe("LinkedList - Find Middle Node", () => {
  test("returns middle node for odd-length list", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);
    ll.head.next.next.next = new Node(4);
    ll.head.next.next.next.next = new Node(5);

    const middle = ll.middle();
    expect(middle.value).toBe(3);
  });

  test("returns middle node for even-length list (second middle)", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);
    ll.head.next.next.next = new Node(4);
    ll.head.next.next.next.next = new Node(5);
    ll.head.next.next.next.next.next = new Node(6);

    const middle = ll.middle();
    expect(middle.value).toBe(4); // For even-length, it returns second middle
  });

  test("returns null for empty list", () => {
    const ll = new LinkedList();
    const middle = ll.middle();
    expect(middle).toBeNull();
  });

  test("returns head for single-node list", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    const middle = ll.middle();
    expect(middle.value).toBe(1);
  });
});

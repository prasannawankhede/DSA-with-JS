const { LinkedList, Node } = require("../../src/linkedList/oddEvenLinkedList");

describe("LinkedList - oddEven", () => {
  test("should return null for empty list", () => {
    const ll = new LinkedList();
    expect(ll.oddEven()).toBeNull();
  });

  test("should return same head for single node", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    expect(ll.oddEven().value).toBe(1);
  });

  test("should rearrange odd and even nodes", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);
    ll.head.next.next.next = new Node(4);
    ll.head.next.next.next.next = new Node(5);

    ll.oddEven();

    // After rearrangement, list should be 1->3->5->2->4
    let result = [];
    let curr = ll.head;
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }

    expect(result).toEqual([1, 3, 5, 2, 4]);
  });

  test("should rearrange list with even length", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);
    ll.head.next.next.next = new Node(4);

    ll.oddEven();

    // After rearrangement: 1->3->2->4
    let result = [];
    let curr = ll.head;
    while (curr) {
      result.push(curr.value);
      curr = curr.next;
    }

    expect(result).toEqual([1, 3, 2, 4]);
  });
});

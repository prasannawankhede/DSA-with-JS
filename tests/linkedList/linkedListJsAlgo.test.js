const { LinkedList, Node } = require("../../src/linkedList/linkedListJsAlgo");

// If you didn’t export Node, that's fine too — only LinkedList is needed

describe("LinkedList Basic Methods", () => {
  test("isEmpty returns true for new list", () => {
    const ll = new LinkedList();
    expect(ll.isEmpty()).toBe(true);
  });

  test("getSize returns 0 for new list", () => {
    const ll = new LinkedList();
    expect(ll.getSize()).toBe(0);
  });

  test("prepend adds a node at the beginning", () => {
    const ll = new LinkedList();
    ll.prepend(10);
    expect(ll.isEmpty()).toBe(false);
    expect(ll.getSize()).toBe(1);
    expect(ll.head.value).toBe(10);

    ll.prepend(20);
    expect(ll.getSize()).toBe(2);
    expect(ll.head.value).toBe(20);
    expect(ll.head.next.value).toBe(10);
  });

  test("print outputs correct values", () => {
    const ll = new LinkedList();
    console.log = jest.fn();

    ll.print();
    expect(console.log).toHaveBeenCalledWith("List is Empty");

    ll.prepend(1);
    ll.prepend(2);
    ll.prepend(3);

    console.log = jest.fn();
    ll.print();
    // Note: You used single quotes instead of backticks in print
    // so '${curr.value}' won’t interpolate — we’ll test the literal string:
    // But you probably meant to use backticks: `

    // If you fix it to:
    // listValues += `${curr.value} `

    // Then this works:
    expect(console.log).toHaveBeenCalledWith("3 2 1 ");
  });

  test("append adds a node at the end", () => {
    const ll = new LinkedList();

    // Append first node
    ll.append(5);
    expect(ll.getSize()).toBe(1);
    expect(ll.head.value).toBe(5);
    expect(ll.head.next).toBe(null);

    // Append second node
    ll.append(10);
    expect(ll.getSize()).toBe(2);
    expect(ll.head.value).toBe(5);
    expect(ll.head.next.value).toBe(10);
    expect(ll.head.next.next).toBe(null);

    // Append third node
    ll.append(15);
    expect(ll.getSize()).toBe(3);
    expect(ll.head.next.next.value).toBe(15);
    expect(ll.head.next.next.next).toBe(null);
  });
  test("insert adds a node at the specified index", () => {
    const ll = new LinkedList();

    // Insert at head when list is empty
    ll.insert(10, 0);
    expect(ll.getSize()).toBe(1);
    expect(ll.head.value).toBe(10);

    // Insert at head when list has nodes
    ll.insert(5, 0);
    expect(ll.getSize()).toBe(2);
    expect(ll.head.value).toBe(5);
    expect(ll.head.next.value).toBe(10);

    // Insert at end
    ll.insert(20, 2);
    expect(ll.getSize()).toBe(3);
    expect(ll.head.next.next.value).toBe(20);

    // Insert in middle
    ll.insert(15, 2);
    expect(ll.getSize()).toBe(4);
    expect(ll.head.next.next.value).toBe(15);
    expect(ll.head.next.next.next.value).toBe(20);

    // Try inserting at invalid index
    ll.insert(100, 10); // Should not insert
    expect(ll.getSize()).toBe(4);
  });
  test("removeFrom removes node at specified index", () => {
    const ll = new LinkedList();
    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.getSize()).toBe(3);

    // Remove first node
    const removed1 = ll.removeFrom(0);
    expect(removed1).toBe(10);
    expect(ll.getSize()).toBe(2);
    expect(ll.head.value).toBe(20);

    // Remove middle node
    ll.append(40);
    const removed2 = ll.removeFrom(1);
    expect(removed2).toBe(30);
    expect(ll.getSize()).toBe(2);

    // Remove last node
    const removed3 = ll.removeFrom(1);
    expect(removed3).toBe(40);
    expect(ll.getSize()).toBe(1);

    // Remove with invalid index
    const removed4 = ll.removeFrom(10);
    expect(removed4).toBeNull();
    expect(ll.getSize()).toBe(1);
  });

  test("removeValue removes first occurrence of value", () => {
  const ll = new LinkedList();
  ll.append(10);
  ll.append(20);
  ll.append(30);

  expect(ll.removeValue(20)).toBe(20);
  expect(ll.getSize()).toBe(2);
  expect(ll.head.next.value).toBe(30);

  expect(ll.removeValue(10)).toBe(10);
  expect(ll.getSize()).toBe(1);
  expect(ll.head.value).toBe(30);

  expect(ll.removeValue(100)).toBeNull();
  expect(ll.getSize()).toBe(1);
});

});

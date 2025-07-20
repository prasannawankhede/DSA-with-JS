const {
  LinkedList,
  Node,
} = require("../../src/linkedList/linkedListWithTail.js");

describe("LinkedList with Tail", () => {
  test("prepend adds node to front", () => {
    const ll = new LinkedList();
    ll.prepend(10);
    expect(ll.head.value).toBe(10);
    expect(ll.tail.value).toBe(10);
    expect(ll.size).toBe(1);

    ll.prepend(20);
    expect(ll.head.value).toBe(20);
    expect(ll.tail.value).toBe(10);
    expect(ll.size).toBe(2);
  });

  test("append adds node to end", () => {
    const ll = new LinkedList();
    ll.append(10);
    expect(ll.head.value).toBe(10);
    expect(ll.tail.value).toBe(10);
    expect(ll.size).toBe(1);

    ll.append(20);
    expect(ll.head.value).toBe(10);
    expect(ll.tail.value).toBe(20);
    expect(ll.size).toBe(2);
  });

  test("removeFromFront removes node from front", () => {
    const ll = new LinkedList();
    ll.append(10);
    ll.append(20);

    expect(ll.removeFromFront()).toBe(10);
    expect(ll.head.value).toBe(20);
    expect(ll.tail.value).toBe(20);
    expect(ll.size).toBe(1);

    expect(ll.removeFromFront()).toBe(20);
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
    expect(ll.size).toBe(0);
  });

  test("removeFromEnd removes node from end", () => {
    const ll = new LinkedList();
    ll.append(10);
    ll.append(20);
    ll.append(30);

    expect(ll.removeFromEnd()).toBe(30);
    expect(ll.tail.value).toBe(20);
    expect(ll.size).toBe(2);

    expect(ll.removeFromEnd()).toBe(20);
    expect(ll.tail.value).toBe(10);
    expect(ll.size).toBe(1);

    expect(ll.removeFromEnd()).toBe(10);
    expect(ll.head).toBeNull();
    expect(ll.tail).toBeNull();
    expect(ll.size).toBe(0);
  });

  test("reverse reverses the linked list", () => {
    const ll = new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.reverse();

    expect(ll.head.value).toBe(3);
    expect(ll.head.next.value).toBe(2);
    expect(ll.tail.value).toBe(1);
    expect(ll.tail.next).toBeNull();
  });
});

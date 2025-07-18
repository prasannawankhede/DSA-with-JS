// D:\js-DSA\test\linkedList\insertNodell.test.js

const { LinkedList } = require("../../src/linkedList/insertNodell");

describe("LinkedList Insert", () => {
  test("inserts first node", () => {
    const ll = new LinkedList();
    ll.insert(1);
    expect(ll.head.data).toBe(1);
    expect(ll.head.next).toBeNull();
  });

  test("inserts multiple nodes at end", () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);

    expect(ll.toArray()).toEqual([1, 2, 3]);
  });
});

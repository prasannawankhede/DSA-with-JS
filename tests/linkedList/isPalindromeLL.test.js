const { LinkedList, Node } = require("../../src/linkedList/isPalindromeLL");

describe("LinkedList - isPalindrome", () => {
  test("should return true for empty list", () => {
    const ll = new LinkedList();
    expect(ll.isPalindrome()).toBe(true);
  });

  test("should return true for single node list", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    expect(ll.isPalindrome()).toBe(true);
  });

  test("should return true for palindrome list", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(2);
    ll.head.next.next.next = new Node(1);

    expect(ll.isPalindrome()).toBe(true);
  });

  test("should return false for non-palindrome list", () => {
    const ll = new LinkedList();
    ll.head = new Node(1);
    ll.head.next = new Node(2);
    ll.head.next.next = new Node(3);
    ll.head.next.next.next = new Node(4);

    expect(ll.isPalindrome()).toBe(false);
  });
});

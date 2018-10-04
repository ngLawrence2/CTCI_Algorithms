const Node = require("./node.js");
 // Implement an algorithm to find the kth to last element of a singly linked list
const kth_to_last = (head, k) => {
  let current = head;
  while(k > 0) {
    current = current.next;
    k-=1;
  }
  while(current.next.data != null) {
    current=current.next;
    head=head.next;
  }
  return head;
}

const h = new Node(null);
const head = new Node(1);
h.next = head;
const second = new Node(2);
head.next = second;
const third = new Node(3);
second.next = third;
const fourth = new Node(4);
third.next = fourth;
const fifth = new Node(5);
fourth.next = fifth;
fifth.next = new Node(null);
kth_to_last(h, 2);

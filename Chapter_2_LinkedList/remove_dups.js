const Node = require('./node.js');
//  Write code to remove duplicates from an unsorted linked list.
const removeDups = (head) => {
  res = {};
};


const h = new Node(null);
const head = new Node(1);
h.next = head;
const second = new Node(1);
head.next = second;
const third = new Node(2);
second.next = third;
const fourth = new Node(3);
third.next = fourth;
const fifth = new Node(1);
fourth.next = fifth;
fifth.next = new Node(null);
removeDups(h);

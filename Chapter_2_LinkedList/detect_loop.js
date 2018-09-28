// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop
const Node = require("./node.js");

const detect_cycle = (head) => {
  let fast = head;
  let slow = head;
  while(true) {
    if(fast.data === slow.data) {
      console.log(fast.next.data);
      return fast.next.data;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
}


const head = new Node('A');
const second = new Node('B');
head.next = second;
const third = new Node('C');
second.next = third;
const fourth = new Node('D');
third.next = fourth;
const fifth = new Node('E');
fourth.next = fifth;
fifth.next = third;


detect_cycle(head);

const Node = require('./node.js');
//  Write code to remove duplicates from an unsorted linked list.
const removeDups = (head) => {
  const set_in_list = new Set();
  while(head.next!=null) {
    if(set_in_list.has(head.next.data)) {
      console.log('there are dups');
      return true;
    }
    set_in_list.add(head.next.data);
    head = head.next;
  }
  console.log('no dups');
  return false;
};


const h = new Node(null);
const head = new Node(1);
h.next = head;
const second = new Node(6);
head.next = second;
const third = new Node(2);
second.next = third;
const fourth = new Node(3);
third.next = fourth;
const fifth = new Node(10);
fourth.next = fifth;
fifth.next = new Node(null);
removeDups(h);

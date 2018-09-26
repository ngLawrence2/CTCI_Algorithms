const Node = require('./node.js');
//  Write code to remove duplicates from an unsorted linked list.
const removeDups = (head) => {
  res = {};
  let current = head;
  while(current.next!=null) {
    res[current.next.data] = 1;
    current=current.next;
  }
  let current1 = head;
  for(let i = 0 ; i < res.length; i++) {
     current1.next = res[i];
     current1=current1.next;
  }
  while(head.next!=null) {
    console.log(head.next.data);
    head=head.next;
  }
  return head;
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
fifth.next = null;
removeDups(h);

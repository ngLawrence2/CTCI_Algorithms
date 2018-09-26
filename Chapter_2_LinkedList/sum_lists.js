// You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list.
const Node = require('./node.js');

const sum_lists_backward = (n1, n2) => {
  
}

// input => (7 -> 1 -> 6) + (5 -> 9 -> 2)  = (2 -> 1 -> 9)
// 617 + 295 = 912
const h = new Node(null);
const first = new Node(7);
const second = new Node(1);
const third = new Node(6);

const h2 = new Node(null);
const fourth = new Node(5);
const fifth = new Node(9);
const sixth = new Node(2);

h.next = first;
first.next = second;
second.next = third;
third.next = new Node(null);

h2.next = fourth;
fourth.next = fifth;
fifth.next = sixth;
sixth.next = new Node(null);



const sum_lists_forward = (n1, n2) => {

}

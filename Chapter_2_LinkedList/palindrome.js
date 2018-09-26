 // Implement a function to check if a linked list is a palindrome.
 const Node = require('./node.js');

 const palindrome = (head) => {
   
 }

const h = new Node(null);
const first = new Node("m");
const second = new Node("o");
const third = new Node("m");
h.next = first;
first.next = second;
second.next = third;
third.next = new Node(null);

palindrome(h);

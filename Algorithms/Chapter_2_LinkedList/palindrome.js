 // Implement a function to check if a linked list is a palindrome.
 const Node = require('./node.js');

 const palindrome = (head) => {
   let curr = head;
   let stack = [];
   while(curr!==null) {
     stack.push(curr);
     curr = curr.next;
   }
   let reverse = reverse_linked_list(head);
   while(reverse!==null && stack.length > 0) {
     let last = stack.pop();
     if(reverse.data !== last.data) {
        console.log(reverse.data + " != " + last.data );
       return false;
     }
     reverse = reverse.next;
   }
   if(reverse!==null || stack.length > 0) {
     console.log("false");
     return false;
   }
   console.log("true");
   return true;
 }

 const reverse_linked_list = head => {
   let curr = head;
   let prev = null;
   let next = null;
   while(curr !== null) {
     next = curr.next;
     curr.next = prev;
     prev = curr;
     curr = next ;
   }
   return prev;
 }


const first = new Node("m");
const second = new Node("o");
const third = new Node("m");

first.next = second;
second.next = third;
// third.next = new Node("a");

palindrome(first);

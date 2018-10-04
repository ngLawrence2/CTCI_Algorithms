// Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need
// to be after the elements less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.
const Node = require('./node.js');

const partition = (head, partition_value) => {
  let current = head;
  let smaller;
  let smaller_idx;
  let bigger;
  let bigger_idx;
  while(current!==null) {
      if(current.data < partition_value) {
        if(smaller===undefined) {
          smaller = current;
          smaller.next = smaller_idx;
        } else {
          smaller_idx = current;
          smaller_idx = smaller_idx.next;
        }
      } else {
        if(bigger === undefined) {
          bigger = current;
          bigger.next = bigger_idx;
        } else {
          bigger_idx = current;
          bigger = bigger_idx.next;
        }
      }
      current = current.next;
  }
  smaller_idx.next = bigger;
  return smaller;
}



const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(0);
const fifth = new Node(5);
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth

// 1 -> 2 -> 3 -> 0 -> 5 , 3
// 1 -> 2 -> 0 -> 3 -> 5


partition(head, 3);

// Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. lf x is contained within the list, the values of x only need
// to be after the elements less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.
const Node = require('./node.js');

const partition = (head, partition_value) => {

}


const h = new Node(null);
const head = new Node(1);
h.next = head;
const second = new Node(2);
head.next = second;
const third = new Node(3);
second.next = third;
const fourth = new Node(3);
third.next = fourth;
const fifth = new Node(5);
fourth.next = fifth;
fifth.next = new Node(null);
partition(h, 3);

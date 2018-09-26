// Implement an algorithm to delete a node in the middle (i.e., any node but
// the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
// that node.
const Node = require("./node.js");


const delete_middle_node = (mid_node) => {
    //copy the data of the next node
    //set the next pointer to the one after next_node
    let next_node = mid_node.next;
    mid_node.data = next_node.data;
    mid_node.next = next_node.next;
}

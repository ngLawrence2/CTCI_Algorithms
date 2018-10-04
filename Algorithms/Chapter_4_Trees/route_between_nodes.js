
// Given a directed graph, design an algorithm to find out whether there is a route between two nodes.
const BSTNode = require('./bst_node.js');

const route_between_nodes = (head,target) => {
  let queue = [head];
  while(queue.length > 0) {
    let current = queue.shift();
    if (current.val === target) {
      console.log("true");
      return true;
    }
    if(current.left !== null ) {
      queue.push(current.left);
    }
    if(current.right !== null) {
      queue.push(current.right);
    }
  }
  console.log(false);
}


let target = 5;
let head = new BSTNode(7);
let left = new BSTNode(3);
let right = new BSTNode(10);
let left2 = new BSTNode(5);
head.left = left;
head.right = right;
left.right = left2;

route_between_nodes(head,5);

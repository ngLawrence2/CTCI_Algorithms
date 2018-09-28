// Given a sorted (increasing order) array with unique integer elements, write an algorithm
// to create a binary search tree with minimal height

const BSTNode = require('./bst_node.js');



const minimal_tree = array => {
  let mid = Math.floor(array.length/2);
  let middle_element = array[mid];
  let bst_tree = new BST_Tree();
  bst_tree.root = new BSTNode(middle_element);
  array.splice(mid,1);
  for(let i = 0 ; i < array.length ; i++ ) {
    bst_tree.insert(new BSTNode(array[i]));
  }
  return bst_tree;
}

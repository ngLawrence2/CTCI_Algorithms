// Implement a function to check if a binary tree is a binary search tree.
const BSTNode = require("./bst_node.js");

const validate_BST = root => {
  let array = create_inorder_array(root);
  let in_order = array.slice().sort();
  if(array.toString() === in_order.toString()) {
    return true;
  }
  return false;
}

const create_inorder_array = (root, result = [], set = new Set()) => {
    if(root === null) {
        return [];
    }
    if(root.left !== null) {
         create_inorder_array(root.left,result,set);
    }
    if(!set.has(root.val)) {
      result.push(root.val);
      set.add(root.val);
    }
    if(root.right!==null) {
        create_inorder_array(root.right,result,set);
    }
    return result;
}

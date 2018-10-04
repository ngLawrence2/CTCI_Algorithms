// Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
// node never differ by more than one.
const BSTNode = require("./bst_node.js");

var isBalanced = function(root) {
    if(root===null) {
        return true;
    }
    let left = depth(root.left);
    let right = depth(root.right);
    let res = Math.abs(left-right);
    if(res > 1 ) {
       return false;
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

const depth = root => {
    if(root===null) {
        return 0;
    }
    let left = depth(root.left) + 1;
    let right = depth(root.right) + 1;
    if(left>right) {
        return left;
    }
    return right;
}

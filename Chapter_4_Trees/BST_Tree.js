const BSTNode = require('./bst_node.js');

class BST_Tree {
  constructor() {
    this.root=null;
  }

  insert(val) {
    if(this.root === null) {
      this.root = new BSTNode(val);
    } else {
      insert_helper(this.root,val);
    }
  }

  insert_helper(tree_node = this.root, val) {
    if(tree_node.val > val) {
      if(tree_node.left===null) {
        tree_node.left = new BSTNode(val);
        return;
      } else {
        insert_helper(tree_node.left,val);
      }
    } else {
      if(tree_node.right === null) {
        tree_node.right = new BSTNode(val);
        return ;
      } else {
        insert_helper(tree_node.right,val);
      }
    }
  }
}

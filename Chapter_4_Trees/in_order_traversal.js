var inorderTraversal = function(root, res = []) {
    // if(root===null) {
    //     return res;
    // }
    // if(root.left !== null) {
    //     inorderTraversal(root.left,res);
    // }
    // res.push(root.val);
    // if(root.right!==null) {
    //     inorderTraversal(root.right,res);
    // }
    // return res;
    if(root===null) {
        return [];
    }
    let sorted = [];
    let stack = [];
    while(true) {
        if(root!==null) {
              stack.push(root);
              root = root.left;
        } else {
            if(stack.length === 0 ) {
                return sorted;
            }
            root = stack.pop();
            sorted.push(root.val);
            root = root.right;
        }
    }
    return sorted;

};

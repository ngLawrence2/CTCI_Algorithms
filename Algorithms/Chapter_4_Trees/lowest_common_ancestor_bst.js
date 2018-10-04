var lowestCommonAncestor = function(root, p, q) {
    if(root===null) {
        return null;
    }
    let big = p;
    let small = q;
    if(p.val < q.val) {
        big = q;
        small = p;

    }
    if(root.val < big.val && root.val > small.val) {
        return root;
    } else if (root.val === big.val || root.val === small.val) {
        return root;
    } else if(root.val < big.val && root.val < small.val) {
        return lowestCommonAncestor(root.right, p , q);
    } else {
        return lowestCommonAncestor(root.left, p , q);
    }
};
